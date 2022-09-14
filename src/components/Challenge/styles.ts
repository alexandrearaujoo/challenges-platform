import { rgba } from "polished";
import styled from "styled-components";

interface Props {
  difficulty: "Easy" | "Medium" | "Hard";
}

const difficultyColors = {
  Easy: "primary",
  Medium: "orange",
  Hard: "red",
} as const;

export const Container = styled.a`
  width: 100%;
  background-color: ${({ theme }) => theme.shape};
  padding: 2rem 1.5rem;
  border-radius: 5px;
  transition: 0.5s;
  border: 0.5px solid transparent;

  header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > svg {
      font-size: 1.5rem;
      transition: 0.5s;
    }
  }

  :hover {
    transform: translateY(-0.5rem);
    border-color: ${({ theme }) => rgba(theme.primary, 0.5)};
    box-shadow: 0 3px 9px 3px ${({ theme }) => rgba(theme.primary, 0.05)};

    svg {
      color: ${({ theme }) => theme.primary};
    }
  }
`;

export const DifficultyTag = styled.span<Props>`
  background-color: ${({ theme, difficulty }) =>
    theme[difficultyColors[difficulty]]};
  color: ${({ theme }) => theme.background};
  font-family: "Fira Code";
  padding: 0.15rem 0.8rem;
  border-radius: 3px;
`;

export const H3 = styled.h3`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.title};
  margin-top: 1.2rem;
`;

export const P = styled.p`
  margin-top: 0.5rem;
  font-size: 0.95rem;
`;

export const TagsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 1rem;
`;

export const TagItem = styled.button`
  color: ${({ theme }) => theme.text};
  font-size: 0.9rem;
  background: none;
  border: none;
  opacity: 0.7;
  font-family: 'Fira Code';
  transition: 0.5s;

  :hover {
    color: ${({theme}) => theme.primary};
    opacity: 1;
  }
`;
