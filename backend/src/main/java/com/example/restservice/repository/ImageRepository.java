package com.example.restservice.repository;

import com.example.restservice.models.Image;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ImageRepository extends JpaRepository<Image, Long> {
    Optional<Image> findImagesById(Long id);
  @Query(value =
          "select * from images order by random() limit 1",
          nativeQuery = true)
  Image findRandomImage();

    @Query(value =
          "select * from images where id != ?1 order by random() limit 1",
          nativeQuery = true)
  Image findRandomNotId(Long notId);

}


