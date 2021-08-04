package com.bft.com.bookapp.repository;

import com.bft.com.bookapp.entity.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {
    User findByLogin(String login);

}
