package net.edeetee.pictocraft;

import java.io.IOException;
import java.net.InetAddress;
import java.net.NetworkInterface;
import java.net.SocketException;
import java.net.UnknownHostException;
import java.util.Collections;
import java.util.Enumeration;
import java.util.Random;

import org.apache.commons.io.IOUtils;
import org.apache.http.HttpResponse;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.HttpClients;

class InputReciever {
    //For other brokers if hivemq fails:
    //https://github.com/mqtt/mqtt.github.io/wiki/public_brokers
    //https://diyprojects.io/8-online-mqtt-brokers-iot-connected-objects-cloud/

    /**
     * Sourced from http://www.mqtt-dashboard.com/
     */
    static final String BaseUrl = "https://httprelay.io/link/pictocraft";
    static final Random rand = new Random();

    static final String key = getKey();

    InputReciever() {
        System.out.println("INPUT KEY: " + key);

        HttpClient httpclient = HttpClients.createDefault();
        HttpGet get = new HttpGet(BaseUrl + key);
        
        new Thread(new Runnable(){
        
            @Override
            public void run() {
                try{
                    while(true){
                        HttpResponse resp = httpclient.execute(get);
                        String body = IOUtils.toString(resp.getEntity().getContent(), "UTF-8");
                        System.out.println("RECEIVED: " + body);
                    }
                } catch(IOException e){
                    e.printStackTrace();
                }
            }
        }, "InputReciever").start();
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