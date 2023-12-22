package com.example.restservice.payload.response;

public class ImageResponse {
    private String url;
    private String id;
    private String[] location;

    public ImageResponse(String id, String url, String city, String country) {
        this.id = id;
        this.url = url;
        this.location = new String[]{city, country};
    }
    public void setUrl(String newUrl) {
        this.url = newUrl;
    }

    public String getUrl() {
        return this.url;
    }

    public String[] getLocation() {
        return this.location;
    }

    public void setLocation(String[] location) {
        this.location = location;
    }

}
