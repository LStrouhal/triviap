package de.laura.project.api.service;

import de.laura.project.api.model.TriviaApiDataAggregation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.web.client.RestTemplate;

@Repository

public class TriviaApiService {

    private final RestTemplate restTemplate;
    private final String baseUrl = "https://opentdb.com/api.php?amount=10&category=17&difficulty=medium&type=multiple";


    @Autowired
    public TriviaApiService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public TriviaApiDataAggregation getDataPoints() {
        ResponseEntity<TriviaApiDataAggregation> response = restTemplate.getForEntity(baseUrl, TriviaApiDataAggregation.class);
        return response.getBody();
    }
g
}


