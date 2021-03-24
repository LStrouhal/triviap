package de.laura.project.controller;

import de.laura.project.model.TriviaAnswerDTO;
import de.laura.project.model.TriviaQuestionSetDTO;
import de.laura.project.model.TriviaQuestionSetWithoutCorrectAnswer;
import de.laura.project.service.TriviaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("questions")

public class TriviaController {

    private final TriviaService triviaService;

    @Autowired
    public TriviaController(TriviaService triviaService) {
        this.triviaService = triviaService;
    }

    @PostMapping
    public void callQuestionList(@RequestBody TriviaQuestionSetDTO triviaQuestionSetDTO){
        triviaService.callQuestionList(triviaQuestionSetDTO.getAmount(), triviaQuestionSetDTO.getCategory(), triviaQuestionSetDTO.getDifficulty());
    }

    @GetMapping("{questionId}")
    public TriviaQuestionSetWithoutCorrectAnswer getSingleQuestion(@PathVariable int questionId) {
        return triviaService.getSingleQuestion(questionId);
    }

    @PostMapping("answer")
    public boolean checkAnswer (@RequestBody TriviaAnswerDTO triviaAnswerDTO){
        return triviaService.checkAnswer(triviaAnswerDTO.getQuestionId(), triviaAnswerDTO.getSelectedAnswer());
    }
}
