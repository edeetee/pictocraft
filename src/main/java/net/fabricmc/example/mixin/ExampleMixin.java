package net.fabricmc.example.mixin;

import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfo;

import net.minecraft.client.gui.hud.ChatHud;

@Mixin(ChatHud.class)
public class ExampleMixin {

	@Inject(method = "draw", at = @At("HEAD"))
	private void preDraw(int int_1, CallbackInfo info) {
		// System.out.println(info.isCancellable() ? "Can" : "Cannot" + " Cancel");
		
		System.out.println("draw1 " + int_1);
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