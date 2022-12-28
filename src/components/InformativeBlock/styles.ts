import styled from "styled-components";

interface InformativeBlockProps {
  color?: string;
}

export const Main = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: space-between;
  align-items: center;

  background-color: ${({color}:InformativeBlockProps) => color};
  width: 100%;
  padding: 2rem 2.25rem;
  border-radius: 0.5rem;

  box-shadow: 0px 6px 1rem rgba(0, 0, 0, 0.15);

  .pictureContainer {
    img {
      width: 15rem;
    }
  }
  
  .textContainer {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: white;

    .buttonContainer {
      display: flex;
      flex-direction: row;
      gap: 0.5rem;
      width: 100%;

      a {
        text-decoration: none;
      }

      button {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        width: auto;
      }
    }
    
    h1 {
      font-weight: 600;
      font-size: 2.5rem;
    }
  }
`;