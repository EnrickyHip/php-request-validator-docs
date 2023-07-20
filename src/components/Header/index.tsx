import * as Styled from './styled';
import Link from 'next/link';
import { GoVerified } from 'react-icons/go';
import { AiFillGithub } from 'react-icons/ai';
import { useThemeContext } from '@/Context';
import { ThemeMode } from '@/styles/theme';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import { ThemeTypeAction } from '@/Context/reducer';

function Header() {
  const { state, dispatch } = useThemeContext();
  const { mode } = state;

  const toggleTheme = () => dispatch({ type: ThemeTypeAction.TOGGLE_THEME });

  return (
    <Styled.HeaderContainer>
      <Styled.HeaderItem>
        <Link href="/">
          <Styled.Logo>
            <GoVerified size={30} />
            <Styled.Title>PHP Request Validator</Styled.Title>
          </Styled.Logo>
        </Link>
        <Styled.Version>1.0.0</Styled.Version>
      </Styled.HeaderItem>

      <Styled.HeaderItem>
        <a href="https://github.com/EnrickyHip/php-request-validator" target="_blank" rel="noreferrer">
          <AiFillGithub size={30} />
        </a>
        <Styled.ThemeIcon onClick={toggleTheme}>
          {mode === ThemeMode.DARK ? <BsFillMoonFill size={20} /> : <BsFillSunFill size={20} />}
        </Styled.ThemeIcon>
      </Styled.HeaderItem>
    </Styled.HeaderContainer>
  );
}

export default Header;
