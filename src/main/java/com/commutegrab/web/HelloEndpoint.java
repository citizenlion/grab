package com.commutegrab.web;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

@RestController
@RequestMapping("/hello")
public class HelloEndpoint {

	@RequestMapping(method = GET)
	public ResponseEntity<String> greet(@RequestParam final String message) {
		return new ResponseEntity<>("Hello. " + message, HttpStatus.OK);
	}

}
