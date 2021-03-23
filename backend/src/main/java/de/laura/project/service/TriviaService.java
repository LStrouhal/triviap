package de.laura.project.service;

import de.laura.project.api.model.TriviaApiData;
import de.laura.project.api.service.TriviaApiService;
import de.laura.project.db.TempTriviaQuestionDB;
import de.laura.project.model.TriviaQuestionSet;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service

public class TriviaService {

    private final TriviaApiService triviaApiService;
    private final TempTriviaQuestionDB tempTriviaQuestionDB;
    private final AnswerRandomizerService answerRandomizerService;




    @Autowired

    public TriviaService(TriviaApiService triviaApiService, TempTriviaQuestionDB tempTriviaQuestionDB, AnswerRandomizerService answerRandomizerService) {
        this.triviaApiService = triviaApiService;
        this.tempTriviaQuestionDB = tempTriviaQuestionDB;
        this.answerRandomizerService = answerRandomizerService;
    }




    public List<TriviaQuestionSet> callQuestionList(int amount, int category, String difficulty) {

        List<TriviaApiData> triviaApiDataList = triviaApiService.callQuestionList(amount, category, difficulty);

        List<TriviaQuestionSet> triviaQuestionSetList = new ArrayList<>();

        triviaQuestionSetList = triviaApiDataList.stream()
                .map(triviaApiData -> TriviaQuestionSet.builder()
                        .question(triviaApiData.getQuestion())
                        .correct_answer(triviaApiData.getCorrect_answer())
                        .answers(determineAnswers(triviaApiData))
                        .build()).collect(Collectors.toList());

        addIDtoQuestionSet(triviaQuestionSetList);

        tempTriviaQuestionDB.returnQuestionList(triviaQuestionSetList);

        return triviaQuestionSetList;

    }

    private List<String> determineAnswers(TriviaApiData triviaApiData) {

        ArrayList<String> answers = new ArrayList<String>();

        int number = answerRandomizerService.generateRandomNumber();

        for (int i = 0; i < 4; i++) {

            if (i < number) {
                answers.add(triviaApiData.getIncorrect_answers().get(i));
            } else if (i == number) {
                answers.add(triviaApiData.getCorrect_answer());
            } else {
                answers.add(triviaApiData.getIncorrect_answers().get(i - 1));
            }
        }

        return answers;
    }


    public void addIDtoQuestionSet(List<TriviaQuestionSet> triviaQuestionSetList) {

        int n = 1;

        for (TriviaQuestionSet triviaQuestion : triviaQuestionSetList) {
            triviaQuestion.setId(n);
            n = n + 1;

        };
    }

}


