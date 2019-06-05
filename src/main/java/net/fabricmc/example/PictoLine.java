package net.fabricmc.example;

import java.awt.Color;
import java.awt.image.BufferedImage;
import java.io.IOException;
import java.io.InputStream;
import java.net.URL;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.Executor;

import javax.imageio.ImageIO;

import com.mojang.blaze3d.platform.GlStateManager;

import org.lwjgl.opengl.GL13C;

import net.minecraft.client.MinecraftClient;
import net.minecraft.client.texture.NativeImage;
import net.minecraft.client.texture.NativeImageBackedTexture;
import net.minecraft.client.texture.TextureManager;
import net.minecraft.network.chat.Component;
import net.minecraft.network.chat.TextComponent;
import net.minecraft.util.Identifier;

public class PictoLine {
    final public String username;
    final public Color userColor;
    final public String message;
    private long createdMillis;

    private List<BufferedImage> tempImages;
    private List<Integer> glIds;

    private boolean loadFailed = false;

    // private static final TextureManager manager = MinecraftClient.getInstance().getTextureManager();

    private PictoLine(String username, String message){
        this.username = username;
        this.message = message;

        userColor = Color.getHSBColor((float)username.hashCode()/Integer.MAX_VALUE, 1.0f, 1.0f);

        new Thread(new Runnable(){
            @Override
            public void run() {
                List<String> imgUrls = Request.getPictos(message);
                List<BufferedImage> imgs = new ArrayList<>();
                for (String imgUrl : imgUrls) {
                    try{
                        imgs.add(ImageIO.read(new URL(imgUrl)));
                    } catch (IOException e){
                        loadFailed = true;
                        System.err.println("img " + imgUrl + " failed:");
                        e.printStackTrace();
                    }
                }

                if(!imgs.isEmpty())
                    tempImages = imgs;
                else{
                    System.out.println("No translation for: " + message);
                    loadFailed = true;
                }
            }
        }, "ahh").start();
    }

    @Override
    public String toString() {
        return "PictoLine(" + username + ": " + message + ")";
    }

    private boolean isLoaded = false;
    public List<Integer> getIds(){
        if(tempImages != null){
            glIds = new ArrayList<>();
            for (BufferedImage img : tempImages) {
                int texId = RenderUtil.loadTexture(img);
                img.flush();
                glIds.add(texId);
            }
            tempImages = null;
            createdMillis = System.currentTimeMillis();
        }

        return glIds;
    }

    public boolean isLoaded(){
        return tempImages != null || glIds != null;
    }

    static final Integer showMillis = 10000;
    static final Integer fadeMillis = 2000;
    public float getOpacity(){
        return 0.8f*Math.min(1, Math.max(0, 1f-(float)(System.currentTimeMillis()-createdMillis-showMillis)/fadeMillis));
    }

    private static List<PictoLine> cache = new ArrayList<>();

    public static List<PictoLine> list(){
        cache.removeIf(line -> line.loadFailed || (line.isLoaded && line.getOpacity() <= 0));
        return cache;
    }

    public static PictoLine tryFrom(Component chat){
        Iterator<Component> textLine = chat.iterator();

        String username = null;
        String message = null;

        for (int i = 0; textLine.hasNext(); i++) {
            TextComponent comp = (TextComponent)textLine.next();
            String value = comp.getText();

            // System.out.println(i + ": " + comp);

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
            cache.add(0, cur);
            return cur;
        } else
            return null;
    }

    // /**
    //  * Use to clear cache of lines over time
    //  * @param curTick
    //  */
    // public static void clearCache() {
    //     long curTick = System.currentTimeMillis();
    //     Set<Long> keys = cache.keySet();
    //     for (Long createTick : keys) {
    //         if(createTick+2000 < curTick){
    //             System.out.println("REMOVING: " + cache.get(createTick));
    //             keys.remove(createTick);
    //         }
    //     }
    // }
}