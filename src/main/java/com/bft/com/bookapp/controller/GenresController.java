package com.bft.com.bookapp.controller;
import com.bft.com.bookapp.entity.Genres;
import com.bft.com.bookapp.service.GenresService;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api")

public class GenresController {

    private final GenresService genresService;

    public GenresController(GenresService genresService) {
        this.genresService = genresService;
    }


    @GetMapping(value = "/genres", produces = MediaType.APPLICATION_JSON_VALUE)
    public Iterable<Genres> findAll() {
        Iterable<Genres> genre = genresService.findAll();
        return genre;
    }
}
