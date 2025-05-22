import * as S from './styles';

interface TaskCardProps {
  taskName: string;
  isChecked: boolean;
  onToggleTask: () => void;
  onDeleteTask?: () => void;
}

export const TaskCard = ({taskName, isChecked, onToggleTask, onDeleteTask}: TaskCardProps) => {

  return (
    <S.Container>
      <S.ContentTaskGroup>
        <S.TaskInfoGroup>
          <S.CheckWrapper onClick={onToggleTask}>
            { isChecked 
              ? (<S.CheckIcon />)
              : (<S.Circle />)
            }
          </S.CheckWrapper>
          <S.TaskName isChecked={isChecked}>
            {taskName}
          </S.TaskName>
        </S.TaskInfoGroup>
  
        <S.DeleteIcon onClick={onDeleteTask} />
      </S.ContentTaskGroup>
    </S.Container>
  );
}