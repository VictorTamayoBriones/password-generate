import { theme } from '@/theme';
import styled from 'styled-components';

export const ShowFieldStyled = styled.div`
    background: ${theme.bg};
    padding: 16px;
    margin: 24px 0;
    position: relative;

    p{
        width: 95%;
        color: ${theme.blue_dark};
        font-size: 16px;
        line-height: 24px;
    }

    svg{
        position: absolute;
        right: 16px;
        top: 16px;
        fill: ${ theme.blue };
        cursor: pointer;
    }

`;