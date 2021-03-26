import {getSingleQuestion} from "../services/apiService";
import {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import styled from 'styled-components/macro';
import Answers from "./Answers";

export default function Questions() {

    const {questionID} = useParams()
    const [questionSet, setQuestionSet] = useState("undefined")

    useEffect(() => {
        getSingleQuestion(questionID)
            .then(setQuestionSet)
    }, [questionID])

    if(questionSet !== undefined) {

        return (
            <Section>
                <p>
                    {questionSet.question}
                </p>
                )}
                <Answers answers={questionSet.answers}/>
            </Section>
        )
    }
}


const Section = styled.section`
  padding: 0 20px;

  p {
    background-color: var(--beigeStandard);
    color: var(--greenStandard);
    height: min-content;
    display: flex;
    flex-flow: wrap;
    justify-content: left;
    width: 100%;
    padding: 20px;
    font-size: 1.2em;
    margin-bottom: 40px;
  }
`
