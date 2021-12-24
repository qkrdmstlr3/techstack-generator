import styled from '@emotion/styled';
import color from '../../../style/color';

interface SelectedProps {
  selected: boolean;
}

export const Wrapper = styled.div<SelectedProps>`
  position: relative;
  width: ${(props) => (props.selected ? '85px' : '100px')};
  height: ${(props) => (props.selected ? '85px' : '100px')};
  transition: 0.5s all;
  cursor: pointer;

  :active {
    transform: ${(props) => (props.selected ? 'scale(0.9)' : 'scale(1.1)')};
  }
`;

export const ImageWrapper = styled.div<SelectedProps>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${color.white};
  border-radius: 4px;
  opacity: ${(props) => (props.selected ? '0.7' : '1')};
`;

export const Image = styled.img`
  width: 95%;
  height: 95%;
`;

export const NumberWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.7;

  font-size: 24px;
  border-radius: 25px;
  background-color: ${color.green};
`;

export const Number = styled.span`
  color: ${color.white};
  font-weight: bold;
  user-select: none;
`;
