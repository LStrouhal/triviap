package de.laura.project.service;

import de.laura.project.db.PointsMongoDB;
import de.laura.project.model.TriviaPointCategory;
import de.laura.project.model.TriviaPointSummary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class UserService {

    private final PointsMongoDB pointsMongoDB;

    @Autowired
    public UserService(PointsMongoDB pointsMongoDB) {
        this.pointsMongoDB = pointsMongoDB;
    }

    public boolean checkUserExists (String user) {
        if (pointsMongoDB.findById(user).isEmpty()) {
            return false;
        }
        return true;
    }

    public TriviaPointSummary addUser(String user, TriviaPointSummary triviaPointSummary) {

        if (pointsMongoDB.existsById(user)){
            throw new ResponseStatusException (HttpStatus.BAD_REQUEST, "User " + user + " is already in the database");
        }

        List<TriviaPointCategory> triviaPointCategoryList = triviaPointSummary.getTriviaPointCategory();
        TriviaPointSummary newUser = TriviaPointSummary.builder().user(user).triviaPointCategory(triviaPointCategoryList).build();

        return pointsMongoDB.save(newUser);
    }
}
