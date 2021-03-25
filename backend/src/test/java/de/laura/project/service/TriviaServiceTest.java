package de.laura.project.service;

import de.laura.project.api.model.TriviaApiData;
import de.laura.project.api.service.TriviaApiService;
import de.laura.project.db.TempTriviaQuestionDB;
import de.laura.project.model.TriviaQuestionSet;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.List;

import static org.hamcrest.Matchers.containsInAnyOrder;
import static org.mockito.Mockito.*;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;

class TriviaServiceTest {

    private final AnswerRandomizerService answerRandomizerService = mock(AnswerRandomizerService.class);
    private final TriviaApiService triviaApiService = mock(TriviaApiService.class);

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

        TriviaService triviaService = new TriviaService(triviaApiService, tempTriviaQuestionDB, answerRandomizerService);

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

        TriviaService triviaService = new TriviaService(triviaApiService, tempTriviaQuestionDB, answerRandomizerService);

        // WHEN
        List<TriviaQuestionSet> actual = triviaService.callQuestionList(amount, category, difficulty);

        //THEN
        assertThat((actual), is (expected));
    }
}