import { theme } from '@/theme';
import styled from 'styled-components';

export const AlertStyled = styled.div`
    height: 80px;
    width: 328px;
    height: 80px;
    background: ${theme.white};
    border: solid 1px ${theme.green};
    position: absolute;
    top: 80px;
    right: 80px;
    padding: 0px 20px 4px 15.8px;
    border-radius: 4px;
    display: flex;
    overflow: hidden;
    animation: showAlert 4s ease-in-out;

    svg{
        margin-top: 13px;
    }
    
    P{
        font-weight: bold;
        font-size: 16px;
        line-height: 24px;
        margin: auto 16px;
    }

    &::after{
        content: '';
        width: 8px;
        height: 80px;
        background: ${theme.green};
        opacity: .4;
        position: absolute;
        top: 0;
        left: 0;
    }


    @keyframes showAlert{
        0%{
            top: -80px;
            opacity: 0;
        }
        25%{
            top: 80px;
            opacity: 1;
        }
        75%{
            top: 80px;
            opacity: 1;
        }
        100%{
            top: -80px;
            opacity: 0;
        }
    }

    @media (max-width:670px){
        top: 24px;
        right: calc((100vw - 328px) / 2);
    }
`;