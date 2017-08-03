package yrr.project.gifmonitor.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestParam;
import yrr.project.gifmonitor.exception.NotValidException;
import yrr.project.gifmonitor.pojo.GifCode;
import yrr.project.gifmonitor.pojo.GifUrl;

import java.util.Optional;

@Controller
public class Sender {
    private Logger log = LoggerFactory.getLogger(Sender.class);

    @MessageMapping("/sendgif")
    @SendTo("/topic/receiverGif")
    public GifCode sendToScreen(GifUrl url) throws Exception {
        Optional<String> gifCode = url.extractGifCode();
        if (gifCode.isPresent()) {
            log.info("Code to send : {}",gifCode.get());
            return new GifCode(gifCode.get());
        }else{
            throw new NotValidException("The Url must mach " + GifUrl.patternGifLink+" or "+GifUrl.patternVideo);
        }
    }
}
