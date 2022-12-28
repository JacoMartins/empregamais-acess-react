import styled from "styled-components";

interface SidebarProps {
  isSelected: boolean;
}

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 19.375rem;
  height: 100vh;
  padding: 0.75rem;

  box-shadow: 0px 0px 1rem rgba(0, 0, 0, 0.25);

  .navContainer {
    .logoContainer {
      padding: 1.75rem;
  
      img {
        width: 9rem;
      }
    }
    ul {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      
      li {
        list-style: none;
  
        a {
          text-decoration: none;
        }
      }
    }

  }

  .footerContainer {
    width: 100%;
    text-align: center;
    a {
      font-size: 0.875rem;
      font-weight: 500;
      opacity: 0.5;
    }
  }
`;

export const NavButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  gap: 1rem;

  width: 100%;
  text-align: left;
  padding: 0.75rem 1.125rem ;

  font-weight: ${({isSelected}:SidebarProps) => isSelected ? 600 : 400};
  
  color: var(--blue-250);

  opacity: ${({isSelected}:SidebarProps) => isSelected ? 1 : 0.5};
  border-radius: 0.5rem;
  border: 0;
  background-color: ${({isSelected}:SidebarProps) => isSelected ? 'rgba(42, 95, 186, 0.25)' : 'transparent'};

  transition: 0.1s;
  
  &:hover {
    background-color: rgba(42, 95, 186, 0.15);
  }
  /* svg {
    width: 1.75rem;
    height: 1.75rem;
  } */
`;