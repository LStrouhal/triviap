package de.laura.project.controller;

import de.laura.project.model.TriviaQuestionSet;
import de.laura.project.model.TriviaQuestionSetWithoutAnswer;
import de.laura.project.service.TriviaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("questions")

public class TriviaController {

    private final TriviaService triviaService;

    @Autowired
    public TriviaController(TriviaService triviaService) {
        this.triviaService = triviaService;
    }

    @GetMapping
    public List<TriviaQuestionSet> callQuestionList(@RequestParam int amount, @RequestParam int category, @RequestParam String difficulty){
        return triviaService.callQuestionList(amount, category, difficulty);
    }

    @GetMapping("{id}")
    public TriviaQuestionSetWithoutAnswer getSingleQuestion(@PathVariable int id) {
        return triviaService.getSingleQuestion(id);
    }

    @PostMapping
    public

}
