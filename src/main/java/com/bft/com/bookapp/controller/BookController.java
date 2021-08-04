package com.bft.com.bookapp.controller;

import com.bft.com.bookapp.entity.Book;
import com.bft.com.bookapp.service.BookService;
import org.apache.velocity.exception.ResourceNotFoundException;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin ("localhost:3000")
@RestController
@RequestMapping("api")
public class BookController {

    private final BookService bookService;

    private BookController(BookService bookService) {
        this.bookService = bookService;
    }

    @GetMapping(value = "/books", produces = MediaType.APPLICATION_JSON_VALUE)
    public Iterable<Book> findAll() {
        Iterable<Book> books = bookService.findAll();
        return books;
    }

    @GetMapping(value = "/books/{bookId}",produces = MediaType.APPLICATION_JSON_VALUE)
    public Optional<Book> findBookById (@PathVariable(value = "bookId") Long bookId){
        return bookService.findBookById(bookId);
    }


    @PostMapping(value="/books",produces = MediaType.APPLICATION_JSON_VALUE)
    public Book saveBook(@RequestBody Book book){
        return this.bookService.save(book);
    }

    @PutMapping(value = "/books/{bookId}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity <Book> updateBook(@PathVariable (value ="bookId") Long bookId, @RequestBody Book book) {
        Book currentBook = bookService.findBookById(bookId).orElseThrow(() -> new ResourceNotFoundException("Book not found on :: "+ bookId));
        currentBook.setTitle(book.getTitle());
        currentBook.setYear(book.getYear());
        currentBook.setLink(book.getLink());
        currentBook.setReview(book.getReview());
        final Book updatedBook = bookService.save(book);
        return ResponseEntity.ok(updatedBook);
    }

    @DeleteMapping(value = "/books/{bookId}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Book> deleteBook(@PathVariable Long bookId) {
        bookService.deleteBookById(bookId);
        return ResponseEntity.ok().build();
    }

}
