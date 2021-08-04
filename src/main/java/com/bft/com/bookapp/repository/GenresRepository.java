package com.bft.com.bookapp.repository;

import com.bft.com.bookapp.entity.Genres;
import org.springframework.data.repository.CrudRepository;

public interface GenresRepository extends CrudRepository <Genres,Long> {
    Genres findByGenreTitle(String title);
}
