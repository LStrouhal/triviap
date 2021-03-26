package de.laura.project.db;

import de.laura.project.model.TriviaQuestionSet;
import de.laura.project.model.TriviaQuestionSetWithoutCorrectAnswer;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder

@Repository
public class TempTriviaQuestionDB {

    private List<TriviaQuestionSet> triviaQuestionSetList = new ArrayList<>();


    public void setQuestionList(List<TriviaQuestionSet> triviaQuestionSetList) {
        setTriviaQuestionSetList(triviaQuestionSetList);
    }

    public TriviaQuestionSetWithoutCorrectAnswer getSingleQuestion(int questionId) {

        List<TriviaQuestionSetWithoutCorrectAnswer> triviaQuestionSetListWithoutAnswer = new ArrayList<>();

        triviaQuestionSetListWithoutAnswer = triviaQuestionSetList.stream()
                .map(triviaQuestionSet -> TriviaQuestionSetWithoutCorrectAnswer.builder()
                        .id(triviaQuestionSet.getId())
                        .question(triviaQuestionSet.getQuestion())
                        .answers(triviaQuestionSet.getAnswers())
                        .build()).collect(Collectors.toList());

        return triviaQuestionSetListWithoutAnswer.stream()
                .filter(triviaQuestionSet -> triviaQuestionSet.getId() == (questionId))
                .findFirst().get();

        }

    public boolean checkAnswer(int questionId, String selectedAnswer) {

        String correctAnswer = triviaQuestionSetList.stream()
                .filter(triviaQuestionSet -> triviaQuestionSet.getId() == (questionId))
                .findFirst().get().getCorrect_answer();

        if (correctAnswer.equals(selectedAnswer)) {
            return true;
        }
        else {
            return false;
        }
    }

    public void clear() {
        triviaQuestionSetList.clear();
    }
}