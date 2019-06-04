package net.fabricmc.example;

import java.util.ArrayList;

import org.apache.http.HttpResponse;
import org.apache.http.NameValuePair;
import org.apache.http.client.HttpClient;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.message.BasicNameValuePair;

public class Request {
    static final HttpClient httpclient = new DefaultHttpClient();
    static final String url = "http://webservices.ccl.kuleuven.be/picto.php";

    public static <PostMethod> void getPictos(String message){
        HttpPost httpPost;
        ArrayList<NameValuePair> postParameters;
        httpPost = new HttpPost(url);

        postParameters = new ArrayList<NameValuePair>();
        postParameters.add(new BasicNameValuePair("input", message));
        postParameters.add(new BasicNameValuePair("language", "english"));
        postParameters.add(new BasicNameValuePair("picto", "sclera"));

        try{
            httpPost.setEntity(new UrlEncodedFormEntity(postParameters, "UTF-8"));
            HttpResponse response = httpclient.execute(httpPost);
            
        } catch(Exception e){
            System.err.println("Request.java ERROR");
            e.printStackTrace();
        }

    }
}