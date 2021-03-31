import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TriviaSelector from "./pages/TriviaSelector";
import Layout from "./components/Layout";
import TriviaGame from "./pages/TriviaGame";
import { useState } from "react";
import TriviaResults from "./pages/TriviaResults";

export default function App() {
  const [numberOfQuestions, setNumberOfQuestions] = useState(0);
  const [points, setPoints] = useState(0);

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/questions">
            <Layout>
              <TriviaSelector
                onClickSetNumberOfQuestions={setNumberOfQuestions}
              />
            </Layout>
          </Route>

          <Route exact path="/questions/:questionID">
            <Layout>
              <TriviaGame
                numberOfQuestions={numberOfQuestions}
                setPoints={setPoints}
                points={points}
              />
            </Layout>
          </Route>

          <Route exact path="/results">
            <TriviaResults points={points} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
