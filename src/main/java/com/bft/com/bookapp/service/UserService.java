package com.bft.com.bookapp.service;

import com.bft.com.bookapp.entity.MyUserDetails;
import com.bft.com.bookapp.entity.Role;
import com.bft.com.bookapp.entity.User;
import com.bft.com.bookapp.repository.RoleRepository;
import com.bft.com.bookapp.repository.UserRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserService implements UserDetailsService {

    private UserRepository userRepository;
    private RoleRepository roleRepository;

    public UserService(UserRepository userRepository, RoleRepository roleRepository) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
    }

    public UserService() {
    }

    @Override

    public UserDetails loadUserByUsername(String login) throws UsernameNotFoundException {
        User user = userRepository.findByLogin(login);
        if (user == null) {
            throw new UsernameNotFoundException("User not found");
        }
        return new MyUserDetails(user);
    }

}