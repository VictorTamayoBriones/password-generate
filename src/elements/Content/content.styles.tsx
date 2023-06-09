import { theme } from '@/theme';
import styled from 'styled-components';

export const ContentContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h2`
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    color: ${theme.blue_dark};
`;