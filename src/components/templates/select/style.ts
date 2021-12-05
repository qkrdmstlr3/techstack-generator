import styled from '@emotion/styled';

export const Container = styled.main`
  margin: 0 auto;
  margin-top: 70px;
  padding-bottom: 150px;
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

export const TechStackList = styled.ul`
  padding: 0;
  display: flex;
  /* justify-content: space-between; */
  flex-wrap: wrap;
  list-style: none;
  gap: 36px;
`;

export const TechStackItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  /* margin: 0 5px 30px 5px; */
`;

export const SettingButton = styled.button`
  width: 100%;
  height: 68px;
  margin: 30px 5px 0 5px;

  border: none;
  border-radius: 4px;
  font-size: 32px;
  background-color: #ffffff;
  transition: all 0.5s;
  outline: none;

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
  border-bottom: 2px solid #00f703;
`;
