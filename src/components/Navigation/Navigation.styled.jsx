import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    height: 3px;
    border-radius: 2px;
    background-color: #cfd4d6;
  }
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
  border: 3px solid transparent;
  border-radius: 50%;
  cursor: pointer;
  text-decoration: none;
  transition: all 200ms ease-in-out;
  &:hover,
  &:focus {
    color: #5736a3;
    background-color: transparent;
    box-shadow: 0 0 10px 0 #5736a3 inset, 0 0 10px 4px #5736a3;
    border: 3px solid #5736a3;
  }
  &.active {
    color: #5736a3;
    border-bottom: 3px solid #5736a3;
    border-radius: 50%;
  }
`;
