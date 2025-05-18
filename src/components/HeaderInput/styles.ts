import styled from "styled-components";
import { PlusCircleIcon } from '@phosphor-icons/react';


export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  /* width: 46rem; */
  height: 3.375rem;
  margin-top: -1.7rem;
`;

export const InputNameTask = styled.input`
  width: 39.875rem;
  background-color: ${({theme}) => theme.colors.gray_500};
  border-radius: 8px;
  outline: none;
  border: none;   
  padding-left: 1rem;
  color: ${({theme}) => theme.colors.gray_100};
`;

export const ButtonCreateTaskContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5.625rem;
  height: 3.25rem;
  background-color: ${({theme}) => theme.colors.blueDark};
  border-radius: 8px;
  border: none;
  gap: 0.5rem;
  cursor: pointer;
`;

export const ButtonCreateTaskText = styled.p`
  color: ${({theme}) => theme.colors.gray_100};
  font-family: ${({theme}) => theme.fonts.inter.family};
  font-size: ${({theme}) => theme.fonts.inter.size.large};
  font-weight: ${({theme}) => theme.fonts.inter.weight.bold};
  line-height: ${({theme}) => theme.fonts.inter.lineHeight};
`;

export const ButtonCreateTaskIcon = styled(PlusCircleIcon).attrs({
  weight: 'regular',
})`
  color: ${({theme}) => theme.colors.gray_100}; 
  font-size: 1.2rem;
`;