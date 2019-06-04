package net.fabricmc.example.mixin;

import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.Shadow;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfo;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import net.minecraft.client.MinecraftClient;
import net.minecraft.client.gui.hud.ChatHud;
import net.minecraft.client.gui.hud.ChatHudLine;
import net.minecraft.client.render.debug.DebugRenderer.Renderer;
import net.minecraft.client.texture.NativeImage;
import net.minecraft.client.texture.Texture;
import net.minecraft.client.texture.TextureManager;
import net.minecraft.network.chat.Component;
import net.minecraft.network.chat.TextComponent;
import net.minecraft.util.Identifier;

import net.fabricmc.example.RenderUtil;

import net.minecraft.client.render.block.BlockRenderManager;

import net.fabricmc.example.PictoLine;

@Mixin(ChatHud.class)
public abstract class ExampleMixin extends net.minecraft.client.gui.DrawableHelper {
	private static final TextureManager manager = MinecraftClient.getInstance().getTextureManager();
	private static final Identifier testTexture = new Identifier("modid", "icon.png");

	@Shadow private java.util.List<net.minecraft.client.gui.hud.ChatHudLine> visibleMessages;

	@Inject(method = "draw", at = @At("HEAD"), cancellable = true)
	private void preDraw(int tick, CallbackInfo info) {
		// info.cancel();

		PictoLine.clearCache(tick);
		// PictoLine.list();

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
		manager.bindTexture(testTexture);
		// tex.bindTexture();
		// System.out.println(tex);
		// int texId = tex.getGlId();
		// System.out.println(texId);
		int size = 128/4;
		RenderUtil.drawTexturedModalRect(size/2, 0, size, size);
	}

	@Inject(method = "removeMessage", at = @At("HEAD"))
	public void removeCachedMessage(int id, CallbackInfo info) {
		System.out.println("REMOVED: " + id);
		// cachedMessages.remove(id).message
	}

	@Inject(method = "addMessage", at = @At("HEAD"))
	public void addMessageCatch(net.minecraft.network.chat.Component component_1, CallbackInfo info) {
		for (ChatHudLine line : visibleMessages) {
			PictoLine message = PictoLine.tryFrom(line);

			if(message != null){
				// NativeImage.fromInputStream(inputStream_1);
			}
		}
	}

	// @Inject(method = "addMessage", at = @At("HEAD"))
	// public void addMessage(net.minecraft.network.chat.Component component_1) {
	// 	System.out.println("addmessage: " + component_1.getString());
	// }
	
	// public void addMessage(net.minecraft.network.chat.Component component_1, int int_1) {
	// }
	
	// private void addMessage(net.minecraft.network.chat.Component component_1, int int_1, int int_2, boolean boolean_1) {
	// }
}