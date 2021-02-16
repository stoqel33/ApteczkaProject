import React from "react";
import styled from "styled-components";

const StyledBurger = styled.button`
  position: relative;
  width: 2.5rem;
  height: 2.5rem;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  background: transparent;
  border: none;
  cursor: pointer;

  div {
    width: 2.5rem;
    height: 0.3rem;
    background: ${({ theme }) => theme.lightmode.colors.secondary};
    border-radius: 0.1rem;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const Burger = ({ open }) => (
  <StyledBurger open={open}>
    <div />
    <div />
    <div />
  </StyledBurger>
);

export default Burger;
