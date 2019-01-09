package com.example.websocket.chat;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

import java.util.Map;

@Controller
@MessageMapping("/app")
public class GreetingController {
		
	private static final Logger LOG = LoggerFactory.getLogger(GreetingController.class);
	
	@MessageMapping("/sendMessage")
	@SendTo("/topic/chat")
	public String sendToMsg(Map<String, String> message) throws Exception {

		LOG.debug("{}", message);
		System.out.println(message.get("message"));

		return message.get("message");
	}

}
