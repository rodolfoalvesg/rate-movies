import Styled from 'styled-components';

export const Container = Styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const TableStyle = Styled.table`
    width: 100%;
    border: 0;
    border-spacing: 0 1px;
    margin: 20px 0;
    thead{
        background-color: rgb(15, 121, 175, 0.38);
        height: 40px;
        tr{
            th{
                color: #fff;
            }
        }
    }

    tr:nth-child(even){
        background-color: rgb(15, 121, 175, 0.2);
    }
`;