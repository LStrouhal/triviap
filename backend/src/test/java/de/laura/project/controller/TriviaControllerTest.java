package de.laura.project.controller;

import de.laura.project.api.model.TriviaApiData;
import de.laura.project.api.model.TriviaApiDataAggregation;
import de.laura.project.model.TriviaQuestionSet;
import de.laura.project.service.TriviaService;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import java.util.*;

import static org.hamcrest.Matchers.*;
import static org.mockito.Mockito.when;
import static org.hamcrest.MatcherAssert.assertThat;


@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class TriviaControllerTest {

    @LocalServerPort
    private int port;

    private String getUrl() {
        return "http://localhost:" + port + "/questions";
    }

    @MockBean
    private RestTemplate restTemplate;

    @Autowired
    private TestRestTemplate testRestTemplate;

    @Autowired
    private TriviaService triviaService;

    @Test
    @DisplayName("Get to /questions returns list of questions from Trivia API")

    public void returnQuestionSet() {

        //GIVEN
        String url = "https://opentdb.com/api.php?amount=10&category=12&difficulty=medium&type=multiple";

        ArrayList<String> answerForTriviaQuestionSet = new ArrayList<>();
        answerForTriviaQuestionSet.add("correct answer");
        answerForTriviaQuestionSet.add("answerOne");
        answerForTriviaQuestionSet.add("answerTwo");
        answerForTriviaQuestionSet.add("answerThree");

        ArrayList<String> anotherAnswerForTriviaQuestionSet = new ArrayList<>();
        answerForTriviaQuestionSet.add("another correct answer");
        answerForTriviaQuestionSet.add("answerOne");
        answerForTriviaQuestionSet.add("answerTwo");
        answerForTriviaQuestionSet.add("answerThree");

        List<String> answersForApiDataList = List.of("answerOne", "answerTwo", "answerThree");

        List<TriviaApiData> mockedTriviaApiDataList = List.of(
                new TriviaApiData("12", "multiple choice", "easy", "This is an awesome question", "correct answer", answersForApiDataList),
                new TriviaApiData("12", "multiple choice", "easy", "This is another awesome question", "another correct answer", answersForApiDataList));

        TriviaApiDataAggregation mockedTriviaDataAggregationList = new TriviaApiDataAggregation(1, mockedTriviaApiDataList);

        when(restTemplate.getForEntity(url, TriviaApiDataAggregation.class))
                .thenReturn(new ResponseEntity<>(mockedTriviaDataAggregationList, HttpStatus.OK));

        //WHEN
        ResponseEntity<TriviaQuestionSet[]> response = testRestTemplate.getForEntity(getUrl(), TriviaQuestionSet[].class);

        //THEN
        assertThat(response.getBody(), arrayContainingInAnyOrder(
                new TriviaQuestionSet(1, "This is an awesome question", "correct answer", answerForTriviaQuestionSet),
                new TriviaQuestionSet(2, "This is another awesome question", "another correct answer", anotherAnswerForTriviaQuestionSet)));
    }
}