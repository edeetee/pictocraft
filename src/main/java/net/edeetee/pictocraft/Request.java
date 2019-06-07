package net.edeetee.pictocraft;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.apache.commons.io.IOUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.http.HttpResponse;
import org.apache.http.NameValuePair;
import org.apache.http.client.HttpClient;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.message.BasicNameValuePair;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.nodes.Node;

public class Request {
    static final String url = "http://picto.ccl.kuleuven.be/picto.php";
    static final String charSet = "UTF-8";

    public static List<String> getPictos(String message){
        HttpClient httpclient = HttpClients.createDefault();
        HttpPost httpPost;
        ArrayList<NameValuePair> postParameters;
        httpPost = new HttpPost(url);

        postParameters = new ArrayList<NameValuePair>();
        postParameters.add(new BasicNameValuePair("input", replaceWords(message)));
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
                if(sib.nodeName() == "#text" && StringUtils.isNotBlank(sib.toString())){
                    String[] words = sib.toString().split(" ");
                    for (String word : words) {
                        if(StringUtils.isNotBlank(word))
                            list.add(word);
                    }
                } else if(sib.nodeName() == "img"){
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

    static final String matchSomeCharsRegex = ".*[A-Za-z]+.*";
    static final String validSpaceRegex = "[^A-Za-z ]+";

    static String replaceWords(String sentence){
        List<String> words = new ArrayList<>(Arrays.asList(sentence.split(" ")));
                
        for (int numWords = Math.max(words.size(), 3); 0 < numWords; numWords--) {
            for (int i = 0; i <= words.size()-numWords; i++) {
                String combined = String.join(" ", words.subList(i, i+numWords)).replaceAll(validSpaceRegex, "");
                // System.out.println("TRY: " + combined);
                String returned = ItemSearch.tryFind(combined);
                if(returned != null){
                    // System.out.println("FOUND: " + returned);
                    words.set(i, returned);
                    if(i+1 < words.size() && i+numWords <= words.size()){
                        words.subList(i+1, i+numWords).clear();
                    }
                    // words.
                    // for (int word = 1; word < numWords; word++) {
                    //     words[i+word] = null;
                    // }
                }
            }
        }

        // noNulls.removeIf(word -> word == null);

        return String.join(" ", words);
    }
}