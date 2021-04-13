package de.laura.project.service;

import de.laura.project.api.model.TriviaApiData;
import de.laura.project.api.service.TriviaApiService;
import de.laura.project.db.PointsMongoDB;
import de.laura.project.db.TempTriviaQuestionDB;
import de.laura.project.model.TriviaPointCategory;
import de.laura.project.model.TriviaPointDetails;
import de.laura.project.model.TriviaPointSummary;
import de.laura.project.model.TriviaQuestionSet;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.hamcrest.Matchers.containsInAnyOrder;
import static org.mockito.Mockito.*;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;

class TriviaServiceTest {

    private final AnswerRandomizerService answerRandomizerService = mock(AnswerRandomizerService.class);
    private final TriviaApiService triviaApiService = mock(TriviaApiService.class);
    private final PointsMongoDB pointsMongoDB = mock(PointsMongoDB.class);
    private TempTriviaQuestionDB tempTriviaQuestionDB = new TempTriviaQuestionDB();

    private final int amount = 2;
    private final int category = 17;
    private final String difficulty = "medium";


    @Test
    @DisplayName("Assigns an ID to each question set")

    public void addIdToQuestionSet() {

        //GIVEN
        List<String> answers = List.of("answerOne", "answerTwo", "answerThree", "answerFour");

        List<TriviaQuestionSet> triviaQuestionSet = List.of(
                new TriviaQuestionSet(0, "This is an awesome question", "CorrectAnswer", answers),
                new TriviaQuestionSet(0, "This is another awesome question", "Looks correct", answers));

        TriviaService triviaService = new TriviaService(triviaApiService, tempTriviaQuestionDB, answerRandomizerService, pointsMongoDB);

        // WHEN
        triviaService.addIDtoQuestionSet(triviaQuestionSet);

        //THEN
        assertThat(triviaQuestionSet, containsInAnyOrder(
                new TriviaQuestionSet(1, "This is an awesome question", "CorrectAnswer", answers),
                new TriviaQuestionSet(2, "This is another awesome question", "Looks correct", answers)));
    }


    @Test
    @DisplayName("Calls API via ApiService using the parameters submitted by the user")

    public void callQuestionList() {

        //GIVEN
        List<String> answersForApiDataList = List.of("answerOne", "answerTwo", "answerThree");

        List<TriviaApiData> triviaApiDataList = List.of(
                new TriviaApiData("12", "multiple choice", "easy", "This is an awesome question", "correct answer", answersForApiDataList),
                new TriviaApiData("12", "multiple choice", "easy", "This is another awesome question", "another correct answer", answersForApiDataList));

        List<String> answerForTriviaQuestionSet = List.of("correct answer", "answerOne", "answerTwo", "answerThree");
        List<String> anotherAnswerForTriviaQuestionSet = List.of("another correct answer", "answerOne", "answerTwo", "answerThree");

        List<TriviaQuestionSet> expected = new ArrayList<>();
        expected.add(new TriviaQuestionSet(1, "This is an awesome question", "correct answer", answerForTriviaQuestionSet));
        expected.add(new TriviaQuestionSet(2, "This is another awesome question", "another correct answer", anotherAnswerForTriviaQuestionSet));

        when(triviaApiService.callQuestionList(amount, category, difficulty))
                .thenReturn(triviaApiDataList);


        when(answerRandomizerService.generateRandomNumber(4)).thenReturn(0);

        TriviaService triviaService = new TriviaService(triviaApiService, tempTriviaQuestionDB, answerRandomizerService, pointsMongoDB);

        // WHEN
        List<TriviaQuestionSet> actual = triviaService.callQuestionList(amount, category, difficulty);

        //THEN
        assertThat((actual), is(expected));
    }


    @Test
    @DisplayName("Withdraws data for one user from DB and adds up his points")

    public void getTotalPointsByUserTest() {

        //GIVEN
        List<TriviaPointDetails> triviaPointDetailsListNine = new ArrayList<>();
        triviaPointDetailsListNine.add(new TriviaPointDetails("easy", 10, 20));
        triviaPointDetailsListNine.add(new TriviaPointDetails("medium", 20, 40));
        triviaPointDetailsListNine.add(new TriviaPointDetails("hard", 40, 10));
        List<TriviaPointDetails> triviaPointDetailsListTen = new ArrayList<>();
        triviaPointDetailsListTen.add(new TriviaPointDetails("hard", 10, 10));

        List<TriviaPointCategory> triviaPointCategoryList = new ArrayList<>();
        triviaPointCategoryList.add(new TriviaPointCategory(9, triviaPointDetailsListNine));
        triviaPointCategoryList.add(new TriviaPointCategory(10, triviaPointDetailsListTen));

        String user = "Laura";
        TriviaPointSummary triviaPointSummary = new TriviaPointSummary(user, triviaPointCategoryList);
        when(pointsMongoDB.findById(user)).thenReturn(Optional.of(triviaPointSummary));

        TriviaService triviaService = new TriviaService(triviaApiService, tempTriviaQuestionDB, answerRandomizerService, pointsMongoDB);

        int expected = 80;

        //WHEN

        int actual = triviaService.getTotalPointsByUser("Laura");

        //THEN

        assertThat((actual),is(expected));
    }
}