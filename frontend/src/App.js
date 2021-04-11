import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TriviaSelector from "./pages/TriviaSelector";
import Layout from "./components/Layout";
import TriviaGame from "./pages/TriviaGame";
import TriviaWelcome from "./pages/TriviaWelcome";
import { useState } from "react";
import TriviaResults from "./pages/TriviaResults";
import ScoreOverview from "./pages/ScoreOverview";
import LoginPage from "./pages/LoginPage";

export default function App() {
  const [numberOfQuestions, setNumberOfQuestions] = useState(0);
  const [points, setPoints] = useState(0);
  const [selectionParameters, setSelectionParameters] = useState({});
  const [user, setUser] = useState("");
  console.log(selectionParameters);

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/login">
            <LoginPage setUser={setUser} />
          </Route>
          <Route exact path="/welcome">
            <TriviaWelcome user={user} />
          </Route>
          <Route exact path="/questions">
            <Layout>
              <TriviaSelector
                onClickSetNumberOfQuestions={setNumberOfQuestions}
                setSelectionParameters={setSelectionParameters}
                setPoints={setPoints}
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
              user={user}
              points={points}
              selectionParameters={selectionParameters}
            />
          </Route>
          <Route exact path="/scoreOverview">
            <Layout>
              <ScoreOverview user={user} />
            </Layout>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
