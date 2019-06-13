package net.edeetee.pictocraft;

import java.awt.Color;
import java.awt.image.BufferedImage;
import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.imageio.ImageIO;

import com.ibm.icu.impl.URLHandler.URLVisitor;
import com.mojang.blaze3d.platform.GlStateManager;

import org.apache.commons.lang3.ArrayUtils;

import net.minecraft.client.MinecraftClient;
import net.minecraft.client.render.item.ItemRenderer;
import net.minecraft.client.render.model.json.ModelTransformation.Type;
import net.minecraft.client.search.SearchManager;
import net.minecraft.item.Item;
import net.minecraft.item.ItemStack;
import net.minecraft.network.chat.Component;
import net.minecraft.network.chat.TextComponent;
import net.minecraft.util.Identifier;

class RenderPicto implements Renderable {
    static Map<String, RenderPicto> cache = new HashMap<>();

    public static RenderPicto questionMark = tryFromURL(TextToPicto.getPictoUrls("?").get(0));

    public static RenderPicto tryFromURL(String URL){
        if(cache.containsKey(URL))
            return cache.get(URL);

        try{
            URL url = new URL(URL);
            RenderPicto picto = new RenderPicto(url);
            cache.put(URL, picto);
            // cache.entrySet().removeIf(entry -> entry)
            return picto;
        } catch(MalformedURLException e){
            // System.out.println(idOrWord + " is not a valid URL");
        }
        return questionMark;
    }

    BufferedImage img;
    RenderPicto(URL url){
        try{
            img = ImageIO.read(url);
        } catch(IOException e){
            e.printStackTrace();
        }
    }

    Integer glId;

    @Override
    public void render() {
        if(img != null){
            glId = RenderUtil.loadTexture(img);
            img.flush();
            img = null;
        }
        if(glId != null){
            RenderUtil.drawTexturedModalRect(glId);
        }
    }
}

class RenderItem implements Renderable {
    final ItemStack icon;
    private static final ItemRenderer renderer = MinecraftClient.getInstance().getItemRenderer();
    
    public static RenderItem tryFromId(String id){
        Item item = ItemSearch.idToItem(id);
        if(item != null)
            return new RenderItem(item);
        else
            return null;
    }

    private RenderItem(Item item){
        icon = item.getStackForRender();
    }

    @Override
    public void render() {
        RenderUtil.push();
        float pad = -.75f;
        float scale = 1.8f;
        // RenderUtil.translate(pad, pad);
        RenderUtil.scale(scale, -scale);
        renderer.renderItem(icon, Type.GUI);
        RenderUtil.pop();
    }
}

public class PictoLine implements Renderable {
    final public String username;
    final public Color userColor;
    final public String message;

    List<Renderable> pictos = new ArrayList<>();

    Long createdMillis;

    // private static final TextureManager manager = MinecraftClient.getInstance().getTextureManager();

    private PictoLine(String username, String message){
        this.username = username;
        this.message = message.toLowerCase();

        userColor = Color.getHSBColor((float)username.hashCode()/Integer.MAX_VALUE, 1.0f, 1.0f);

        new Thread(new Runnable(){
            @Override
            public void run() {
                List<String> imgLinks = TextToPicto.getPictoUrls(ItemSearch.getWordsAndIds(PictoLine.this.message));

                if(imgLinks != null && imgLinks.size() == 0)
                    System.err.println("NO LINKS RETURNED");

                for (int i = 0; i < imgLinks.size(); i++) {
                    // System.out.println(imgLink);
                    String urlOrId = imgLinks.get(i);
                    Renderable picto = RenderItem.tryFromId(urlOrId);
                    
                    if(picto == null)
                        picto = RenderPicto.tryFromURL(urlOrId);

                    if(picto != null)
                        pictos.add(picto);
                }

                createdMillis = System.currentTimeMillis();
            }
        }, "PictoLineLoad").start();
    }

    @Override
    public String toString() {
        return "PictoLine(" + username + ": " + message + ")";
    }

    public boolean isLoaded(){
        return createdMillis != null;
    }

    static final Integer showMillis = 10000;
    static final Integer fadeMillis = 5000;
    public float getOpacity(){
        return Math.min(1, Math.max(0, 1f-(float)(System.currentTimeMillis()-createdMillis-showMillis)/fadeMillis));
    }

    static final int padding = 1;
    static final int colorBarWidth = 10;
    
    @Override
    public void render() {
        RenderUtil.push();
        float opacity = getOpacity();
        RenderUtil.drawRect(userColor, 0.2f, opacity, opacity*0.8f);
        RenderUtil.translate(1.3f, 0);
        // RenderUtil.setColor(Color.WHITE, opacity);
        for (Renderable picto : pictos) {
            // RenderUtil.drawOutline(Color.BLACK, 1, 1, opacity*0.5f);
            picto.render();
            // RenderUtil.drawTexturedModalRect(id, xOffset*size+size/2, -100-yOffset, size/2, size/2);
            // RenderUtil.drawTexturedModalRect(id, size+xOffset, -yOffset, size, size, opacity);
            RenderUtil.translate(2.04f, 0);
            // RenderUtil.translate(-100, 0);
        }
        RenderUtil.pop();
    }

    private static List<PictoLine> messages = new ArrayList<>();

    public static List<PictoLine> all(){
        messages.removeIf(line -> line.isLoaded() && (line.getOpacity() <= 0 || line.pictos.size() == 0));
        return messages;
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
            messages.add(0, cur);
            return cur;
        } else
            return null;
    }
}