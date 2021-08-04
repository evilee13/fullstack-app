package com.bft.com.bookapp.service;


import com.bft.com.bookapp.entity.Book;
import com.bft.com.bookapp.repository.BookRepository;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;


@Service
@Transactional
public class BookService {
    private final BookRepository bookRepository;

    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public Iterable<Book> findAll() {
    return bookRepository.findAll();
    }

    public Book save(Book book) {
        return bookRepository.save(book);
    }

    public Optional<Book> findBookById(Long id) {
        return bookRepository.findById(id);
    }

    public void deleteBookById(Long id) {
        bookRepository.deleteById(id);
    }
    public Book findByTitleContaining (String title){
        return bookRepository.findByTitleContaining(title);
    }
}
