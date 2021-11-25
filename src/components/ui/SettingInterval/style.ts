import styled from '@emotion/styled';

interface LineProps {
  width: string;
}

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 100px;
  user-select: none;
`;

export const IconWrapper = styled.header`
  position: absolute;
  top: 5px;
  left: 185px;

  &:hover div {
    visibility: visible;
  }
`;

export const ToolTip = styled.div`
  position: absolute;
  bottom: 5px;
  left: 20px;
  width: fit-content;
  visibility: hidden;
  padding: 5px;
  width: 160px;
  background-color: black;
  color: #00f703;
  text-align: center;
  border-radius: 6px;
  font-size: 18px;
`;

export const Title = styled.h2`
  position: absolute;
  margin: 0;
  top: 0;
  left: 0;

  color: #ffffff;
  font-size: 24px;
  font-weight: 700;
`;

export const ExampleBox = styled.div`
  width: 120px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Bar = styled.div`
  width: 8px;
  height: 60px;
  border-radius: 4px;
  background-color: #ffffff;
`;

export const Line = styled.div<LineProps>`
  width: ${(props) => props.width}px;
  border: 1px dashed #ffffff;
`;

export const Range = styled.input`
  width: 350px;
  height: 4px;
  margin-right: 60px;
  -webkit-appearance: none;

  background-color: #ffffff;
  outline: none;
  border: none;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #00f703;
    cursor: pointer;
  }
  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #00f703;
    cursor: pointer;
    border: none;
  }
`;
