package edeetee.pictocraft;

import java.io.InputStream;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import net.minecraft.item.Item;
import net.minecraft.item.Items;
import net.minecraft.network.chat.TranslatableComponent;
import net.minecraft.util.registry.Registry;

public class ItemSearch {
    static Map<String, String> items = new HashMap<>();

    static String tryFind(String text){
        return items.get(text);
        // ItemGroup.SEARCH.
        // SearchManager manager = new SearchManager();
        // manager.apply(;
    }

    static final String resourcePath = "/assets/minecraft/lang/en_us.json";
    static final InputStream resource = ItemSearch.class.getResourceAsStream(resourcePath);

    static String itemToId(Item item){
        return "id-" + Integer.toString(Item.getRawId(item));
    }

    static Item idToItem(String item){
        if(item.startsWith("id-"))
            return Item.byRawId(Integer.parseInt(item.substring(3)));
        else
            return null;
    }

    static String getName(Item item){
        return ((TranslatableComponent)item.getName()).getText().toLowerCase();
    }

    static void generateMapExtras(){
        // Registry.ITEM.get
        //sorted to give precidence to longer sentences
        for (int subWords = 0; subWords < 3; subWords++) {
            for (Item item : Registry.ITEM) {
                String rawId = itemToId(item);

                List<String> words = Arrays.asList(getName(item).split(" "));

                //words being cut down must be makings words of multiples
                if(subWords < words.size() && words.size()-subWords <= 2)
                    continue;
                
                for (int i = 0; i < words.size()-subWords; i++) {
                    String combined = String.join(" ", words.subList(i, i+subWords+1));
                    items.putIfAbsent(combined, rawId);
                    // System.out.println(combined + ": " + rawId);
                }

            }
        }
    }

    //TODO: make this faster, maybe cache it?
    static void generateMap(){
        for (Item item : Registry.ITEM) {
            if(item == Items.AIR)
                continue;
                
            String rawId = itemToId(item);
            items.putIfAbsent(getName(item), rawId);
            // System.out.println(getName(item) + ": " + rawId);
        }
    }

    static final String validSpaceRegex = "[^A-Za-z ]+";
    static List<String> getWordsAndIds(String sentence){
        List<String> words = new ArrayList<>(Arrays.asList(sentence.split(" ")));
                
        for (int numWords = Math.max(words.size(), 3); 0 < numWords; numWords--) {
            for (int i = 0; i <= words.size()-numWords; i++) {
                String combined = String.join(" ", words.subList(i, i+numWords)).replaceAll(validSpaceRegex, "");
                // System.out.println("TRY: " + combined);
                String returned = tryFind(combined);
                if(returned != null){
                    System.out.println("FOUNDITEM: " + combined + ": " + returned);
                    words.set(i, returned);
                    if(i+1 < words.size() && i+numWords <= words.size()){
                        words.subList(i+1, i+numWords).clear();
                    }
                    // words.
                    // for (int word = 1; word < numWords; word++) {
                    //     words[i+word] = null;
                    // }
                }
            }
        }

        return words;
    }
}