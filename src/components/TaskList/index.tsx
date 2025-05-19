import * as S from './styles';
import theme from '../../styles/theme';
import { TaskCard } from '../TaskCard';
import { EmptyTaskList } from '../EmptyTaskList';
import { Task } from '../../DTO/TaskRequest';

interface TaskListProps {
  createdTasksCount: number;
  completedTasksCount: number;
  tasks?: Task[]; 
}

export const TaskList = ({createdTasksCount, completedTasksCount, tasks = []}: TaskListProps) => {
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
      
      { 
        (tasks.length === 0) 
        ? <EmptyTaskList /> 
        : tasks.map(task => (
          <TaskCard key={task.id}taskName={task.name} />
        ))
      }
    </S.Container>
  );
}