  import { useState } from 'react';
import * as S from './styles';

interface HeaderInputProps {
  placeholderName: string;
  namedButton: string;
  onAddTask: (taskName: string) => void;
}

export const HeaderInput = ({ placeholderName, namedButton, onAddTask }: HeaderInputProps) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddTask(input.trim());
    setInput("");
  }

  return (
    <S.Container as="form" onSubmit={handleSubmit} >
      <S.InputNameTask 
        placeholder={placeholderName}
        value={input}
        onChange={(e) => setInput(e.target.value)}/>
      <S.ButtonCreateTaskContainer type="submit" >
        <S.ButtonCreateTaskText>{namedButton}</S.ButtonCreateTaskText>
        <S.ButtonCreateTaskIcon />
      </S.ButtonCreateTaskContainer>
    </S.Container>
  );
}