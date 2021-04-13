package de.laura.project.controller;

import de.laura.project.api.model.TriviaApiData;
import de.laura.project.api.model.TriviaApiDataAggregation;
import de.laura.project.db.PointsMongoDB;
import de.laura.project.db.TempTriviaQuestionDB;
import de.laura.project.model.*;
import org.junit.jupiter.api.BeforeEach;
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
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;
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
    private TempTriviaQuestionDB tempTriviaQuestionDB;

    @Autowired
    private PointsMongoDB pointsMongoDB;

    @BeforeEach
    public void setup() {
        tempTriviaQuestionDB.clear();
        pointsMongoDB.deleteAll();
    }

    @Test
    @DisplayName("Calls question set on the basis of the user's input")

    public void callQuestionSet() {

        //GIVEN
        String ApiUrl = "https://opentdb.com/api.php?amount=10&category=12&difficulty=medium&type=multiple";

        List<String> answersForApiDataList = List.of("answerOne", "answerTwo", "answerThree");

        ArrayList<TriviaApiData> mockedTriviaApiDataList = new ArrayList<>();
        mockedTriviaApiDataList.add(new TriviaApiData("12", "multiple choice", "easy", "This is an awesome question", "correct answer", answersForApiDataList));
        mockedTriviaApiDataList.add(new TriviaApiData("12", "multiple choice", "easy", "This is another awesome question", "another correct answer", answersForApiDataList));

        TriviaApiDataAggregation mockedTriviaDataAggregationList = new TriviaApiDataAggregation(1, mockedTriviaApiDataList);

        when(restTemplate.getForEntity(ApiUrl, TriviaApiDataAggregation.class))
                .thenReturn(new ResponseEntity<>(mockedTriviaDataAggregationList, HttpStatus.OK));

        TriviaApiParametersDTO triviaApiParametersDTO = new TriviaApiParametersDTO(10, 12, "medium");

        //WHEN
        ResponseEntity<Void> response = testRestTemplate.postForEntity(getUrl(), triviaApiParametersDTO, Void.class);

        //THEN
        assertThat(response.getStatusCode(), is(HttpStatus.OK));
    }


    @Test
    @DisplayName("Checks whether user's answer is correct")

    public void checkAnswerIsCorrect() {

        //GIVEN
        List<String> answerForTriviaQuestionSet = List.of("correct answer", "answerOne", "answerTwo", "answerThree");
        List<String> anotherAnswerForTriviaQuestionSet = List.of("another correct answer", "answerOne", "answerTwo", "answerThree");

        tempTriviaQuestionDB.getTriviaQuestionSetList().add(new TriviaQuestionSet(1, "This is an awesome question", "correct answer", answerForTriviaQuestionSet));
        tempTriviaQuestionDB.getTriviaQuestionSetList().add(new TriviaQuestionSet(2, "This is another awesome question", "another correct answer", anotherAnswerForTriviaQuestionSet));

        TriviaSelectedAnswerDTO triviaSelectedAnswerDTO = new TriviaSelectedAnswerDTO(1, "correct answer");

        //WHEN
        ResponseEntity<Boolean> response = testRestTemplate.postForEntity(getUrl() + "/answer", triviaSelectedAnswerDTO, Boolean.class);

        //THEN
        assertThat(response.getStatusCode(), is(HttpStatus.OK));
        assertTrue(response.getBody());
    }

    @Test
    @DisplayName("Checks whether user's incorrect answer returns false")

    public void checkAnswerIsFalse() {

        //GIVEN
        List<String> answerForTriviaQuestionSet = List.of("correct answer", "answerOne", "answerTwo", "answerThree");
        List<String> anotherAnswerForTriviaQuestionSet = List.of("another correct answer", "answerOne", "answerTwo", "answerThree");

        tempTriviaQuestionDB.getTriviaQuestionSetList().add(new TriviaQuestionSet(1, "This is an awesome question", "correct answer", answerForTriviaQuestionSet));
        tempTriviaQuestionDB.getTriviaQuestionSetList().add(new TriviaQuestionSet(2, "This is another awesome question", "another correct answer", anotherAnswerForTriviaQuestionSet));

        TriviaSelectedAnswerDTO triviaSelectedAnswerDTO = new TriviaSelectedAnswerDTO(1, "answerOne");

        //WHEN
        ResponseEntity<Boolean> response = testRestTemplate.postForEntity(getUrl() + "/answer", triviaSelectedAnswerDTO, Boolean.class);

        //THEN
        assertThat(response.getStatusCode(), is(HttpStatus.OK));
        assertFalse(response.getBody());
    }


    @Test
    @DisplayName("Calls question based on questionsID")

    public void getSingleQuestion() {

        //GIVEN
        List<String> answerForTriviaQuestionSet = List.of("correct answer", "answerOne", "answerTwo", "answerThree");
        List<String> anotherAnswerForTriviaQuestionSet = List.of("another correct answer", "answerOne", "answerTwo", "answerThree");

        tempTriviaQuestionDB.getTriviaQuestionSetList().add(new TriviaQuestionSet(1, "This is an awesome question", "correct answer", answerForTriviaQuestionSet));
        tempTriviaQuestionDB.getTriviaQuestionSetList().add(new TriviaQuestionSet(2, "This is another awesome question", "another correct answer", anotherAnswerForTriviaQuestionSet));

        //WHEN
        ResponseEntity<TriviaQuestionSetWithoutCorrectAnswer> response = testRestTemplate.getForEntity(getUrl() + "/2", TriviaQuestionSetWithoutCorrectAnswer.class);

        //THEN
        assertThat(response.getStatusCode(), is(HttpStatus.OK));
        assertThat(response.getBody(), is(new TriviaQuestionSetWithoutCorrectAnswer(2, "This is another awesome question", anotherAnswerForTriviaQuestionSet)));
    }


    @Test
    @DisplayName("Gets total points by user")

    public void getTotalPointsByUser() {

        //GIVEN
        List<TriviaPointDetails> triviaPointDetailsListNine = new ArrayList<>();
        triviaPointDetailsListNine.add(new TriviaPointDetails("easy", 10, 20));
        triviaPointDetailsListNine.add(new TriviaPointDetails("medium", 20, 40));
        triviaPointDetailsListNine.add(new TriviaPointDetails("hard", 40, 40));
        List<TriviaPointDetails> triviaPointDetailsListTen = new ArrayList<>();
        triviaPointDetailsListTen.add(new TriviaPointDetails("hard", 10, 10));

        List<TriviaPointCategory> triviaPointCategoryList = new ArrayList<>();
        triviaPointCategoryList.add(new TriviaPointCategory(9, triviaPointDetailsListNine));
        triviaPointCategoryList.add(new TriviaPointCategory(10, triviaPointDetailsListTen));

        String user = "Laura";
        TriviaPointSummary triviaPointSummary = new TriviaPointSummary(user, triviaPointCategoryList);
        pointsMongoDB.save(triviaPointSummary);

        //WHEN
        ResponseEntity<Integer> response = testRestTemplate.getForEntity(getUrl() + "/totalScore/" + user, Integer.class);

        //THEN
        assertThat(response.getStatusCode(), is(HttpStatus.OK));
        assertThat(response.getBody(), is(110));
    }
}