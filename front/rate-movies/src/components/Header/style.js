import Styled from 'styled-components';

export const HeaderMain = Styled.header`
    width: 100%;
    min-height:80px;
    display: flex;
    justify-content: center;
    background-color: #0C1C2F;
`;

export const HeaderInternal = Styled.section`
    width: 80%;
    min-height:60px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1{
        font-size:30px;
        font-weight: 400;
        color: #fff;
    }

    .logo{
        width:160px;
        height:60px;
    }

    .login{
        width: 60px;
    }


`