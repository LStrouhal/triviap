package de.laura.project.api.service;

import de.laura.project.api.model.TriviaApiData;
import de.laura.project.api.model.TriviaApiDataAggregation;
import org.junit.jupiter.api.Test;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import java.util.List;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

class TriviaApiServiceTest {


    @Test

    public void getDataPointsFromApi() {

        //GIVEN

        String url = "https://opentdb.com/api.php?amount=10&category=17&difficulty=medium&type=multiple";

        RestTemplate restTemplate = mock(RestTemplate.class);

        List<String> incorrectAnswers = List.of("incorrectAnswer", "wrongAnswer", "terribleAnswer");

        TriviaApiData triviaApiData = new TriviaApiData("13", "multiple-choice", "easy", "this is a question", "correctAnswer", incorrectAnswers);

        TriviaApiDataAggregation mockedData = new TriviaApiDataAggregation(1,List.of(triviaApiData));

        when(restTemplate.getForEntity(url, TriviaApiDataAggregation.class))
                .thenReturn(new ResponseEntity<>(mockedData, HttpStatus.OK));

        TriviaApiService triviaApiService = new TriviaApiService(restTemplate);

        //WHEN

        TriviaApiDataAggregation actualData = triviaApiService.getDataPoints();

        //THEN

        assertThat(actualData, is (new TriviaApiDataAggregation(1, List.of(new TriviaApiData("13", "multiple-choice", "easy", "this is a question", "correctAnswer", incorrectAnswers))
        )));
    }

}


