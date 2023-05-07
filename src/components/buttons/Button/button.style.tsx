import { theme } from '@/theme';
import styled from 'styled-components';

interface Props{
    width?: string,
    height?: string,
    color?: string,
    bg?: string,
    className?:string
}

export const ButtonStyled = styled.button<Props>`
    width: ${ props => props.width ? props.width : 'auto' };
    height: ${ props => props.height ? props.height : 'auto'};
    background: ${ props => {
        if(props.className){
            if(props.className === 'btn_is_active'){
                return theme.blue
            }else if(props.className === 'btn_is_disable'){
                return theme.grey_light
            }
        }
        if(props.bg){
            return props.bg
        }else{
            return theme.blue
        }
    }};
    color: ${ props => {
        if(props.className){
            if(props.className === 'btn_is_active'){
                return theme.white
            }else if(props.className === 'btn_is_disable'){
                return theme.grey_dark
            }
        }
        if(props.color){
            return props.color
        }else{
            return theme.white
        }
    }};
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    border: none;
    padding: 12px 16px;
    cursor: ${props=>{
        if(props.className){
            if(props.className === 'btn_is_active'){
                return 'pointer'
            }else if(props.className === 'btn_is_disable'){
                return 'auto'
            }
        }else{
            return 'pointer'
        }
    }};
    transition: ease-in-out .3s all;
`;