import styled from "styled-components";

interface LabelProps {
  color: string;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3.8125rem;
`;

export const InformationContainer = styled.div`
  display: flex;
  width: 46rem;
  flex-direction: column;
`;

export const CountGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CreatedTasks = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
`;

export const Label = styled.span<LabelProps>`
  font-family: ${({ theme }) => theme.fonts.inter.family};
  font-size: ${({ theme }) => theme.fonts.inter.size.medium};
  font-weight: ${({ theme }) => theme.fonts.inter.weight.bold};
  line-height: ${({ theme }) => theme.fonts.inter.lineHeight};
  color: ${({ color }) => color};
`;

export const Count = styled.span`
  font-family: ${({ theme }) => theme.fonts.inter.family};
  font-size: ${({ theme }) => theme.fonts.inter.size.medium};
  font-weight: ${({ theme }) => theme.fonts.inter.weight.bold};
  line-height: ${({ theme }) => theme.fonts.inter.lineHeight};
  color: ${({theme}) => theme.colors.gray_100};
  background-color: ${({ theme }) => theme.colors.gray_400};
  width: 1.5rem;
  text-align: center;
  border-radius: 8px;
`;

export const CompletedTasks = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
`;

