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

export const CategoryWrapper = styled.div`
  margin: 20px 0 40px 0;
`;

export const CategoryTitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const CategoryTitle = styled.h2`
  margin: 13px 15px 10px 0;
  color: #00f703;
  font-size: 24px;
  font-weight: 700;
`;

export const CategoryResultContentWrapper = styled.div`
  position: relative;
  border-radius: 4px;
  display: flex;
  justify-content: center;
`;

export const CategoryResultContent = styled.div`
  width: fit-content;
  border-radius: 4px;
  background-color: #ffffff;
`;

export const CategoryContent = styled.div`
  padding: 15px 10px;
  height: 100px;
  overflow: hidden;

  font-size: 13px;
  overflow-y: scroll;
  border-radius: 4px;
  color: #000000;
  background-color: #ffffff;

  > div {
    width: fit-content;
  }
`;

export const BackButton = styled.button`
  width: 100%;
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
