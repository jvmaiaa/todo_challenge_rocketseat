import * as S from  './styles';
import logo from '../../assets/Logo.svg';
export const Header = () => {
  return (
    <S.HeaderContainer>
      <S.LogoContainer>
        <S.LogoHeader src={logo} alt="logo" />
      </S.LogoContainer>
    </S.HeaderContainer>
  );
}