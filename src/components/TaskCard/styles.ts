import { CheckCircle, TrashIcon } from '@phosphor-icons/react';
import styled, { css } from 'styled-components';

interface CheckProps {
  isChecked: boolean;
}

export const Container = styled.div`
  display: flex;
  border-radius: 0.5rem;
  width: 100%;
  height: 4rem;
  justify-content: center;
`;

export const ContentTaskGroup = styled.div`
  display: flex;
  align-items: center;
  width: 46rem;  /* padding: 1.5rem; */
  gap: 0.5rem;
  background-color: ${({ theme }) => theme.colors.gray_500};
  border-radius: 8px;
  justify-content: space-between;
`;

export const TaskInfoGroup = styled.div`
  display: flex;
  gap: 0.75rem;
  padding-left: 1rem;
`;

export const CheckWrapper = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Circle = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.blue};
`;

export const CheckIcon = styled(CheckCircle)`
  color: ${({ theme }) => theme.colors.gray_100};
  background-color: ${({ theme }) => theme.colors.purple};
  border-radius: 50%;
  width: 100%;
  height: 100%;
`;

export const TaskName = styled.div<CheckProps>`
  color: ${({ theme }) => theme.colors.gray_100};


  ${({ isChecked }) =>
    isChecked &&
    css`
      text-decoration: line-through;
      color: ${({ theme }) => theme.colors.gray_300};
    `}
`;

export const DeleteIcon = styled(TrashIcon)`
  color: ${({ theme }) => theme.colors.gray_100};
  margin-right: 1rem;

  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.danger};
  }
`;