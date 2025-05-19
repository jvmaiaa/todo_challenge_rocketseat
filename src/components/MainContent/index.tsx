import { HeaderInput } from "../HeaderInput";
import { TaskList } from "../TaskList";
import { Task } from '../../DTO/TaskRequest';
import * as S from './styles';
import { useState } from "react";

export const MainContent = () => {
  const [tasks, setTasks] = useState<Task[]>([]);


  const handleAddTask = (taskName: string) => {
    const newTask: Task = {
    id: String(Date.now()),
    name: taskName,
    completed: false,
  };
  setTasks(prev => [...prev, newTask]);
  console.log("passou no main", tasks);
  };

  return (
    <S.Container>
      <HeaderInput 
        placeholderName="Adicione uma nova tarefa"
        namedButton="Criar"
        onAddTask={handleAddTask}
      />
      <TaskList 
        createdTasksCount={tasks.length} 
        completedTasksCount={tasks.filter(t => t.completed).length} 
        tasks={tasks} 
      />
      {/* <Menu /> */}
    </S.Container>
  );
}