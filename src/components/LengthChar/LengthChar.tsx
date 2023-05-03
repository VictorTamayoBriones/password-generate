import React, { useState } from "react"
import { LengthCharStyled } from "./length.style"

function LenghtChar() {
    
    const [lengthCharValue, setLengthCharValue] = useState<string>('0')

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setLengthCharValue(e.target.value)
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