import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #cfd4d6;
`;

export const Link = styled(NavLink)`
  display: inline-flex;
  padding: 15px 12px;
  margin-right: 12px;
  font-weight: 600;
  font-size: 16px;
  line-height: calc(24 / 16);
  color: rgba(255, 255, 255, 1);
  background-color: transparent;
  border: 2px solid transparent;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
  transition: all 200ms ease-in-out;
  &:hover {
    color: #5736a3;
    background-color: transparent;
    box-shadow: 0 0 10px 0 #5736a3 inset, 0 0 10px 4px #5736a3;
    border: 2px solid #5736a3;
  }
  &.active {
    color: #5736a3;
  }
`;
