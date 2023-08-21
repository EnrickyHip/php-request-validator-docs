import Link from 'next/link';
import { GoVerified } from 'react-icons/go';
import { AiFillGithub } from 'react-icons/ai';
import { useThemeContext } from '@/Context';
import { ThemeMode } from '@/styles/theme';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import { ThemeTypeAction } from '@/Context/reducer';
import { HeaderContainer, HeaderItem, Logo, ThemeIcon, Title } from './styled';

function Header() {
  const { state, dispatch } = useThemeContext();
  const { mode } = state;

  const toggleTheme = () => dispatch({ type: ThemeTypeAction.TOGGLE_THEME });

  return (
    <HeaderContainer>
      <HeaderItem>
        <Link href="/">
          <Logo>
            <GoVerified size={30} />
            <Title>PHP Request Validator</Title>
          </Logo>
        </Link>
      </HeaderItem>

      <HeaderItem>
        <a href="https://github.com/EnrickyHip/php-request-validator" target="_blank" rel="noreferrer">
          <AiFillGithub size={30} />
        </a>
        <ThemeIcon onClick={toggleTheme}>
          {mode === ThemeMode.DARK ? <BsFillMoonFill size={20} /> : <BsFillSunFill size={20} />}
        </ThemeIcon>
      </HeaderItem>
    </HeaderContainer>
  );
}

export default Header;
