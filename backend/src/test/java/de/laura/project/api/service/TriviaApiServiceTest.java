package de.laura.project.api.service;

import de.laura.project.api.model.TriviaApiData;
import de.laura.project.api.model.TriviaApiDataAggregation;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import java.util.List;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.containsInAnyOrder;
import static org.hamcrest.Matchers.is;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

class TriviaApiServiceTest {

    private final String url = "https://opentdb.com/api.php?amount=10&category=17&difficulty=medium&type=multiple";
    private final RestTemplate restTemplate = mock(RestTemplate.class);
    private final TriviaApiService triviaApiService = new TriviaApiService(restTemplate);

    private final int amount = 10;
    private final int category = 17;
    private final String difficulty = "medium";


    @Test
    @DisplayName("Gets comprehensive data set from Trivia Api")

    public void getDataPointsFromApi() {

        //GIVEN
        List<String> incorrectAnswers = List.of("incorrectAnswer", "wrongAnswer");

        TriviaApiData triviaApiData = new TriviaApiData("13", "multiple-choice", "easy", "this is a question", "correctAnswer", incorrectAnswers);

        TriviaApiDataAggregation mockedData = new TriviaApiDataAggregation(1,List.of(triviaApiData));

        when(restTemplate.getForEntity(url, TriviaApiDataAggregation.class))
                .thenReturn(new ResponseEntity<>(mockedData, HttpStatus.OK));

        //WHEN
        List<TriviaApiData> actualData = triviaApiService.callQuestionList(amount, category, difficulty);

        //THEN
        assertThat(actualData, containsInAnyOrder (new TriviaApiData("13", "multiple-choice", "easy", "this is a question", "correctAnswer", incorrectAnswers))
        );
    }


    @Test
    @DisplayName("Builds a URL from the input provided by the user in the frontend")

    public void buildUrlFromInput () {

        //WHEN
        String newUrl = triviaApiService.buildTriviaApiUrl(amount, category, difficulty);

        //THEN
        assertThat(newUrl, is(url));
    }
}


