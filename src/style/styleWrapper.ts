import styled from '@emotion/styled';

export const StyleWrapper = styled.div`
  .description {
    margin-bottom: 0.5rem;
    font-size: 2rem;
  }
  & > div + div {
    margin-top: 2rem;
  }
`;

export default StyleWrapper;
