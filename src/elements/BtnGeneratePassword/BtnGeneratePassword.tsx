import { useSelector } from 'react-redux'
import { AppStore } from '@/redux/store'
import RandExp from 'randexp';
import { useDispatch } from 'react-redux';
import { handlePasswordGenerated } from '@/redux/states/passwordGenerated.slice';
import { Button } from '@/components/Buttons/Button';





function BtnGeneratePassword() {

    const options = useSelector( ( store : AppStore ) => store.options )
    const { lengthValue } = useSelector( ( store : AppStore ) => store.length )

    const dispatch = useDispatch()

    const regexToGeneratePassword = Object.entries(options).filter(entry => entry[1].is_selected).map(option => option[1].regex)

    const generatePassword = () => {

        const regex = regexToGeneratePassword.sort(function() {
            return Math.random() - 0.5;
        }).toString().replaceAll(',', '');
        
        const pass = new RandExp(`${regex}{${lengthValue}}`).gen()
        
        dispatch(handlePasswordGenerated(pass.slice(0, Number(lengthValue))))
    }


    const createClassName = regexToGeneratePassword.length > 0 && Number(lengthValue) > 0 ? 'btn_is_active' : 'btn_is_disable'

    return (
        <Button className={ createClassName } onClick={()=> createClassName === 'btn_is_active' && generatePassword()} >Generar contraseña</Button>  
    )
}

export default BtnGeneratePassword