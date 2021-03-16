package de.laura.project.service;

import de.laura.project.api.model.TriviaApiData;
import de.laura.project.api.service.TriviaApiService;
import de.laura.project.model.TriviaQuestionSet;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;

@Service

public class TriviaService {

    private final TriviaApiService triviaApiService;

    @Autowired
    public TriviaService(TriviaApiService triviaApiService) {
        this.triviaApiService = triviaApiService;
    }

    public List<TriviaQuestionSet> getListDataPoints() {

        List<TriviaApiData> triviaApiDataList = triviaApiService.getDataPoints().getTriviaApiData();

        return triviaApiDataList.stream()
                        .map(triviaApiData -> TriviaQuestionSet.builder()
                        .category(triviaApiData.getCategory())
                        .type(triviaApiData.getType())
                        .difficulty(triviaApiData.getDifficulty())
                        .question(triviaApiData.getQuestion())
                        .correct_answer(triviaApiData.getCorrect_answer())
                        .build()).collect(Collectors.toList());

    }

}
