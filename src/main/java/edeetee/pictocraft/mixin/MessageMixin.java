package edeetee.pictocraft.mixin;

import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfo;
import net.minecraft.client.gui.hud.ChatListenerHud;

import edeetee.pictocraft.PictoLineRender;

@Mixin(ChatListenerHud.class)
public abstract class MessageMixin {

    @Inject(method = "onChatMessage", at = @At("HEAD"))
    public void preChatMessage(net.minecraft.network.MessageType chatMessageType_1, net.minecraft.text.Text messageText, CallbackInfo info) {
        // System.out.println(message.getMessage().toString());
        // System.out.println(message.getLocation());
        PictoLineRender.tryFrom(messageText);
    }
    
}