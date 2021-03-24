package de.laura.project.db;

import de.laura.project.model.TriviaQuestionSet;
import de.laura.project.model.TriviaQuestionSetWithoutCorrectAnswer;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.List;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

class TempTriviaQuestionDBTest {

    private final TempTriviaQuestionDB triviaQuestionDB = new TempTriviaQuestionDB();

    @Test
    @DisplayName("Tests whether DB returns a question set without the correct answer")

    public void getSingleQuestion() {

        //GIVEN
        List<TriviaQuestionSet> triviaQuestionSetList = new ArrayList<>();
        triviaQuestionSetList.add(new TriviaQuestionSet(1, "This is an awesome question", "correct answer", List.of("correct answer", "answerOne", "answerTwo", "answerThree")));
        triviaQuestionSetList.add(new TriviaQuestionSet(2, "This is another awesome question", "another correct answer", List.of("another correct answer", "answerOne", "answerTwo", "answerThree")));

        triviaQuestionDB.setTriviaQuestionSetList(triviaQuestionSetList);

        TriviaQuestionSetWithoutCorrectAnswer expected = new TriviaQuestionSetWithoutCorrectAnswer(2, "This is another awesome question", List.of("another correct answer", "answerOne", "answerTwo", "answerThree"));

        //WHEN
        TriviaQuestionSetWithoutCorrectAnswer actual = triviaQuestionDB.getSingleQuestion(2);

        //THEN
        assertThat((actual), is(expected));
    }

    @Test
    @DisplayName("Tests whether a correct answer is recognized as such")

    public void checkAnswer() {

        //GIVEN
        List<TriviaQuestionSet> triviaQuestionSetList = new ArrayList<>();
        triviaQuestionSetList.add(new TriviaQuestionSet(1, "This is an awesome question", "correct answer", List.of("correct answer", "answerOne", "answerTwo", "answerThree")));
        triviaQuestionSetList.add(new TriviaQuestionSet(2, "This is another awesome question", "another correct answer", List.of("another correct answer", "answerOne", "answerTwo", "answerThree")));

        triviaQuestionDB.setTriviaQuestionSetList(triviaQuestionSetList);

        //THEN
        assertTrue(triviaQuestionDB.checkAnswer(1, "correct answer"));
    }

    @Test
    @DisplayName("Tests whether a false answer is recognized as such")

    public void checkAnswerWhenFalse() {

        //GIVEN
        List<TriviaQuestionSet> triviaQuestionSetList = new ArrayList<>();
        triviaQuestionSetList.add(new TriviaQuestionSet(1, "This is an awesome question", "correct answer", List.of("correct answer", "answerOne", "answerTwo", "answerThree")));
        triviaQuestionSetList.add(new TriviaQuestionSet(2, "This is another awesome question", "another correct answer", List.of("another correct answer", "answerOne", "answerTwo", "answerThree")));

        triviaQuestionDB.setTriviaQuestionSetList(triviaQuestionSetList);

        //THEN
        assertFalse(triviaQuestionDB.checkAnswer(1, "Thís is nonsense"));
    }
}