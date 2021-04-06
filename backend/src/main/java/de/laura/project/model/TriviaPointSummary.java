package de.laura.project.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Document(collection = "points")

public class TriviaPointSummary {

    private int category;
    private int amount;
    private String difficulty;
    private int points;

}

