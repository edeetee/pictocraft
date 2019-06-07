package net.edeetee.pictocraft;

import java.awt.Color;
import java.awt.image.BufferedImage;
import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;
import java.util.List;

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

    RenderItem(Item item){
        icon = item.getStackForRender();
    }

    @Override
    public void render() {
        RenderUtil.push();
        float pad = -.75f;
        float scale = 1.8f;
        // RenderUtil.translate(pad, pad);
        RenderUtil.scale(scale, -scale);
        GlStateManager.enableTexture();
        renderer.renderItem(icon, Type.GUI);
        // renderer.renderGuiItem(icon, 0, 0);
        // renderer.renderGuiItem(icon, 0, 0);
        // renderer.render
        RenderUtil.pop();
    }
}

public class PictoLine implements Renderable {
    final public String username;
    final public Color userColor;
    final public String message;
    private long createdMillis;

    // private List<BufferedImage> tempImages;
    // private List<Integer> glIds;
    private List<Renderable> pictos = new ArrayList<>();

    private boolean loaded = false;

    // private static final TextureManager manager = MinecraftClient.getInstance().getTextureManager();

    private PictoLine(String username, String message){
        this.username = username;
        this.message = message.toLowerCase();

        userColor = Color.getHSBColor((float)username.hashCode()/Integer.MAX_VALUE, 1.0f, 1.0f);

        new Thread(new Runnable(){
            @Override
            public void run() {
                List<String> imgLinks = Request.getPictos(message);

                if(imgLinks.size() == 0)
                    System.err.println("NO LINKS RETURNED");

                for (String imgLink : imgLinks) {
                    // System.out.println(imgLink);
                    Item item = ItemSearch.idToItem(imgLink);
                    if(item != null)
                        pictos.add(new RenderItem(item));
                    else {
                        try{
                            URL url = new URL(imgLink);
                            pictos.add(new RenderPicto(url));
                        } catch(MalformedURLException e){
                            System.out.println(imgLink + " is not a valid URL");
                        }
                    }
                }

                loaded = true;
                createdMillis = System.currentTimeMillis();
            }
        }, "PictoLineLoad").start();
    }

    @Override
    public String toString() {
        return "PictoLine(" + username + ": " + message + ")";
    }

    public boolean isLoaded(){
        return loaded;
    }

    static final Integer showMillis = 10000;
    static final Integer fadeMillis = 2000;
    public float getOpacity(){
        return 0.8f*Math.min(1, Math.max(0, 1f-(float)(System.currentTimeMillis()-createdMillis-showMillis)/fadeMillis));
    }

    static final int padding = 1;
    static final int colorBarWidth = 10;
    
    @Override
    public void render() {
        RenderUtil.push();
        float opacity = getOpacity();
        RenderUtil.drawRect(userColor, 0.2f, 1, opacity);
        RenderUtil.translate(1.3f, 0);
        for (Renderable picto : pictos) {
            picto.render();
            // RenderUtil.drawTexturedModalRect(id, xOffset*size+size/2, -100-yOffset, size/2, size/2);
            // RenderUtil.drawTexturedModalRect(id, size+xOffset, -yOffset, size, size, opacity);
            RenderUtil.translate(2.04f, 0);
            // RenderUtil.translate(-100, 0);
        }
        RenderUtil.pop();
    }

    private static List<PictoLine> cache = new ArrayList<>();

    public static List<PictoLine> all(){
        cache.removeIf(line -> line.isLoaded() && (line.getOpacity() <= 0 || line.pictos.size() == 0));
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