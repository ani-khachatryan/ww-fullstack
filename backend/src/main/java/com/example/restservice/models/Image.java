package com.example.restservice.models;


import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name="images")
public class Image {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String url;
    private String uuid;

    @NotBlank
    private String locationCity;

    @NotBlank
    private String locationCountry;

    public String getUrl() {
        return this.url;
    }

    public String getUuid() {
        return this.uuid;
    }

    public String getLocationCity() {
        return this.locationCity;
    }

    public String getLocationCountry() {
        return this.locationCountry;
    }
    public Long getId() {
        return this.id;
    }

    public Image() {

    }

    public Image(String url, String uuid, String location_city, String location_country) {
        this.uuid = uuid;
        this.url = url;
        this.locationCity = location_city;
        this.locationCountry = location_country;
    }
}
