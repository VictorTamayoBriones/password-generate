import { theme } from '@/theme';
import styled from 'styled-components';

export const Container = styled.article`
    width: 655px;
    height: 540px;
    background: ${theme.white};
    border-radius: 16px;
    box-shadow: 0 7px 11px #172a5814, 0 1.4px 1.79px #172a5807;
    padding: 24px 40px;

    @media (max-width: 670px){
        width: 328px;
        height: 524px;
        padding: 16px;
    }
`;