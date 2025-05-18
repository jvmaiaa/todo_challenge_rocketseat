import { HeaderInput } from "../HeaderInput";
import { TaskList } from "../TaskList";
import * as S from './styles';

export const MainContent = () => {
  return (
    <S.Container>
      <HeaderInput placeholderName="Adicione uma nova tarefa" namedButton="Criar"/>
      <TaskList createdTasksCount={0} completedTasksCount={0} />
      {/* <Menu /> */}
    </S.Container>
  );
}