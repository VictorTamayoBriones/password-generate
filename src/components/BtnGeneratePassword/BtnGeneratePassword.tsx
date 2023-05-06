import { useSelector } from 'react-redux'
import { Button } from '../Buttons'
import { AppStore } from '@/redux/store'
import RandExp from 'randexp';



function BtnGeneratePassword() {

    const options = useSelector( ( store : AppStore ) => store.options )
    const { lengthValue } = useSelector( ( store : AppStore ) => store.length )

    const generatePassword = () => {
        const regexToGeneratePassword = Object.entries(options)
            .filter(entry => entry[1].is_selected)
                .map(option => option[1].regex)

        const regex = regexToGeneratePassword.toString().replaceAll(',', '')
        const pass = new RandExp(`${regex}{${lengthValue}}`).gen()
        console.log(pass)
    }

    return (
        <Button onClick={()=>generatePassword()} >Generar contraseña</Button>  
    )
}

export default BtnGeneratePassword