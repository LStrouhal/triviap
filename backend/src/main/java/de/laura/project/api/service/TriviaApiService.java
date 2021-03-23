package de.laura.project.api.service;

import de.laura.project.api.model.TriviaApiData;
import de.laura.project.api.model.TriviaApiDataAggregation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@Repository

public class TriviaApiService {

    private final RestTemplate restTemplate;


    @Autowired
    public TriviaApiService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public String buildTriviaApiUrl(int amount, int category, String difficulty) {
        return ("https://opentdb.com/api.php?amount=" + amount + "&category=" + category +"&difficulty=" + difficulty + "&type=multiple");
    }

    public List<TriviaApiData> callQuestionList(int amount, int category, String difficulty) {
        ResponseEntity<TriviaApiDataAggregation> response = restTemplate.getForEntity(buildTriviaApiUrl(amount, category, difficulty), TriviaApiDataAggregation.class);
        return response.getBody().getTriviaApiData();
    }

}



