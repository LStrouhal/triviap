package de.laura.project.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class TriviaPointSavingDTO {

    private int category;
    private int amount;
    private String difficulty;
    private int points;

}

