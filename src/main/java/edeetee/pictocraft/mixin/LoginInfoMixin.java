package edeetee.pictocraft.mixin;

import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfo;

import net.minecraft.client.gui.screen.PauseScreen;
import edeetee.pictocraft.InfoRenderer;

@Mixin(PauseScreen.class)
public abstract class LoginInfoMixin {

    @Inject(method = "render", at = @At("RETURN"))
    public void renderInfo(int x, int y, float float_1, CallbackInfo info) {
        InfoRenderer.render();
    }
}