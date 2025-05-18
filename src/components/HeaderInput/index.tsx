  import * as S from './styles';


interface HeaderInputProps {
  placeholderName: string;
  // placeHolderButton: string;
  namedButton: string;
}

export const HeaderInput = ({ placeholderName, namedButton }: HeaderInputProps) => {
  return (
    <S.Container>
      <S.InputNameTask placeholder={placeholderName} />
      <S.ButtonCreateTaskContainer>
        <S.ButtonCreateTaskText>{namedButton}</S.ButtonCreateTaskText>
        <S.ButtonCreateTaskIcon />
      </S.ButtonCreateTaskContainer>
    </S.Container>
  );
}