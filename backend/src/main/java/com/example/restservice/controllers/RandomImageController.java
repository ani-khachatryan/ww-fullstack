package com.example.restservice.controllers;

import com.example.restservice.models.Image;
import com.example.restservice.payload.response.ImageResponse;
import com.example.restservice.repository.ImageRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.apache.logging.log4j.Logger;
import org.apache.logging.log4j.LogManager;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/random")
public class RandomImageController {
	@Autowired
    ImageRepository imageRepository;
    Logger logger = LogManager.getLogger(RandomImageController.class);

    @GetMapping("")
    public ResponseEntity<?> allAccess() {
        Image img = imageRepository.findRandomImage();

        return ResponseEntity.ok(
                new ImageResponse(
                        img.getUrl(),
                        img.getUuid(),
                        img.getLocationCity(),
                        img.getLocationCountry()
                )
        );
    }

    @GetMapping("/not/{id}")
    public ResponseEntity<?> imageNotId(@PathVariable String id) {
        Image img = imageRepository.findRandomNotId(Long.valueOf(id));

        return ResponseEntity.ok(
                new ImageResponse(
                        img.getUrl(),
                        img.getUuid(),
                        img.getLocationCity(),
                        img.getLocationCountry()
                )
        );
    }
}
