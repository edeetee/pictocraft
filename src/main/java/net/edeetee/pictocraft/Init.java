package net.edeetee.pictocraft;

import java.net.URISyntaxException;
import java.util.List;

import io.socket.client.IO;
import io.socket.client.Socket;
import io.socket.emitter.Emitter;
import net.fabricmc.api.ModInitializer;
import net.minecraft.client.MinecraftClient;
import net.minecraft.client.render.item.ItemRenderer;
import net.minecraft.item.Item;

public class Init implements ModInitializer {
	static final int PORT = 1024;
	

	@Override
	public void onInitialize() {
		// assets.minecraft.lang
		// This code runs as soon as Minecraft is in a mod-load-ready state.
		// However, some things (like resources) may still be uninitialized.
		// Proceed with mild caution.
		
		System.out.println("Hello Fabric world!");
		ItemSearch.generateMap();
		
		// try{
		// 	Server server = new Server();
		// } catch (Exception e){
		// 	e.printStackTrace();
		// }

		socketio();

	}

	public void socketio(){
		IO.Options opts = new IO.Options();
		opts.port = PORT;
		
		try{
			Socket socket = IO.socket("http://localhost", opts);
			socket.on(Socket.EVENT_CONNECT, new Emitter.Listener() {
				@Override
				public void call(Object... args) {
				//   socket.emit("foo", "hi");
					System.out.println(args);
					System.out.println("connected");
				  	socket.disconnect();
				}
			});
			socket.connect();
			System.out.println("SOCKET " + socket);
			
			
		} catch (URISyntaxException e){
			e.printStackTrace();
		}
	}

	public void test(){
		System.out.println("DIRT: " + ItemSearch.tryFind("dirt"));

		// System.out.println(ItemSearch.replaceWords("find me some sugar cane"));
		// System.out.println(ItemSearch.replaceWords("do you have any dirt or sugar cane?"));
		List<String> testValues = Request.getPictoUrls("do you have any dirt or sugar cane?");
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
