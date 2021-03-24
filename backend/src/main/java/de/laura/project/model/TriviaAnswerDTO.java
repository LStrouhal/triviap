package de.laura.project.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder

public class TriviaAnswerDTO {

    private int questionId;
    private String selectedAnswer;

}