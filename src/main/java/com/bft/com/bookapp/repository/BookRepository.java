package com.bft.com.bookapp.repository;

import com.bft.com.bookapp.entity.Book;
import org.springframework.data.repository.CrudRepository;

public interface BookRepository extends CrudRepository<Book,Long> {
    Book findByTitleContaining(String title);
}
