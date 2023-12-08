import React, {useEffect, useState} from "react";
import {useAreaContext} from "../context/AreaContext";
import '../static/rangeStyle.css'

function HouseArea(){
    const {areaValue, setAreaValue} = useAreaContext(0);

    const handleAreaChange = (e) => {
        setAreaValue(e.target.value)
    };

    const inputStyle = {
        borderRadius: '8px',  // Ajusta el valor según sea necesario
        padding: '10px',      // Otros estilos opcionales
        border: '1px solid #ccc',
    };

    return (
        <div>
            <p>Área de la casa</p>
            <input name={"area"} type={"number"} onChange={handleAreaChange}
            style={inputStyle}></input>
            <label>m²</label>
        </div>
    )
}

export default HouseArea