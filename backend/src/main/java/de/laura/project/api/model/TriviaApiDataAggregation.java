package de.laura.project.api.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class TriviaApiDataAggregation {

    private int response_code;
    @JsonProperty("results")
    private List<TriviaApiData> triviaApiData;

}


