package de.laura.project.db;

import de.laura.project.model.TriviaQuestionSet;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

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
}