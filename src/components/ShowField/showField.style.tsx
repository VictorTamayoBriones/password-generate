import { theme } from '@/theme';
import styled from 'styled-components';

interface Props{
    isShowingPlaceholder: boolean
}

export const ShowFieldStyled = styled.div<Props>`
    background: ${theme.bg};
    padding: 16px;
    margin: 24px 0;
    position: relative;

    p{
        width: 95%;
        color: ${theme.blue_dark};
        font-size: 16px;
        line-height: 24px;
        opacity: ${ (props)=>props.isShowingPlaceholder ? .4 : 1};
        overflow: hidden;
        text-overflow: ellipsis;
    }

    svg{
        position: absolute;
        right: 16px;
        top: 16px;
        cursor: pointer;
    }

`;