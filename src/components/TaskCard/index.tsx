import { useState } from 'react';
import * as S from './styles';

interface TaskCardProps {
  taskName: string;
  isChecked: boolean;
  onToggle: () => void;
}

export const TaskCard = ({taskName, isChecked, onToggle}: TaskCardProps) => {

  return (
    <S.Container>
      <S.ContentTaskGroup>
        <S.TaskInfoGroup>
          <S.CheckWrapper onClick={onToggle}>
            { isChecked 
              ? (<S.CheckIcon />) 
              : (<S.Circle />)
            }
          </S.CheckWrapper>
          <S.TaskName isChecked={isChecked}>
            {taskName}
          </S.TaskName>
        </S.TaskInfoGroup>
  
        <S.DeleteIcon />
      </S.ContentTaskGroup>
    </S.Container>
  );
}