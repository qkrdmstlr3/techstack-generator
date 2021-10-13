import styled from '@emotion/styled';

export const Container = styled.main`
  margin: 0 auto;
  margin-top: 70px;
  width: 510px;
  color: #ffffff;
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
  background-color: #ffffff;
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
  color: #ffffff;
  background-color: #00f703;
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
