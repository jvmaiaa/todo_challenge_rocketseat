import * as S from './styles';
import theme from '../../styles/theme';
import { TaskCard } from '../TaskCard';
import { EmptyTaskList } from '../EmptyTaskList';
import { Task } from '../../DTO/TaskRequest';

interface TaskListProps {
  createdTasksCount: number;
  completedTasksCount: number;
  tasks?: Task[]; 
  onToggleTask?: (taskId: string) => void;
  onDeleteTask?: (taskId: string) => void;
}

export const TaskList = ({
  createdTasksCount,
  completedTasksCount,
  tasks = [],
  onToggleTask,
  onDeleteTask
}: TaskListProps) => {
  // const [countCompletedTasks, setCountCompletedTasks] = useState<number>(0);

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
              <S.Count>{completedTasksCount} de {createdTasksCount}</S.Count>
            </S.CompletedTasks>
          </S.CountGroup>
      </S.InformationContainer>
      
      { 
        (tasks.length === 0) 
        ? <EmptyTaskList /> 
        : tasks.map(task => (
          <TaskCard
            key={task.id}
            taskName={task.name} 
            isChecked={task.completed} 
            onToggleTask={() => onToggleTask && onToggleTask(task.id)}
            onDeleteTask={() => onDeleteTask && onDeleteTask(task.id)}
          />
        ))
      }
    </S.Container>
  );
}