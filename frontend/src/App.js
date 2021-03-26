import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import TriviaSelector from "./pages/TriviaSelector";
import PageLayout from "./components/PageLayout";
import TriviaGame from "./pages/TriviaGame";

export default function App() {

    return (
        <div>
            <Router>
                <Switch>
                    <PageLayout>
                        <Route exact path="/">
                        </Route>
                        <Route exact path="/questions">
                            <TriviaSelector/>
                        </Route>
                        <Route path="/questions/:questionID">
                            <TriviaGame/>
                        </Route>
                    </PageLayout>
                </Switch>
            </Router>
        </div>
    )
}


