import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 2rem 0;

  .logoContainer {
    padding: 2rem 0;
  }

  button {
    background-color: transparent;
    color: white;
    font-weight: 500;
  }
`;

export const SearchInput = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.5rem;

  padding: 0 0.75rem;

  transition: 0.15s;

  &:focus-within {
    box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.15);
    border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  }


  input {
    border: 0;
    box-shadow: none;
    padding: 0.75rem 0;
    width: 100%;

    &:hover {
      box-shadow: none;
      border: 0;
    }

    &:focus{
      box-shadow: none;
      border: 0;
    }
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
    opacity: 0.5;
  }
`;