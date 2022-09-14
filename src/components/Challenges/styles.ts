import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  margin-top: 3rem;
  padding: 0 1rem;

  > h2 {
    font-size: 2rem;
    color: ${({ theme }) => theme.title};
    margin-bottom: 2rem;
  }

`;

export const Div = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
  gap: 1rem;
`;
