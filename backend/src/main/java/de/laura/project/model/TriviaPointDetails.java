package de.laura.project.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder


public class TriviaPointDetails {

    private String difficulty;
    private int amount;
    private int points;


}
