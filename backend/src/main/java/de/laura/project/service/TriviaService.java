package de.laura.project.service;

import de.laura.project.api.model.TriviaApiData;
import de.laura.project.api.service.TriviaApiService;
import de.laura.project.model.TriviaDataPoint;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Service

public class TriviaService {

    private final TriviaApiService triviaApiService;

    @Autowired
    public TriviaService(TriviaApiService triviaApiService) {
        this.triviaApiService = triviaApiService;
    }

    public List<TriviaDataPoint> getListDataPoints() {

        TriviaApiData triviaApiDataArray[] = triviaApiService.getDataPoints();


        return Arrays.stream(triviaApiDataArray)
                .map(triviaApiData -> TriviaDataPoint.builder()
                        .category(triviaApiData.getCategory())
                        .type(triviaApiData.getType())
                        .difficulty(triviaApiData.getDifficulty())
                        .question(triviaApiData.getQuestion())
                        .correct_answer(triviaApiData.getCorrect_answer())
                        .build()).collect(Collectors.toList());

    }

}
