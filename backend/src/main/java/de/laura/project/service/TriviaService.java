package de.laura.project.service;

import de.laura.project.api.model.TriviaApiData;
import de.laura.project.api.service.TriviaApiService;
import de.laura.project.db.PointsMongoDB;
import de.laura.project.db.TempTriviaQuestionDB;
import de.laura.project.model.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class TriviaService {

    private final TriviaApiService triviaApiService;
    private final TempTriviaQuestionDB tempTriviaQuestionDB;
    private final AnswerRandomizerService answerRandomizerService;
    private final PointsMongoDB pointsMongoDB;

    @Autowired
    public TriviaService(TriviaApiService triviaApiService, TempTriviaQuestionDB tempTriviaQuestionDB, AnswerRandomizerService answerRandomizerService, PointsMongoDB pointsMongoDB) {
        this.triviaApiService = triviaApiService;
        this.tempTriviaQuestionDB = tempTriviaQuestionDB;
        this.answerRandomizerService = answerRandomizerService;
        this.pointsMongoDB = pointsMongoDB;

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

        tempTriviaQuestionDB.setQuestionList(triviaQuestionSetList);

        return triviaQuestionSetList;
    }


    private List<String> determineAnswers(TriviaApiData triviaApiData) {

        ArrayList<String> answers = new ArrayList<String>();

        int numberOfAnswers = 4;
        int number = answerRandomizerService.generateRandomNumber(numberOfAnswers);

        for (int i = 0; i < numberOfAnswers; i++) {

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
            n++;
        }
        ;
    }

    public TriviaQuestionSetWithoutCorrectAnswer getSingleQuestion(int id) {
        return tempTriviaQuestionDB.getSingleQuestion(id);
    }

    public boolean checkAnswer(int questionID, String selectedAnswer) {
        return tempTriviaQuestionDB.checkAnswer(questionID, selectedAnswer);
    }

    public TriviaPointSummary savePoints(String user, int category, String difficulty, int amount, int points) {

        List<TriviaPointDetails> currentGamePointDetailsList = new ArrayList<>();
        TriviaPointDetails currentGamePointDetails = new TriviaPointDetails(difficulty, amount, points);
        currentGamePointDetailsList.add(currentGamePointDetails);

        List<TriviaPointCategory> currentGamePointCategoryList = new ArrayList<>();
        TriviaPointCategory currentGamePointCategory = new TriviaPointCategory(category, currentGamePointDetailsList);
        currentGamePointCategoryList.add(currentGamePointCategory);


        TriviaPointSummary triviaPointSummaryFromMongoDb = pointsMongoDB.findById(user).get();
        List<TriviaPointCategory> triviaPointCategoryFromMongoDbList = triviaPointSummaryFromMongoDb.getTriviaPointCategory();

        boolean categoryExists = false;

        for (TriviaPointCategory triviaPointCategoryFromDb : triviaPointCategoryFromMongoDbList) {
            if (triviaPointCategoryFromDb.getCategory() == category) {
                categoryExists = true;
                Optional<TriviaPointDetails> difficultyLevel = triviaPointCategoryFromDb.getTriviaPointDetails().stream()
                        .filter(triviaPointDetail -> triviaPointDetail.getDifficulty().equals(difficulty)).findAny();
                if (difficultyLevel.isEmpty()) {
                    List<TriviaPointDetails> triviaPointDetailsFromMongoDbList = triviaPointCategoryFromDb.getTriviaPointDetails();
                    triviaPointDetailsFromMongoDbList.add(currentGamePointDetails);
                    triviaPointCategoryFromDb.setTriviaPointDetails(triviaPointDetailsFromMongoDbList);

                } else {
                    TriviaPointDetails pointDetailsPlayedDifficulty = difficultyLevel.get();
                    int oldPoints = pointDetailsPlayedDifficulty.getPoints();
                    pointDetailsPlayedDifficulty.setPoints((oldPoints + points));
                    int oldAmount = pointDetailsPlayedDifficulty.getAmount();
                    pointDetailsPlayedDifficulty.setAmount(oldAmount + amount);
                }
            }
        }
        if (!categoryExists) {
            triviaPointSummaryFromMongoDb.getTriviaPointCategory().add(currentGamePointCategory);
        }
        return pointsMongoDB.save(triviaPointSummaryFromMongoDb);
    }

    public List<TriviaPointCategoryDTO> getScoreByUser(String user) {
        TriviaPointSummary triviaPointSummaryFromMongoDb = pointsMongoDB.findById(user).get();
        List<TriviaPointCategory> triviaPointCategoryFromMongoDbList = triviaPointSummaryFromMongoDb.getTriviaPointCategory();
        List<TriviaPointCategoryDTO> triviaPointCategoryDTOList = triviaPointCategoryFromMongoDbList.stream()
                .map(triviaPointCategory -> TriviaPointCategoryDTO.builder()
                        .triviaPointDetails(triviaPointCategory.getTriviaPointDetails())
                        .category(convertCategory(triviaPointCategory.getCategory()))
                        .build())
                .collect(Collectors.toList());
        return triviaPointCategoryDTOList;
    }

    public String convertCategory(int category) {
        HashMap<Integer, String> categoryMap = new HashMap<>();
        categoryMap.put(9, "General Knowledge");
        categoryMap.put(10, "Entertainment: Books");
        categoryMap.put(11, "Entertainment: Film");
        categoryMap.put(12, "Entertainment: Music");
        categoryMap.put(13, "Entertainment: Musicals & Theaters");
        categoryMap.put(14, "Entertainment: Television");
        categoryMap.put(15, "Entertainment: Video Games");
        categoryMap.put(16, "Entertainment: Board Games");
        categoryMap.put(17, "Science & Nature");
        categoryMap.put(18, "Science: Computers");
        categoryMap.put(19, "Science: Mathematics");
        categoryMap.put(20, "Mythology");
        categoryMap.put(21, "Sports");
        categoryMap.put(22, "Geography");
        categoryMap.put(23, "History");
        categoryMap.put(24, "Politics");
        categoryMap.put(25, "Art");
        categoryMap.put(26, "Celebrities");
        categoryMap.put(27, "Animals");
        categoryMap.put(28, "Vehicles");
        categoryMap.put(29, "Entertainment: Comics");
        categoryMap.put(30, "Science: Gadgets");
        categoryMap.put(31, "Entertainment: Japanese Anime & Manga");
        categoryMap.put(32, "Entertainment: Cartoon & Animations");
        return categoryMap.get(category);
    }
}





