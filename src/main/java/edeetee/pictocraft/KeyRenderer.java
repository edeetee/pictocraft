package edeetee.pictocraft;

import net.minecraft.client.MinecraftClient;
import net.minecraft.client.font.Font;
import net.minecraft.client.font.TextRenderer;

public class KeyRenderer {
    static final TextRenderer renderer = MinecraftClient.getInstance().textRenderer;
    static final float padding = 10;
    static final float scale = 1.5f;
    static final String webMessage = "AAC input: https://edeetee.github.io/pictocraft?k="+PictoInputReceiver.key;
    static final String connectedText = PictoInputReceiver.key + " - CONNECTED!";

    public static void render(){
        // Font
        RenderUtil.push();

        RenderUtil.translate(padding, padding);
        renderer.draw(webMessage, 0, 0, -1);

        RenderUtil.scale(scale, scale);
        RenderUtil.translate(0, padding);
        renderer.draw("Key: " + (PictoInputReceiver.isConnected() ? connectedText : PictoInputReceiver.key), 0, 0, -1);

        RenderUtil.pop();
    }
}