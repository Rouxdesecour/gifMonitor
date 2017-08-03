package yrr.project.gifmonitor.pojo;

import lombok.Data;

import java.util.Optional;

@Data
public class GifUrl {
    private final String url;
    public static final String patternVideo = "https:\\/\\/giphy\\.com\\/gifs\\/[\\w]+\\/html5";
    public static final String patternGifLink = "https:\\/\\/media.giphy\\.com\\/media\\/[\\w]+\\/giphy.gif";
    public boolean isValid() {
        return url != null && matchGiphyUrlPattern();
    }

    private boolean matchGiphyUrlPattern() {
        return url.matches(patternVideo)||url.matches(patternGifLink);
    }

    public Optional<String> extractGifCode(){
        if(isValid()){
            String gifCode = url.split("\\/")[4];
            return Optional.of(gifCode);
        }
        return Optional.empty();
    }
}
