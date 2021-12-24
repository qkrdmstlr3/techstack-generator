import styled from '@emotion/styled';
import color from '../../../style/color';

export const Container = styled.div`
  position: relative;
  user-select: none;
`;

export const Title = styled.h2`
  position: absolute;
  margin: 0;
  top: 0;
  left: 0;

  color: ${color.white};
  font-size: 24px;
  font-weight: 700;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding-top: 20px;
  width: 170px;
  color: ${color.white};
`;

export const Opperation = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${color.none};
  border: none;
  color: ${color.white};
  font-size: 48px;
  cursor: pointer;
`;

export const Number = styled.span`
  display: flex;
  justify-content: center;
  width: 30px;
  font-size: 50px;
`;
