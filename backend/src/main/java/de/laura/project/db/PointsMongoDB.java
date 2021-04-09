package de.laura.project.db;
import de.laura.project.model.TriviaPointSummary;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;


public interface PointsMongoDB extends PagingAndSortingRepository<TriviaPointSummary, String> {

    List<TriviaPointSummary> findAll();

}



