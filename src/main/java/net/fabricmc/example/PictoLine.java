package net.fabricmc.example;

import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import net.minecraft.network.chat.Component;

public class PictoLine {
    final public String username;
    final public String message;

    private PictoLine(String username, String message){
        this.username = username;
        this.message = message;
    }

    @Override
    public String toString() {
        return "PictoLine(" + username + ": " + message + ")";
    }
    

    private static Map<Integer, PictoLine> cache = new HashMap<>();

    public static Collection<PictoLine> list(){
        return cache.values();
    }

    public static PictoLine tryFrom(net.minecraft.client.gui.hud.ChatHudLine line){
        Integer id = line.getTickCreated();

        if(cache.containsKey(id))
            return cache.get(id);

        List<Component> textLine = line.getContents().getSiblings();

        String username = null;
        String message = null;

        for (int i = 0; i < textLine.size(); i++) {
            String value = textLine.get(i).getString();

            if(1 < value.length()){
                if(i == 1)
                    username = value;
                else if (i == 3)
                    message = value;
            }
        }

        if(username != null && message != null){
            PictoLine cur = new PictoLine(username, message);
            System.out.println(cur);
            cache.putIfAbsent(id, cur);
            return cur;
        } else
            return null;
    }

    /**
     * Use to clear cache of lines over time
     * @param curTick
     */
    public static void clearCache(int curTick) {
        Set<Integer> keys = cache.keySet();
        for (Integer createTick : keys) {
            if(createTick+100 < curTick){
                System.out.println("REMOVING: " + cache.get(createTick));
                keys.remove(createTick);
            }
        }
    }
}