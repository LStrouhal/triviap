package de.laura.project.model;

import lombok.*;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder

public class TriviaQuestionSet {

    private int id;
    private String question;
    private String correct_answer;
    private List<String> answers;;


}
