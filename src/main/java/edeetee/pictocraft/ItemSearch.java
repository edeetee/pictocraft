package edeetee.pictocraft;

import java.io.InputStream;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang3.StringUtils;

import net.minecraft.item.Item;
import net.minecraft.item.Items;
import net.minecraft.util.registry.Registry;

public class ItemSearch {

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
        return item.getName().asString().toLowerCase();
    }

    static String tryFind(String text){
        String rawId = null;

        if(text.lastIndexOf("s") == text.length()-1)
            rawId = items.get(text.substring(0, text.length()-1));

        if(rawId == null)
            rawId = items.get(text);

        return rawId;
    }


    static Map<String, String> items = genMap();
    static Map<String, String> genMap(){
        Map<String, String> items = new HashMap<>();
        for (Item item : Registry.ITEM) {
            if(item == Items.AIR)
                continue;

            String rawId = itemToId(item);
            String name = getName(item);
            if(name.lastIndexOf("s") == name.length()-1)
                name = name.substring(0, name.length()-1);

            items.putIfAbsent(name, rawId);

            List<String> words = Arrays.asList(name.split(" "));

            //add words only from end (quarts stair, smooth quarts stair. NOT JUST SMOOTH.)
            //continue up to second word
            for (int startSplit = words.size()-1; 0 < startSplit; startSplit--) {
                String subName = String.join(" ", words.subList(startSplit, words.size()));
                items.putIfAbsent(subName, rawId);
            }
        }
        
        return items;
    }

    //can't use distance or levenshtein because it would take words like none = bone, and = sand
    static boolean sameName(String name, String testName){
        boolean isSame = name.equals(testName);
        if(isSame)
            System.out.println("ITEMSTR: " + name);
        return isSame;
    }

    static final String validSpaceRegex = "[^A-Za-z ]+";
    static List<String> getWordsAndIds(String sentence){
        long startMs = System.currentTimeMillis();
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

        System.out.println((System.currentTimeMillis()-startMs) + "ms: getWordsAndIds");

        return words;
    }
}