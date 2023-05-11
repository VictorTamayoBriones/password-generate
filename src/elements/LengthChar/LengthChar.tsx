import React, { useState } from "react"
import { LengthCharStyled } from "./length.style"
import { useSelector } from 'react-redux';
import { AppStore } from '../../redux/store';
import { useDispatch } from "react-redux";
import { handleLength } from "@/redux/states/length.slice";

function LenghtChar() {
    
    const { length } = useSelector((store:AppStore)=>store)

    const dispatch = useDispatch();

    const [lengthCharValue, setLengthCharValue] = useState<string>(length.lengthValue)

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setLengthCharValue(e.target.value)
        dispatch(handleLength(e.target.value))
    }

    return (
        <LengthCharStyled>
            <div>
                <p>Longitud de carácter</p>
                <span>{lengthCharValue}</span>
            </div>
            <input  type="range" value={lengthCharValue}  step="1" min="0" max="100" onChange={(e)=>handleChange(e)}/>
        </LengthCharStyled>
    )
}

export default LenghtChar