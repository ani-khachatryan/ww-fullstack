package com.example.restservice.controllers;

import org.apache.commons.io.IOUtils;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/image")
public class ImageController {
    @GetMapping(
        value = "/{uuid}",
        produces = MediaType.IMAGE_JPEG_VALUE
    )
    public @ResponseBody byte[] getImage(@PathVariable String uuid) throws IOException {
        InputStream in = new FileInputStream(String.format("uploads/%s.jpeg", uuid));
        return IOUtils.toByteArray(in);
    }
}