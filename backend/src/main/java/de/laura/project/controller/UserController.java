package de.laura.project.controller;

import de.laura.project.model.TriviaPointSummary;
import de.laura.project.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/user")

public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("{user}")
    public boolean checkUserExists (@PathVariable String user) {
        return userService.checkUserExists(user);
    }

    @PostMapping
    public TriviaPointSummary addUser(@RequestBody TriviaPointSummary triviaPointSummary) {
        return userService.addUser(triviaPointSummary.getUser(), triviaPointSummary);
    }
}
