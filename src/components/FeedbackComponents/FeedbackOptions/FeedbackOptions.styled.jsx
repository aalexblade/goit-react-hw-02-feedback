import styled from "styled-components";

export const FeedbackBtn = styled.button`
  width: 120px;
  border-radius: 6px;
  color: black;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
   /* :focus {
    background-color: #e8eef0;
   } */
  &:hover,
  &:focus {
    color:  white;
    background-color:#4b6cf3
  }
  &:active {
    /* color: black; */
    background-color:#0033ff;
  }
  `;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px;
`;
