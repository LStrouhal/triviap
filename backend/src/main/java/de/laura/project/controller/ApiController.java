package de.laura.project.controller;

import de.laura.project.api.model.TriviaApiData;
import de.laura.project.model.TriviaDataPoint;
import de.laura.project.service.TriviaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("questions")

public class ApiController {

    private final TriviaService triviaService;

    @Autowired
    public ApiController(TriviaService triviaService) {
        this.triviaService = triviaService;
    }

    @GetMapping
    public List<TriviaDataPoint> getListDataPoints(){
        return triviaService.getListDataPoints();
    }

}
