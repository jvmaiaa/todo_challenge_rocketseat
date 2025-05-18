import { HeaderInput } from "../HeaderInput";
import * as S from './styles';

export const MainContent = () => {
  return (
    <S.Container>
      <HeaderInput placeholderName="Adicione uma nova tarefa" namedButton="Criar"/>
      {/* <Menu /> */}
    </S.Container>
  );
}