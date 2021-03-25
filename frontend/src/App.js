import SelectionsHeader from "./components/SelectionsHeader";
import Selections from "./components/Selections";
import PageLayout from "./components/PageLayout";
import NextButton from "./components/NextButton";

export default function App() {


    return (
        <PageLayout>
            <SelectionsHeader/>
            <Selections/>
        </PageLayout>
    );
}


