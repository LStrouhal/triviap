package de.laura.project.api.service;

import de.laura.project.api.model.TriviaApiData;
import org.hamcrest.Matchers;
import org.junit.jupiter.api.Test;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

class TriviaApiServiceTest {


    @Test

    public void getDataPointsFromApi() {

        //GIVEN

        String url = "https://opentdb.com/api.php?amount=10&category=17&difficulty=medium&type=multiple";

        RestTemplate restTemplate = mock(RestTemplate.class);
        String[] incorrectAnswers = {"incorrectAnswer", "wrongAnswer"};

        TriviaApiData[] mockedData = {
                new TriviaApiData("13", "multiple-choice", "easy", "this is a question", "correctAnswer", incorrectAnswers),
                new TriviaApiData("12", "multiple-choice", "difficult", "this is a question", "correctAnswer", incorrectAnswers)
        };

        when(restTemplate.getForEntity(url, TriviaApiData[].class))
                .thenReturn(new ResponseEntity<>(mockedData, HttpStatus.OK));

        TriviaApiService triviaApiService = new TriviaApiService(restTemplate);

        //WHEN

        TriviaApiData[] actualData = triviaApiService.getDataPoints();

        //THEN

        assertThat(actualData, Matchers.arrayContaining(
                new TriviaApiData("13", "multiple-choice", "easy", "this is a question", "correctAnswer", incorrectAnswers),
                new TriviaApiData("12", "multiple-choice", "difficult", "this is a question", "correctAnswer", incorrectAnswers)
        ));
    }

}


