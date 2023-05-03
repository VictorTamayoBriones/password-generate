import { theme } from '@/theme';
import styled from 'styled-components';

interface Props{
    width?: string,
    height?: string,
    color?: string,
    bg?: string
}

export const ButtonStyled = styled.button<Props>`
    width: ${ props => props.width ? props.width : 'auto' };
    height: ${ props => props.height ? props.height : 'auto'};
    background: ${ props => props.bg ? props.bg : theme.blue };
    color: ${ props => props.color ? props.color : theme.white};
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    border: none;
    padding: 12px 16px;
    cursor: pointer;
`;