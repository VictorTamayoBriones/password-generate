import { Lever } from '@/assets/icons'
import { ShowField } from '../../components/ShowField'

import { theme } from '@/theme';
import { FillProps } from '@/assets/icons/lever';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { AppStore } from '@/redux/store';

export default function LevelSecurity() {

  const [propsToHandleFill, setPropsToHandleFill] = useState<FillProps>({
    fillOne: theme.grey_light,
    fillTwo: theme.grey_light,
    fillThree: theme.grey_light,
    fillFour: theme.grey_light
  })
  
  const options  = useSelector((store:AppStore)=>store.options)
  const { lengthValue } = useSelector((store:AppStore)=>store.length)

  const numOfOptionsSelected = Object.entries(options).filter(entry => entry[1].is_selected).map(entry => entry[0]).length
  
  useEffect(()=>{

    const numberValueOfOptionsSelected = numOfOptionsSelected / 2

    const numberValueOfLength = Number(lengthValue) >= 8 && Number(lengthValue) <20 ? .5 : Number(lengthValue)>= 20 ? 2 : 0

    const numberValueOfSecurity = Math.round(numberValueOfOptionsSelected + numberValueOfLength)
    
    if(numOfOptionsSelected === 0){
      setPropsToHandleFill({
        fillOne: theme.grey_light,
        fillTwo: theme.grey_light,
        fillThree: theme.grey_light,
        fillFour: theme.grey_light
      })
    }else if(numberValueOfSecurity === 1){
      setPropsToHandleFill({
        fillOne: theme.green,
        fillTwo: theme.grey_light,
        fillThree: theme.grey_light,
        fillFour: theme.grey_light
      })
    }else if(numberValueOfSecurity === 2){
      setPropsToHandleFill({
        fillOne: theme.green,
        fillTwo: theme.green,
        fillThree: theme.grey_light,
        fillFour: theme.grey_light
      })
    }else if(numberValueOfSecurity === 3){
      setPropsToHandleFill({
        fillOne: theme.green,
        fillTwo: theme.green,
        fillThree: theme.green,
        fillFour: theme.grey_light
      })
    }else if(numberValueOfSecurity === 4){
      setPropsToHandleFill({
        fillOne: theme.green,
        fillTwo: theme.green,
        fillThree: theme.green,
        fillFour: theme.green 
      })
    }

  }, [lengthValue, numOfOptionsSelected])


  return (
    <ShowField icon={<Lever {...propsToHandleFill} />} >Nivel de seguridad</ShowField>
  )
}
