package de.laura.project.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder

public class TriviaQuestionSetWithoutCorrectAnswer {

    private int id;
    private String question;
    private List<String> answers;

}
