import styled from '@emotion/styled';
import color from '../../../style/color';

export const Container = styled.main`
  margin: 0 auto;
  margin-top: 70px;
  padding-bottom: 150px;
  width: 510px;
  color: ${color.white};
  user-select: none;
`;

export const Title = styled.h1`
  margin: 0;
  margin-bottom: 5px;
  font-size: 72px;
  font-weight: 700;
  text-align: center;
`;

export const Description = styled.p`
  margin: 0;
  font-size: 36px;
  text-align: center;
`;

export const ContentWrapper = styled.div`
  margin: 40px 0;
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ButtonWrapper = styled.div`
  margin: 0 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BackButton = styled.button`
  width: 48%;
  height: 68px;

  border-radius: 4px;
  font-size: 32px;
  background-color: ${color.white};
  transition: all 0.5s;
  outline: none;
  border: none;

  :active {
    transform: scale(0.95);
  }
`;

export const ResultButton = styled.button`
  width: 48%;
  height: 68px;

  border-radius: 4px;
  font-size: 32px;
  color: ${color.white};
  background-color: ${color.green};
  transition: all 0.5s;
  outline: none;
  border: none;

  :active {
    transform: scale(0.95);
  }
`;

export const Copyright = styled.p`
  margin-top: 10px;
  text-align: center;
  font-size: 18px;
  word-spacing: 10px;
  letter-spacing: 3px;
`;

export const ATag = styled.a`
  border-bottom: 2px solid ${color.green};
`;
