package net.edeetee.pictocraft;

import java.io.IOException;
import java.net.InetAddress;
import java.net.NetworkInterface;
import java.net.SocketException;
import java.net.UnknownHostException;
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
            NetworkInterface iface = NetworkInterface.getByInetAddress(InetAddress.getLocalHost());
            hash = getHash(iface.getHardwareAddress());
            // System.out.println("hw key from " + iface.getDisplayName());
        } catch(SocketException|UnknownHostException e){
            System.err.println("Couldn't get unique device address, using random");
            hash = rand.nextInt();
        }

        return Integer.toString(hash, 36).substring(0, 4);
    }

    static int getHash(byte[] bytes){
        int total = 1;
        for (byte b : bytes) {
            total = Math.abs(b*total);
        }
        return total;
    }
}