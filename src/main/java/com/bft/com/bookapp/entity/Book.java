package com.bft.com.bookapp.entity;

import javax.persistence.*;
import java.util.List;
import java.util.Objects;

@Entity
@Table(name = "booklist",schema = "book_schemas")

public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "title")
    private String title;

    @Column(name = "year")
    private int year;

    @Column(name = "link")
    private String link;

    @Column(name = "review")
    private String review;

    @ManyToMany(mappedBy = "books")
    private List<Genres> genres;

    protected Book(){

    }

    public Book(Long id, String title, int year, String link, String review) {
        this.id = id;
        this.title = title;
        this.year = year;
        this.link = link;
        this.review = review;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }

    public String getReview() {
        return review;
    }

    public void setReview(String review) {
        this.review = review;
    }

    public List<Genres> getGenres() {
        return genres;
    }

    public void setGenres(List<Genres> genres) {
        this.genres = genres;
    }

    @Override
    public String toString() {
        return "Book{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", year=" + year +
                ", link='" + link + '\'' +
                ", review='" + review + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Book book = (Book) o;
        return year == book.year &&
                Objects.equals(id, book.id) &&
                Objects.equals(title, book.title) &&
                Objects.equals(link, book.link) &&
                Objects.equals(review, book.review);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, title, year, link, review);
    }
}
