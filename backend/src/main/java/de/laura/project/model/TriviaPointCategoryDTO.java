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

public class TriviaPointCategoryDTO {

    private String category;
    private List<TriviaPointDetails> triviaPointDetails;

}
