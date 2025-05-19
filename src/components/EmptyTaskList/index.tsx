import * as S from './styles';
import EmptyListIcon from '../../assets/EmptyTaskIcon.svg';

export const EmptyTaskList = () => {
  return (
    <S.Container>
      <S.ContentGroup>
        <S.ImageContainer>
          <S.LogoIcon src={EmptyListIcon} alt="Imagem de uma prancheta com uma folha em branco" />
        </S.ImageContainer>
        <S.TextGroup>
          <S.Title>Você ainda não tem tarefas cadastradas</S.Title>
          <S.Description>Crie tarefas e organize seus itens a fazer</S.Description>
        </S.TextGroup>
      </S.ContentGroup>
    </S.Container>
  );
}