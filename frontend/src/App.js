import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TriviaSelector from "./pages/TriviaSelector";
import Layout from "./components/Layout";
import TriviaGame from "./pages/TriviaGame";
import TriviaWelcome from "./pages/TriviaWelcome";
import { useState } from "react";
import TriviaResults from "./pages/TriviaResults";

export default function App() {
  const [numberOfQuestions, setNumberOfQuestions] = useState(0);
  const [points, setPoints] = useState(0);
  const [selectionParameters, setSelectionParameters] = useState({});
  console.log(selectionParameters);

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/welcome">
            <TriviaWelcome />
          </Route>
          <Route exact path="/questions">
            <Layout>
              <TriviaSelector
                onClickSetNumberOfQuestions={setNumberOfQuestions}
                setSelectionParameters={setSelectionParameters}
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
            <TriviaResults
              points={points}
              selectionParameters={selectionParameters}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
