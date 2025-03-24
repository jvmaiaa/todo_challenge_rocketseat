import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.gray_500};
  max-width: 100%;
  height: 12.5rem;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
`;

export const LogoHeader = styled.img`
  width: 100px;
`;

export const TextHeader = styled.div`
  width: 100px;
`;




