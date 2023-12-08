import React, {useEffect, useState} from "react";
import {useBackgroundContext} from "../context/BackgroundContext";
import '../static/rangeStyle.css'

function WaveSlider(){
    const [sliderValue, setSliderValue] = useState('0');
    const {backgroundData, waves0, waves1, waves2, waves3} = useBackgroundContext()

    const handleSliderChange = (e) => {
        // Solo permitir valores 0, 1, 2, y 3
        if (e.target.value === '0' || e.target.value === '1' || e.target.value === '2' || e.target.value === '3') {
            setSliderValue(e.target.value);
        }
    };

    useEffect(() => {
        if (sliderValue === '0') {
            waves0()
        } else if (sliderValue === '1'){
            waves1()
        } else if (sliderValue === '2'){
            waves2()
        } else {
            waves3()
        }
    }, [sliderValue]);

    return (
        <div>
            <p>Multiplicidad de la amplitud de los campos E y B</p>
            <input name={"range"} type={"range"} min={0} max={3} step={1} defaultValue={0} onChange={handleSliderChange} list={"campos"}></input>
            <datalist id={"campos"}>
                <option value={0}>0</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
            </datalist>
        </div>
    )
}

export default WaveSlider