import styled from '@emotion/styled';

interface ExampleBoxProps {
  size: string;
}

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 100px;
  user-select: none;
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

export const ExampleBox = styled.div<ExampleBoxProps>`
  width: ${(props) => `${props.size}px`};
  height: ${(props) => `${props.size}px`};
  background-color: #ffffff;
  border-radius: 4px;
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
