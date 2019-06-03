package net.fabricmc.example;

import java.util.List;

import net.minecraft.network.chat.Component;

public class PictoLine {
    final public String username;
    final public String message;

    private PictoLine(String username, String message){
        this.username = username;
        this.message = message;
    }

    public static PictoLine tryFrom(net.minecraft.client.gui.hud.ChatHudLine line){
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
            System.out.println(username + ": " + message);
            return new PictoLine(username, message);
        } else
            return null;
    }
}