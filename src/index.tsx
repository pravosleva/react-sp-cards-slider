import React, { useRef, useState, useEffect, useMemo } from "react";
import styled, { css } from "styled-components";
// import styles from "./styles.css";
import { AbsoluteDesktopArrow } from "./components/arrows";
import { ChevronLeftIcon, ChevronRightIcon } from "./components/svg";
import { useWindowSize } from "./utils/useWindowSize";

const Wrapper = styled("div")`
  font-family: Fira Sans, sans-serif;
`;
interface ITitle {
  breakpoints: {
    lg: number;
  };
}
const Title = styled("div")<ITitle>`
  font-family: Fira Sans, sans-serif;
  font-style: normal;
  font-weight: 600;

  ${({ breakpoints }) =>
    breakpoints.lg &&
    css`
      @media (max-width: ${breakpoints.lg}px) {
        font-size: 20px;
        line-height: 24px;
        margin-bottom: 30px;
        margin-top: 60px;
        padding-left: 20px;
      }
      @media (min-width: ${breakpoints.lg + 1}px) {
        font-size: 24px;
        line-height: 30px;
        margin-bottom: 30px;
        margin-top: 70px;
      }
    `}
`;
const Body = styled("div")`
  position: relative;
`;

type TScrollArea = {
  itemsPadding: number;
  minItemWidth: number;
  breakpoints: {
    lg: number;
  };
};
const ScrollArea = styled("div")<TScrollArea>`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  & a {
    text-decoration: none;
    color: inherit;
    ${({ minItemWidth }) =>
      minItemWidth &&
      css`
        min-width: ${minItemWidth}px;
      `}
  }
  // flex-wrap: nowrap;
  ${({ breakpoints, itemsPadding }) =>
    breakpoints.lg &&
    itemsPadding &&
    css`
      @media (min-width: ${breakpoints.lg + 1}px) {
        overflow-x: hidden;
        & > a:not(:last-child) {
          margin-right: ${itemsPadding}px;
        }
      }
      @media (max-width: ${breakpoints.lg}px) {
        overflow-x: auto;
        max-width: 100vw;
        padding: 0 20px 0 20px;
        & > a {
          margin-right: ${itemsPadding}px;
        }
      }
    `}
`;
interface IMobileLastEmptyBox {
  breakpoints: {
    lg: number;
  };
}
const MobileLastEmptyBox = styled("div")<IMobileLastEmptyBox>`
  border: 1px solid transparent;
  ${({ breakpoints }) =>
    breakpoints.lg &&
    css`
      @media (min-width: ${breakpoints.lg + 1}px) {
        display: none;
      }
    `}
`;
interface IItem {
  id?: any;
  [key: string]: any;
}
interface IProps {
  title?: string;
  items: any[];
  step?: number;
  itemRenderer: React.FC<IItem>;
  itemWidth?: number;
  itemsPadding?: number;
  mainWidthLimit?: number;
  breakpoints?: {
    lg: number;
  };
}
export const ReactSPCardsSlider = ({
  title,
  items = [],
  step = 1,
  itemRenderer,
  itemWidth = 265,
  itemsPadding = 23,
  mainWidthLimit = 1136,
  breakpoints = { lg: 768 },
}: IProps) => {
  const scrollAreaRef = useRef<HTMLHeadingElement>(null);
  const [currentStep, setCurrentStep] = useState(0);
  useEffect(() => {
    if (!!scrollAreaRef?.current) {
      // scrollAreaRef.current.scrollLeft = (itemWidth + itemsPadding) * (currentStep)
      scrollAreaRef.current.scrollTo({
        left: (itemWidth + itemsPadding) * currentStep,
        behavior: "smooth",
      });
    }
  }, [currentStep]);
  const limitPoint = useMemo(() => Math.floor(mainWidthLimit / (itemWidth + itemsPadding)) + 1, [
    itemWidth,
    itemsPadding,
    mainWidthLimit,
  ]);
  const handleStepInc = () => {
    // console.log(Math.floor(1136/(itemWidth + itemsPadding)) + 1)
    setCurrentStep((s: number) => (s < items.length - 1 - (limitPoint - 1) ? s + step : 0));
  };
  const handleStepDec = () => {
    setCurrentStep((s: number) => (s >= 0 ? s - step : items.length - 1 - (limitPoint - 1)));
  };
  const { isMobile } = useWindowSize(breakpoints);
  const isNextBtnDisabled = useMemo(
    () => items.length <= 4 || currentStep >= items.length - 1 - (limitPoint - 1) || isMobile,
    [currentStep, items.length, isMobile]
  );
  const isPrevBtnDisabled = useMemo(() => currentStep === 0 || isMobile, [currentStep, items, isMobile]);

  return (
    <Wrapper>
      {!!title && <Title breakpoints={breakpoints}>{title}</Title>}
      <Body>
        <ScrollArea
          breakpoints={breakpoints}
          ref={scrollAreaRef}
          itemsPadding={itemsPadding}
          // desktopBodyWidth={items.length * (itemWidth + itemsPadding) + itemsPadding}
          minItemWidth={itemWidth}
        >
          {items.map((itemProps: IItem, i: number) => {
            const key = itemProps.id || i;

            return <React.Fragment key={key}>{itemRenderer({ ...itemProps, __id: key, itemWidth })}</React.Fragment>;
          })}
          <MobileLastEmptyBox breakpoints={breakpoints} />
        </ScrollArea>
        {!isPrevBtnDisabled && (
          <AbsoluteDesktopArrow isLeft onClick={handleStepDec}>
            <ChevronLeftIcon />
          </AbsoluteDesktopArrow>
        )}
        {!isNextBtnDisabled && (
          <AbsoluteDesktopArrow isRight onClick={handleStepInc}>
            <ChevronRightIcon />
          </AbsoluteDesktopArrow>
        )}
      </Body>
    </Wrapper>
  );
};

export default ReactSPCardsSlider;
