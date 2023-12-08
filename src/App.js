import './App.css';
import {BackgroundProvider} from "./context/BackgroundContext";
import WaveSlider from "./components/WaveSlider";
import SimulationPage from "./pages/SimulationPage";
import {AreaProvider} from "./context/AreaContext";
import {Helmet} from "react-helmet";

function App() {
    return (
        <BackgroundProvider>
            <AreaProvider>
                <Helmet>
                    <link rel="preload" href="/back2-ondas0.jpg" as="image" />
                    <link rel="preload" href="/back2-ondas1.jpg" as="image" />
                    <link rel="preload" href="/back2-ondas2.jpg" as="image" />
                    <link rel="preload" href="/back2-ondas3.jpg" as="image" />
                </Helmet>
                <SimulationPage/>
            </AreaProvider>
        </BackgroundProvider>
    );
}

export default App;
