package net.edeetee.pictocraft;

import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

import net.minecraft.block.Block;
import net.minecraft.client.MinecraftClient;
import net.minecraft.client.texture.Texture;
import net.minecraft.client.texture.TextureManager;
import net.minecraft.item.Item;
import net.minecraft.item.ItemGroup;
import net.minecraft.item.ItemStack;
import net.minecraft.network.chat.TranslatableComponent;
import net.minecraft.util.Identifier;
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

    static void generateMap(){
        // Registry.ITEM.get
        for (Item item : Registry.ITEM) {
            String text = getName(item);
            String rawId = itemToId(item);
            items.put(text, rawId);
            System.out.println(text + ": " + rawId);
            // System.out.println();
        }
    }
}