package com.example.restservice.controllers;

import com.example.restservice.repository.ImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import com.example.restservice.models.Image;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.imageio.ImageIO;
import java.io.*;
import java.util.Objects;
import java.util.UUID;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/upload")
public class ImageUploadController {
    @Autowired
    ImageRepository imageRepository;
    @PostMapping("")
    public ResponseEntity<?> handleUpload(
            @RequestParam("file") MultipartFile file,
            @RequestParam("city") String city,
            @RequestParam("country") String country
    ) {
        String fileName = file.getOriginalFilename();
        if (fileName == null) {
            return ResponseEntity.badRequest().body("bad file");
        }

        UUID uuid = UUID.randomUUID();
        String[] words = fileName.split("\\.");
        String fileExt = words[words.length-1];


        boolean wrongExt =
                !Objects.equals(fileExt, "jpeg") &&
                !Objects.equals(fileExt, "jpg");

        String newFileName = String.format("%s.%s", uuid, "jpeg");
        if (wrongExt) {
            return ResponseEntity.badRequest().body("wrong extension");
        }

        try {
            ImageIO.read(file.getInputStream());
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("not an image");
        }

        if (file.isEmpty()) {
            return ResponseEntity.badRequest().body("empty file");
        }

        String name;
        try {
            byte[] bytes = file.getBytes();
            name = String.format("uploads/%s", newFileName);
            FileOutputStream outStream = new FileOutputStream(name);
            BufferedOutputStream stream = new BufferedOutputStream(outStream);
            stream.write(bytes);
            stream.close();
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }

        Image newImage = new Image("", uuid.toString(), city, country);
        imageRepository.save(newImage);

        return ResponseEntity.ok("hello");
    }
}
