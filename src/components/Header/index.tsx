import Link from 'next/link';
import { GoVerified } from 'react-icons/go';
import { AiFillGithub } from 'react-icons/ai';
import { useThemeContext } from '@/Context/ThemeContext';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import { HeaderContainer, HeaderItem, InnerMenuItem, InnerNav, Logo, Nav, ThemeIcon, Title } from './styled';
import { Tab } from '../Layout';

interface HeaderProps {
  tab?: Tab;
}

function Header({ tab = 'docs' }: HeaderProps) {
  const { mode, toggleTheme } = useThemeContext();

  return (
    <HeaderContainer>
      <Nav>
        <HeaderItem>
          <Link href="/">
            <Logo>
              <GoVerified size={30} />
              <Title>PHP Request Validator</Title>
            </Logo>
          </Link>
        </HeaderItem>

        <HeaderItem>
          <InnerNav>
            <InnerMenuItem active={tab === 'docs'}>
              <Link href="/docs">Docs</Link>
            </InnerMenuItem>
            <InnerMenuItem active={tab === 'api'}>
              <Link href="/docs/api">API</Link>
            </InnerMenuItem>
          </InnerNav>
          <a href="https://github.com/EnrickyHip/php-request-validator" target="_blank" rel="noreferrer">
            <AiFillGithub size={30} />
          </a>
          <ThemeIcon onClick={toggleTheme}>
            {mode === 'DARK' ? <BsFillMoonFill size={20} /> : <BsFillSunFill size={20} />}
          </ThemeIcon>
        </HeaderItem>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;
