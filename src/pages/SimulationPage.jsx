import React, {useEffect, useState} from "react";
import {useBackgroundContext} from "../context/BackgroundContext";
import WaveSlider from "../components/WaveSlider";
import HouseArea from "../components/HouseArea";
import "../static/simulationStyle.css"
import "../static/areaStyle.css"
import "../static/style0.css"
import {useAreaContext} from "../context/AreaContext";

function SimulationPage() {
    const {areaValue} = useAreaContext()
    const {backgroundData} = useBackgroundContext();
    const [bValue, setB] = useState(0.00145)
    const [eValue, setE] = useState(0.0377)


    useEffect(() => {
        if (backgroundData === 0) {
            document.body.style.backgroundImage = `url('/back2-ondas0.jpg')`;
        } else if (backgroundData === 1) {
            document.body.style.backgroundImage = `url('/back2-ondas1.jpg')`;
        } else if (backgroundData === 2) {
            document.body.style.backgroundImage = `url('/back2-ondas2.jpg')`;
        } else {
            document.body.style.backgroundImage = `url('/back2-ondas3.jpg')`;
        }

        setB(backgroundData * 0.00145)
        setE(backgroundData * 0.0377)
    }, [backgroundData]);

    const poynting = () => {
        return ((1 / (8.854 * (10 ** (-12)))) * eValue * bValue)
    }

    const intensidad = () => {
        return ((eValue * bValue) / (2 * (1 / (((3 * (10 ** 8)) ** 2) * (8.854 * (10 ** (-12)))))))
    }

    return (
        <>
            <div className={"card"}>
                <p>E = {eValue} V/m</p>
                <p>B = {bValue} T</p>
                <div className={"area"}>
                    <WaveSlider/>
                </div>
                <div className={"area"}>
                    <HouseArea/>
                </div>
            </div>
            <div className="card_values">
                <div className="section_values">
                    <div className="title">Poynting (Unidad de área y de tiempo)</div>
                    <div className="label">{poynting()} W/m²</div>
                </div>
                <div className="section_values">
                    <div className="title">Intensidad (Unidad de área)</div>
                    <div className="label">{intensidad()} W/m²</div>
                </div>
                <div className="section_values">
                    <div className="title">Poynting (Unidad de tiempo)</div>
                    <div className="label">{poynting() * areaValue} W</div>
                </div>
                <div className="section_values">
                    <div className="title">Potencia promedio</div>
                    <div className="label">{intensidad() * areaValue} W</div>
                </div>
            </div>
        </>
    );
}

export default SimulationPage;
