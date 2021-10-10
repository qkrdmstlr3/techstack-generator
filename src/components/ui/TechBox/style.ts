import styled from '@emotion/styled';

interface SelectedProps {
  selected: boolean;
}

export const Container = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
`;

export const Wrapper = styled.div<SelectedProps>`
  width: ${(props) => (props.selected ? '85px' : '100px')};
  height: ${(props) => (props.selected ? '85px' : '100px')};
  border-radius: 4px;
  background-color: #ffffff;
  transition: all 2s;

  /* :active {
    width: ${(props) => (props.selected ? '80px' : '100px')};
    height: ${(props) => (props.selected ? '80px' : '100px')};
  } */
`;

export const Cover = styled.div<SelectedProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: ${(props) => (props.selected ? '85px' : '100px')};
  height: ${(props) => (props.selected ? '85px' : '100px')};

  background-color: #253237;
  opacity: ${(props) => (props.selected ? 0.7 : 0)};
  transition: all 0.3s;
  border-radius: 4px;
  cursor: pointer;

  :active {
    transform: scale(0.9);
  }
`;

export const NumberWrapper = styled.div`
  position: absolute;
  top: 5px;
  left: 5px;
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 12.5px;
  background-color: #00f703;
`;

export const Number = styled.span`
  color: #ffffff;
  font-weight: bold;
  user-select: none;
`;
