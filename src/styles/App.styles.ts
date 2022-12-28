import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  height: 100vh;

  .main {
    display: flex;
    flex-direction: column;
    gap: 4rem !important;

  
    .contentContainer{
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      text-align: left;

      .textContainer {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }
    }

    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  button {
    background-color: transparent;
    color: white;
    font-weight: 500;
  }
`;