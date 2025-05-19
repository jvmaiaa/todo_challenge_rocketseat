import { HeaderInput } from "../HeaderInput";
import { TaskList } from "../TaskList";
import { Task } from '../../DTO/TaskRequest';
import * as S from './styles';
import { useState } from "react";

interface TaskProps {
  task: Task[];
}

export const MainContent = () => {
  const [tasks, setTasks] = useState<TaskProps[]>([])

  return (
    <S.Container>
      <HeaderInput placeholderName="Adicione uma nova tarefa" namedButton="Criar"/>
      <TaskList createdTasksCount={0} completedTasksCount={0} />
      {/* <Menu /> */}
    </S.Container>
  );
}