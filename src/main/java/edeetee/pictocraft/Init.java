package edeetee.pictocraft;

import java.util.List;

import net.fabricmc.api.ClientModInitializer;
import net.fabricmc.api.ModInitializer;
import net.minecraft.client.MinecraftClient;
import net.minecraft.client.network.ClientPlayerEntity;
import net.minecraft.item.Item;

public class Init implements ModInitializer {

	@Override
	public void onInitialize() {
		// assets.minecraft.lang
		// This code runs as soon as Minecraft is in a mod-load-ready state.
		// However, some things (like resources) may still be uninitialized.
		// Proceed with mild caution.
		
		System.out.println("Hello Fabric world!");
		ItemSearch.generateMap();
		
		new PictoInputReciever(sentence -> {
			ClientPlayerEntity player = MinecraftClient.getInstance().player;
			if(player != null)
				player.sendChatMessage(sentence);
		});
	}

	public void test(){
		System.out.println("DIRT: " + ItemSearch.tryFind("dirt"));

		// System.out.println(ItemSearch.replaceWords("find me some sugar cane"));
		// System.out.println(ItemSearch.replaceWords("do you have any dirt or sugar cane?"));
		List<String> testValues = TextToPicto.getPictoUrls("do you have any dirt or sugar cane?");
		for (String word : testValues) {
			System.out.println(word);
			Item item = ItemSearch.idToItem(word);
			if(item != null)
				System.out.println(ItemSearch.getName(item));
			// new ItemStack(ItemCon)
			// renderer.renderItem(itemStack_1, modelTransformation$Type_1);
			// ItemStack.fromTag(compoundTag_1)
			// Identifier id = new Identifier(word);
			// System.out.println(id.getPath());
			// System.out.println(manager.getTexture(id));
		}
		// System.out.println(String.join("\n", ));

		System.exit(0);
	}
}
