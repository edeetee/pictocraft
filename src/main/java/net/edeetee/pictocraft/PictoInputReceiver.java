package net.edeetee.pictocraft;

import java.io.IOException;
import java.net.NetworkInterface;
import java.net.SocketException;
import java.util.Collections;
import java.util.Random;

import org.apache.commons.io.IOUtils;
import org.apache.http.HttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.HttpClients;

class PictoInputReciever {
    //uses https://httprelay.io
    
    static final String BaseUrl = "https://httprelay.io/link/pictocraft";
    static final Random rand = new Random();

    interface MessageCallback {
        void gotMessage(String sentence);
    }

    static final String key = getKey();

    PictoInputReciever(MessageCallback callback) {
        System.out.println("INPUT KEY: " + key);

        // HttpClient httpclient = HttpClients.createDefault();
        HttpGet get = new HttpGet(BaseUrl + "message" + key);
        String postUrl = BaseUrl + "connect" + key;
        System.out.println(postUrl);
        HttpPost post = new HttpPost(postUrl);

        new Thread(new Runnable(){
            @Override
            public void run() {
                try{
                    while(true){
                        HttpResponse resp = HttpClients.createDefault().execute(post);
                        System.out.println("responded to connect request");
                    }
                } catch(IOException e){
                    e.printStackTrace();
                }
            }
        }, "InputReceiverConnect").start();
        
        new Thread(new Runnable(){
            @Override
            public void run() {
                try{
                    while(true){
                        HttpResponse resp = HttpClients.createDefault().execute(get);
                        String body = IOUtils.toString(resp.getEntity().getContent(), "UTF-8");
                        String text = PictoToText.getText(body);
                        System.out.println("RECEIVED: " + text);
                        callback.gotMessage(text);
                    }
                } catch(IOException e){
                    e.printStackTrace();
                }
            }
        }, "InputRecieverMessage").start();
    }
    
    static String getKey(){
        int hash = 0;
        try{
            hash = Collections.list(NetworkInterface.getNetworkInterfaces()).stream()
                .map(cur -> getHash(cur))
                .reduce(0, (prev, cur) -> prev == 0 && cur != 0 ? cur : prev);

        } catch(SocketException e){
            System.err.println("Couldn't get unique device address, using random");
        }

        if(hash == 0)
            hash = rand.nextInt();

        return Integer.toString(hash, 36).substring(0, 4);
    }

    static int getHash(NetworkInterface iface){
        if(iface == null)
            return 0;

        try{
            byte[] bytes = iface.getHardwareAddress();
            if(bytes == null)
                return 0;

            int total = 1;
            for (byte b : bytes) {
                total = Math.abs(b*total);
            }

            System.out.println(iface.getDisplayName() + ": " + total);

            return total;
        } catch(SocketException e){
            return 0;
        }
    }
}