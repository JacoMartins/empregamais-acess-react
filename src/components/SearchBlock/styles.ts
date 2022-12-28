import styled from "styled-components";

interface BlockColorProps {
  bgColor?: string;
  fColor?: string;
  isColorful?: boolean;
  isAvailable?: boolean;
}

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;

  width: 14.375rem;
  height: 14.375rem;
  padding: 1rem 1.125rem;

  @media screen and (max-width: 720px) {
    width: 12rem;
    height: 12rem;
  }

  background-color: ${({ bgColor }: BlockColorProps) => bgColor};
  border-radius: 0.5rem;

  color: ${({ fColor }: BlockColorProps) => fColor};
  
  overflow: hidden;
  
  box-shadow: 0px 3px 0.75rem rgba(0, 0, 0, 0.15);
  
  transition: 0.15s;

  cursor: ${({ isAvailable }: BlockColorProps) => isAvailable ? `pointer` : `normal`};

  &:hover {
    ${({ isAvailable }: BlockColorProps) => isAvailable &&
    `
      filter: brightness(1.1);
      box-shadow: 0px 6px 1rem rgba(0, 0, 0, 0.25);
    `}
  }

  &:active {
    filter: brightness(1);
    box-shadow: 0px 3px 0.75rem rgba(0, 0, 0, 0.25);
  }
  
  .title {
    h3 {
      font-size: 1.5rem;
      font-weight: 500;
      letter-spacing: -0.0875rem;
    }

    span {
      font-size: 1rem;
      font-weight: 300;
    }
  }

  img {
    width: 8rem;
    rotate: 25deg;
    margin-left: 6.875rem;

    z-index: 1;

    filter: ${({ isColorful }: BlockColorProps) => isColorful ? `saturate(1)` : `saturate(0)`};
    mix-blend-mode: ${({ isColorful }: BlockColorProps) => isColorful ? `normal` : `luminosity`};

    user-select: none;

    @media screen and (max-width: 720px) {
      width: 6rem;
      height: 6rem;
      margin-left: 6rem;
    }
  }

  svg {
    width: 8rem;
    height: 8rem;
    rotate: 25deg;
    margin-left: 7rem;

    z-index: 1;

    filter: saturate(0);
    mix-blend-mode: luminosity;
    opacity: 0.5;
    user-select: none;

    @media screen and (max-width: 720px) {
      width: 6rem;
      height: 6rem;
      margin-left: 6rem;
    }
  }
`;