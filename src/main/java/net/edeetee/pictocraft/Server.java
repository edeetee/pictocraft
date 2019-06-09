package net.edeetee.pictocraft;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.InetAddress;
import java.net.ServerSocket;
import java.net.Socket;
import java.net.UnknownHostException;

public class Server {
    static final int PORT = 0;
    
    Server() throws Exception {
        this(null);
    }

    private ServerSocket server;
    public Server(String ipAddress) throws Exception {
        InetAddress ip = (ipAddress != null && !ipAddress.isEmpty()) ? 
            InetAddress.getByName(ipAddress) : InetAddress.getLocalHost();

        this.server = new ServerSocket(PORT, 1, ip);

        new Thread(new Runnable(){
        
            @Override
            public void run() {
                try{
                    System.out.println("Running Server: " + 
                        "Host=" + getSocketAddress().getHostAddress() + 
                        " Port=" + getPort());
                        
                    listen();

                } catch(Exception e) {
                    e.printStackTrace();
                }
            }
        }, "SERVER: " + PORT).start();
    }

    private void listen() throws Exception {
        String data = null;
        Socket client = this.server.accept();
        String clientAddress = client.getInetAddress().getHostAddress();
        System.out.println("\r\nNew connection from " + clientAddress);
        
        BufferedReader in = new BufferedReader(
                new InputStreamReader(client.getInputStream()));    
                    
        while ( (data = in.readLine()) != null ) {
            System.out.println("\r\nMessage from " + clientAddress + ": " + data);
        }
    }

    public InetAddress getSocketAddress() {
        return this.server.getInetAddress();
    }
    
    public int getPort() {
        return this.server.getLocalPort();
    }
}