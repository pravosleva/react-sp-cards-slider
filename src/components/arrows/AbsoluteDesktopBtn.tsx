import styled, { css } from "styled-components";
// import { lg } from '~/common/styled-mui/theme';

const lg = 768;

export interface IAbsoluteArrowProps {
  isRight?: boolean;
  isLeft?: boolean;
}
export const AbsoluteDesktopArrow = styled("button")<IAbsoluteArrowProps>`
  cursor: pointer;
  outline: none;
  border: none;
  width: 60px;
  height: 60px;
  border-radius: 14px;
  background-color: #eef1f3;

  position: absolute;
  top: 50%;
  ${({ isRight }) =>
    isRight &&
    css`
      right: 0;
      transform: translateY(-50%) translateX(150%);
    `}
  ${({ isLeft }) =>
    isLeft &&
    css`
      left: 0;
      transform: translateY(-50%) translateX(-150%);
    `}
  &:disabled {
    opacity: 0.5;
  }

  @media (max-width: ${lg}px) {
    display: none;
  }

  display: flex;
  justify-content: center;
  align-items: center;
`;
