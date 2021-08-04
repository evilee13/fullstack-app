package com.bft.com.bookapp.service;

import com.bft.com.bookapp.entity.Genres;
import com.bft.com.bookapp.repository.GenresRepository;
import org.springframework.stereotype.Service;


@Service
public class GenresService {
    private final GenresRepository genresRepository;

    public GenresService(GenresRepository genresRepository){

        this.genresRepository = genresRepository;
    }


    public Iterable<Genres> findAll() {
        return genresRepository.findAll();
    }


}
