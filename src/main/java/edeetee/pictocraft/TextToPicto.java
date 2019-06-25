package edeetee.pictocraft;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.apache.commons.lang3.StringUtils;
import org.apache.http.HttpResponse;
import org.apache.http.NameValuePair;
import org.apache.http.client.HttpClient;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.message.BasicNameValuePair;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.nodes.Node;

public class TextToPicto {
    static final String url = "http://picto.ccl.kuleuven.be/picto.php";
    static final String charSet = "UTF-8";

    public static List<String> getPictoUrls(String sentence){
        return getPictoUrls(Arrays.asList(sentence.split(" ")));
    }

    public static List<String> getPictoUrls(List<String> words){
        HttpClient httpclient = HttpClients.createDefault();
        HttpPost httpPost;
        ArrayList<NameValuePair> postParameters;
        httpPost = new HttpPost(url);

        postParameters = new ArrayList<NameValuePair>();
        postParameters.add(new BasicNameValuePair("input", String.join(" ", words)));
        postParameters.add(new BasicNameValuePair("language", "english"));
        postParameters.add(new BasicNameValuePair("picto", "sclera"));

        List<String> list = new ArrayList<>();

        try{
            httpPost.setEntity(new UrlEncodedFormEntity(postParameters, charSet));
            HttpResponse response = httpclient.execute(httpPost);

            Document doc = Jsoup.parse(response.getEntity().getContent(), charSet, url);


            Element br = doc.select("#content br ~ br").first();

            Node sib = br.nextSibling();
            while(sib != null){
                // System.out.println(sib);
                if(sib.nodeName().equals("#text") && StringUtils.isNotBlank(sib.toString())){
                    String[] subWords = sib.toString().split(" ");
                    for (String word : subWords) {
                        if(StringUtils.isNotBlank(word))
                            list.add(word);
                    }
                } else if(sib.nodeName().equals("img")){
                    list.add(sib.attr("src"));
                }
                sib = sib.nextSibling();
            }
        } catch(Exception e){
            System.err.println("Request.java ERROR");
            e.printStackTrace();
        }

        return list;
    }

    
}