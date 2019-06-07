package net.edeetee.pictocraft.mixin;

import java.awt.Color;
import java.util.List;

import com.mojang.blaze3d.platform.GlStateManager;
import com.mojang.blaze3d.platform.GlStateManager.DestFactor;
import com.mojang.blaze3d.platform.GlStateManager.SourceFactor;

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


//TODO: minecraft blocks, input, allow users to turn off in game

@Mixin(ChatHud.class)
public abstract class DrawChatMixin extends net.minecraft.client.gui.DrawableHelper {
	@Inject(method = "draw", at = @At("HEAD"), cancellable = true)
	private void preDraw(int tick, CallbackInfo info) {
		info.cancel();

		// PictoLine.clearCache(tick);
		List<PictoLine> lines =  PictoLine.all();
		
		int size = 30;

		RenderUtil.push();
		RenderUtil.scale(size, size);
		RenderUtil.translate(0, -0.2f);
		// GlStateManager.enableBlend();
		// GlStateManager.blendFunc(SourceFactor.SRC_ALPHA, DestFactor.ONE_MINUS_SRC_ALPHA);
		for (PictoLine line : lines) {
			if(!line.isLoaded())
				continue;

			line.render();
			RenderUtil.translate(0, -2.1f);
		}
		RenderUtil.pop();
		RenderUtil.setColor(Color.white);

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