import styled from 'styled-components';

export const ListWrapper = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  align-items: center;
`;

export const List = styled.ul`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  aling-items: center;
  justify-content: center;
  margin-top: 25px;
`;

export const LoadMoreBtn = styled.button`
  box-shadow: 0px 3.5px 3.5px #5736a3, 0 0 10px 4px #c0c0c0;
  border: 2px solid #5736a3;
  padding: 10px 22px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
  cursor: pointer;
  transition: all 200ms ease-in-out;
  &:hover,
  &:focus {
    color: #c0c0c0;
    background-color: transparent;
    box-shadow: 0 0 10px 0 #5736a3 inset, 0 0 10px 4px #5736a3;
    border: 2px solid #5736a3;
  }
`;
