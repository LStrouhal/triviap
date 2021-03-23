package de.laura.project.service;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.stereotype.Service;


@Data
@AllArgsConstructor
@Service

public class AnswerRandomizerService {

    public int generateRandomNumber(int numberOfAnswers) {

        return (int) (Math.random() * numberOfAnswers);

    }
}