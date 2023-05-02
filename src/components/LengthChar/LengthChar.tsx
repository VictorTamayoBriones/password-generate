import { LengthCharStyled } from "./length.style"

function LenghtChar() {
    
    return (
        <LengthCharStyled>
            <div>
                <p>Longitud de carácter</p>
                <span>0</span>
            </div>
            <input  type="range" value="0" onChange={()=>console.log('first')}/>
        </LengthCharStyled>
    )
}

export default LenghtChar