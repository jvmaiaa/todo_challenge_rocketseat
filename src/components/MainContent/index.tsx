import { HeaderInput } from "../HeaderInput";
import { TaskList } from "../TaskList";
import { Task } from '../../DTO/TaskRequest';
import * as S from './styles';
import { useState } from "react";

export const MainContent = () => {
  const [taskList, setTasks] = useState<Task[]>([]);

  // Adiciona um nova tarefa
  const handleAddTask = (taskName: string) => {
    const newTask: Task = {
    id: String(Date.now()),
    name: taskName,
    completed: false,
  };
  console.log(newTask);
  // Add the new task to the tasks state
  setTasks(prev => [...prev, newTask]);
  };

  // Função para marcar a tarefa como concluída.
  const handleToggleTask = (taskId: string) => {
    const updatedTasks = taskList.map((task) => {
      if (task.id === taskId) {
        return {...task, completed: !task.completed};
      }
      return task;
    });

    setTasks(updatedTasks);
  };

  return (
    <S.Container>
      <HeaderInput
        placeholderName="Adicione uma nova tarefa"
        namedButton="Criar"
        onAddTask={handleAddTask}
      />
      <TaskList 
        createdTasksCount={taskList.length} 
        completedTasksCount={taskList.filter(t => t.completed).length} 
        tasks={taskList}
        onToggleTask={handleToggleTask}
      />
      {/* <Menu /> */}
    </S.Container>
  );
}