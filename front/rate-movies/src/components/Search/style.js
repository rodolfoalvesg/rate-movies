import Styled from 'styled-components';

export const Container = Styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 80px;
    background-color: #0E374C;
    margin-top: 20px;
    border-radius:5px;

    .search{
        width: 90%;
        height:40px;
        border: 0;
        border-radius:5px;
        padding: 0 20px;
        outline: none;
        position: relative;
    }

    input[type="text"]{
        background-color: #0E4662;
        color: #fff;
        font-size:14px;
    }

    .icon-search{
        position: absolute;
        right: 60px
    }

`;
