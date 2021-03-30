import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TriviaSelector from "./pages/TriviaSelector";
import PageLayout from "./components/PageLayout";
import TriviaGame from "./pages/TriviaGame";
import { useState } from "react";
import TriviaResults from "./pages/TriviaResults";

export default function App() {
  const [numberOfQuestions, setNumberOfQuestions] = useState(0);

  return (
    <div>
      <Router>
        <Switch>
          <PageLayout>
            <Route exact path="/"></Route>
            <Route exact path="/questions">
              <TriviaSelector
                onClickSetNumberOfQuestions={setNumberOfQuestions}
              />
            </Route>
            <Route exact path="questions/result">
              <TriviaResults> </TriviaResults>
            </Route>
            <Route path="/questions/:questionID">
              <TriviaGame numberOfQuestions={numberOfQuestions} />
            </Route>
          </PageLayout>
        </Switch>
      </Router>
    </div>
  );
}
