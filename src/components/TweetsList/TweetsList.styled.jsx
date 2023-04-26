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
  background: #ebd8ff;
  padding: 8px 12px;
  box-shadow: 0px 3.5px 3.5px rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 10px;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
  border: 2px solid #5736a3;
  cursor: pointer;
  transition: box-shadow 200ms ease-in-out;
  &:hover,
  &:focus {
    box-shadow: 0 0 10px 0 #5736a3 inset, 0 0 10px 4px #5736a3;
  }
`;
