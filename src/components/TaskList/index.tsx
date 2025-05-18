import * as S from './styles';
import theme from '../../styles/theme';

interface TaskListProps {
  createdTasksCount: number;
  completedTasksCount: number;
}

// interface LabelProps {
//   color: string;
// }

export const TaskList = ({createdTasksCount, completedTasksCount}: TaskListProps
) => {

  return (
    <S.Container>
      <S.InformationContainer>
        <S.CountGroup>

          <S.CreatedTasks>
            <S.Label color={theme.colors.blue}>Tarefas Criadas</S.Label>
            <S.Count>{createdTasksCount}</S.Count>
          </S.CreatedTasks>

          <S.CompletedTasks>
            <S.Label color={theme.colors.purple}>Concluídas</S.Label>
            <S.Count>{completedTasksCount}</S.Count>
          </S.CompletedTasks>

        </S.CountGroup>
      </S.InformationContainer>
    </S.Container>
  );
}