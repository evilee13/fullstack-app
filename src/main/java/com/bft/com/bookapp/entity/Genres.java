package com.bft.com.bookapp.entity;
import javax.persistence.*;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;


@Entity
@Table(name= "genre",schema = "book_schemas")
public class Genres {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "genre_title")
    private String genreTitle;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "book_genre",schema = "book_schemas",
            joinColumns = {@JoinColumn(name = "book_id")},
            inverseJoinColumns = {@JoinColumn (name= "genre_id")}
    )

    private Set<Book> books = new HashSet<>();

    public Set<Book> getBooks() {
        return books;
    }

    public void setBooks(Set<Book> books) {
        this.books = books;
    }

    public Genres (){

    }


    public Genres(Long id, String genreTitle) {
        this.id = id;
        this.genreTitle = genreTitle;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getGenreTitle() {
        return genreTitle;
    }

    public void setGenreTitle(String genreTitle) {
        this.genreTitle = genreTitle;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Genres genres = (Genres) o;
        return Objects.equals(id, genres.id) &&
                Objects.equals(genreTitle, genres.genreTitle);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, genreTitle);
    }

    @Override
    public String toString() {
        return "Genres{" +
                "id=" + id +
                ", genreTitle='" + genreTitle + '\'' +
                '}';
    }
}
