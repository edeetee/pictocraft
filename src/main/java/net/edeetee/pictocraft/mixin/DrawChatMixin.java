package net.edeetee.pictocraft.mixin;

import java.util.List;

import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.Shadow;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfo;

import net.minecraft.client.MinecraftClient;
import net.minecraft.client.gui.hud.ChatHud;
import net.minecraft.client.texture.TextureManager;
import net.minecraft.util.Identifier;

import net.edeetee.pictocraft.RenderUtil;

import net.edeetee.pictocraft.PictoLine;

//TODO: minecraft blocks, input, 

@Mixin(ChatHud.class)
public abstract class DrawChatMixin extends net.minecraft.client.gui.DrawableHelper {
	private static final TextureManager manager = MinecraftClient.getInstance().getTextureManager();
	private static final Identifier testTexture = new Identifier("modid", "icon.png");

	@Shadow private java.util.List<net.minecraft.client.gui.hud.ChatHudLine> visibleMessages;

	@Inject(method = "draw", at = @At("HEAD"), cancellable = true)
	private void preDraw(int tick, CallbackInfo info) {
		info.cancel();

		// PictoLine.clearCache(tick);
		List<PictoLine> lines =  PictoLine.list();

		int size = 284/8;
		int padding = 1;
		int colorBarWidth = 10;

		int yOffset = padding;
		for (PictoLine line : lines) {
			if(!line.isLoaded())
				continue;
			float opacity = line.getOpacity();
			RenderUtil.drawRect(line.userColor, 0, -yOffset, colorBarWidth, size, opacity);
			int xOffset = colorBarWidth;
			for (Integer id : line.getIds()) {
				// RenderUtil.drawTexturedModalRect(id, xOffset*size+size/2, -100-yOffset, size/2, size/2);
				RenderUtil.drawTexturedModalRect(id, size+xOffset, -yOffset, size, size, opacity);
				xOffset += size*2+padding;
			}
			yOffset += size*2+padding;
		}

		// System.out.println(info.isCancellable() ? "Can" : "Cannot" + " Cancel");
		// this.drawString(, string_1, int_1, int_2, int_3);
		// this.blit(int_1, int_2, int_3, int_4, int_5, int_6);
		// System.out.println(this.visibleMessages);
		// GlStateManager.texImage2D(int_1, int_2, int_3, int_4, int_5, int_6, int_7, int_8, intBuffer_1);
		// GlStateManager.color4f(1.0F, 1.0F, 1.0F, 1.0F);
		// this.blit(left, top, 0, 0, width, height);
		// System.out.println(testTexture);
		// System.out.println(manager);
		// Texture tex = manager.getTexture(testTexture);
		// GlStateManager.bindTexture(int_1);
		// manager.bindTexture(testTexture);
		// tex.bindTexture();
		// System.out.println(tex);
		// int texId = tex.getGlId();
		// System.out.println(texId);
	}
}