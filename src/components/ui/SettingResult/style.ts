import styled from '@emotion/styled';

export const Container = styled.div`
  padding-top: 20px;
  padding-left: 15px;
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

export const CheckBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 70px;
`;

export const CheckBox = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;

  background-color: #ffffff;
  border-radius: 4px;
`;

export const Check = styled.div`
  width: 20px;
  height: 20px;

  background-color: #00f703;
  border-radius: 4px;
`;

export const CheckTitle = styled.span`
  color: #ffffff;
  font-size: 24px;
`;
