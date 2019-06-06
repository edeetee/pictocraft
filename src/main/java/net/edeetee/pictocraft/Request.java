package net.edeetee.pictocraft;

import java.util.ArrayList;
import java.util.List;

import org.apache.commons.io.IOUtils;
import org.apache.http.HttpResponse;
import org.apache.http.NameValuePair;
import org.apache.http.client.HttpClient;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.message.BasicNameValuePair;

public class Request {
    static final String url = "http://picto.ccl.kuleuven.be/picto.php";
    static final String charSet = "UTF-8";

    public static List<String> getPictos(String message){
        HttpClient httpclient = HttpClients.createDefault();
        HttpPost httpPost;
        ArrayList<NameValuePair> postParameters;
        httpPost = new HttpPost(url);

        postParameters = new ArrayList<NameValuePair>();
        postParameters.add(new BasicNameValuePair("input", message));
        postParameters.add(new BasicNameValuePair("language", "english"));
        postParameters.add(new BasicNameValuePair("picto", "sclera"));

        try{
            httpPost.setEntity(new UrlEncodedFormEntity(postParameters, charSet));
            HttpResponse response = httpclient.execute(httpPost);

            List<String> list = new ArrayList<>();
            
            for (String line : IOUtils.readLines(response.getEntity().getContent(), charSet)) {
                if(line.contains("<img src=\"http://webservices.ccl.kuleuven.be/picto/")){
                    int startI = line.indexOf("\"")+1;
                    int endI = line.indexOf("\"", startI);
                    String url = line.substring(startI, endI);
                    list.add(url);
                }
            }
            return list;
        } catch(Exception e){
            System.err.println("Request.java ERROR");
            e.printStackTrace();
            return null;
        }

    }
}