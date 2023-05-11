import { theme } from '@/theme';
import styled from 'styled-components';

export const LengthCharStyled = styled.div`
    
    div{
        width: 100%;
        display: flex;
        justify-content: space-between;
        
        p{
            font-weight: bold;
            color: ${ theme.blue_dark };
            font-size: 16px;
            line-height: 24px;
            margin-bottom: 16px;
        }
        span{
            color: ${theme.blue};
            font-weight: bold;
            font-size: 20px;
            line-height: 24px;
        }
    }
    input{
        width: 100%;
        cursor: pointer;
    }
`;