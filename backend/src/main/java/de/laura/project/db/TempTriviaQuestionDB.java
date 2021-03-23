package de.laura.project.db;

import de.laura.project.model.TriviaQuestionSet;
import de.laura.project.model.TriviaQuestionSetWithoutAnswer;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder

@Service
public class TempTriviaQuestionDB {

    private List<TriviaQuestionSet> triviaQuestionSetList;


    public List<TriviaQuestionSet> returnQuestionList(List<TriviaQuestionSet> triviaQuestionSetList) {
        this.triviaQuestionSetList = triviaQuestionSetList;
        return triviaQuestionSetList;
    }

    public TriviaQuestionSetWithoutAnswer getSingleQuestion(int id) {

        List<TriviaQuestionSetWithoutAnswer> triviaQuestionSetListWithoutAnswer = new ArrayList<>();

        triviaQuestionSetListWithoutAnswer = triviaQuestionSetList.stream()
                .map(triviaQuestionSet -> TriviaQuestionSetWithoutAnswer.builder()
                        .id(triviaQuestionSet.getId())
                        .question(triviaQuestionSet.getQuestion())
                        .answers(triviaQuestionSet.getAnswers())
                        .build()).collect(Collectors.toList());



        return

        /*filter(triviaQuestionSet
                -> triviaQuestionSet.getId() == (id))
                .findFirst().get();



                         */
    }
}