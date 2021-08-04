package com.bft.com.bookapp.entity;
import javax.persistence.*;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

@Entity
@Table(name= "users",schema = "book_schemas")

public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column (name ="login")
    private String login;
    @Column (name ="password")
    private String password;
    private boolean enabled;

    @Column (name ="first_name")
    private String first_name;

    @Column (name ="last_name")
    private String last_name;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "user_role",schema = "book_schemas",
            joinColumns = {@JoinColumn(name = "user_id")},
    inverseJoinColumns = {@JoinColumn (name= "role_id")}
    )

    private Set<Role> roles = new HashSet<>();

    public Set<Role> getRoles() {
        return roles;
    }

    public void setRoles(Set<Role> roles) {
        this.roles = roles;
    }

    public User(){

    }

    public User(Long id, String login, String password, String first_name, String last_name) {
        this.id = id;
        this.login = login;
        this.password = password;
        this.first_name = first_name;
        this.last_name = last_name;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLogin() {
        return login;
    }
    public void setLogin(String login) {
        this.login = login;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }


    public String getFirst_name() {
        return first_name;
    }

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public String getLast_name() {
        return last_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return Objects.equals(id, user.id) &&
                Objects.equals(login, user.login) &&
                Objects.equals(password, user.password) &&
                Objects.equals(first_name, user.first_name) &&
                Objects.equals(last_name, user.last_name) &&
                Objects.equals(roles, user.roles);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, login, password, first_name, last_name, roles);
    }
    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", login='" + login + '\'' +
                ", password='" + password + '\'' +
                ", first_name='" + first_name + '\'' +
                ", last_name='" + last_name + '\'' +
                ", roles=" + roles +
                '}';
    }

    public boolean isEnabled() {
        return true;
    }
}