package de.laura.project.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class TriviaApiParametersDTO {

    private int amount;
    private int category;
    private String difficulty;

}
