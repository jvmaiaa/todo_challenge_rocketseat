import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 15.25rem;
`;

export const ContentGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 46rem;
  height: 100%;
  border-radius: 8px;
  border-top: 2px solid ${({ theme }) => theme.colors.gray_400};
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 4rem;
  /* overflow: hidden;
  object-fit: cover; */
  // tag para nõa vazar imagem
  /* outline: auto; */
`;

export const LogoIcon = styled.img`
  width: 3.5rem;
`;

export const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  margin: 1rem;
`;  

export const Title = styled.span`
  font-family: ${({ theme }) => theme.fonts.inter.family};
  font-size: ${({ theme }) => theme.fonts.inter.size.large};
  font-weight: ${({ theme }) => theme.fonts.inter.weight.bold};
  color: ${({ theme }) => theme.colors.gray_300};
`;

export const Description = styled.span`
  font-family: ${({ theme }) => theme.fonts.inter.family};
  font-size: ${({ theme }) => theme.fonts.inter.size.large};
  font-weight: ${({ theme }) => theme.fonts.inter.weight.regular};
  color: ${({ theme }) => theme.colors.gray_300};
`;