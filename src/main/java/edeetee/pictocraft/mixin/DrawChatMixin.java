package edeetee.pictocraft.mixin;

import java.awt.Color;
import java.util.List;

import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfo;

import net.minecraft.client.gui.hud.ChatHud;

import edeetee.pictocraft.RenderUtil;
import edeetee.pictocraft.PictoLineRender;

//TODO: allow users to turn off in game, display code in game

@Mixin(ChatHud.class)
public abstract class DrawChatMixin extends net.minecraft.client.gui.DrawableHelper {
	
	@Inject(method = "draw", at = @At("HEAD"), cancellable = true)
	private void preDraw(int tick, CallbackInfo info) {
		info.cancel();

		// PictoLine.clearCache(tick);
		List<PictoLineRender> lines =  PictoLineRender.all();
		
		int size = 25;

		RenderUtil.push();
		RenderUtil.scale(size, size);
		RenderUtil.translate(0, -0.15f);
		// GlStateManager.enableBlend();
		// GlStateManager.blendFunc(SourceFactor.SRC_ALPHA, DestFactor.ONE_MINUS_SRC_ALPHA);
		for (PictoLineRender line : lines) {
			if(!line.isLoaded())
				continue;

			line.render();
			RenderUtil.translate(0, -2.1f);
		}
		RenderUtil.pop();
		RenderUtil.setColor(Color.white);
	}
}