package com.filmindustry.candidatescreening.config;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;

@Configuration
public class Config {

    @Bean
    public JavaMailSender javaMailSender() {
        return new JavaMailSenderImpl();
    }
    
    
   /*
    public PasswordEncoder passwordEncoder()
    {
        return new BCryptPasswordEncoder();
    }*/

}
