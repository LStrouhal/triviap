package de.laura.project.controller;

import de.laura.project.model.TriviaSelectedAnswerDTO;
import de.laura.project.model.TriviaApiParametersDTO;
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
    public void callQuestionList(@RequestBody TriviaApiParametersDTO triviaApiParametersDTO){
        triviaService.callQuestionList(triviaApiParametersDTO.getAmount(), triviaApiParametersDTO.getCategory(), triviaApiParametersDTO.getDifficulty());
    }

    @GetMapping("{questionId}")
    public TriviaQuestionSetWithoutCorrectAnswer getSingleQuestion(@PathVariable int questionId) {
        return triviaService.getSingleQuestion(questionId);
    }

    @PostMapping("answer")
    public boolean checkAnswer (@RequestBody TriviaSelectedAnswerDTO triviaSelectedAnswerDTO){
        return triviaService.checkAnswer(triviaSelectedAnswerDTO.getQuestionId(), triviaSelectedAnswerDTO.getSelectedAnswer());
    }
}
