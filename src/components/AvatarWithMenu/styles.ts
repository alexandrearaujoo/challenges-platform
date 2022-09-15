import styled from "styled-components";
import * as DropDownMenu from "@radix-ui/react-dropdown-menu";

export const ContainerTriggrer = styled(DropDownMenu.Trigger)`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  border: 2px solid ${({ theme }) => theme.text};
  transition: 0.5s;

  :hover {
    border-color: ${({ theme }) => theme.primary};
  }
`;

export const Content = styled(DropDownMenu.Content)`
  background-color: ${({ theme }) => theme.shape};
  box-shadow: 0 10px 30px -10px ${({ theme }) => theme.shadow};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 0;
  border-radius: 0.3rem;
`;

export const DropDownItem = styled(DropDownMenu.Item)`
  padding: 0 1rem;
  cursor: pointer;
`;

export const DropDownArrow = styled(DropDownMenu.Arrow)`
  fill: ${({ theme }) => theme.shape};
`;
