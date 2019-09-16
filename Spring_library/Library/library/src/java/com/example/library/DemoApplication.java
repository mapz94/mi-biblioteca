package com.example.library;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
/*TODO: REST API */
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);

	System.out.println("Por la Chucha");
	Greeting greet = new Greeting(4, "hola");
	System.out.println(greet.getContent()); 
	}

}
