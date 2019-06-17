package net.edeetee.pictocraft;

import java.util.ArrayList;

import org.apache.commons.io.IOUtils;
import org.apache.http.HttpResponse;
import org.apache.http.NameValuePair;
import org.apache.http.client.HttpClient;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.message.BasicNameValuePair;

public class PictoToText {
    static final String url = "http://picto.ccl.kuleuven.be/RefreshPictoScleraEnglish.php";
    static final String charSet = "UTF-8";

    public static String getText(String imgSentence){
        HttpClient httpclient = HttpClients.createDefault();
        HttpPost httpPost;
        ArrayList<NameValuePair> postParameters;
        httpPost = new HttpPost(url);

        postParameters = new ArrayList<NameValuePair>();
        postParameters.add(new BasicNameValuePair("word", imgSentence));

        try{
            httpPost.setEntity(new UrlEncodedFormEntity(postParameters, charSet));
            HttpResponse response = httpclient.execute(httpPost);
            return IOUtils.toString(response.getEntity().getContent(), charSet);
        } catch(Exception e){
            System.err.println("Request.java ERROR");
            e.printStackTrace();
        }

        return null;
    }

    
}