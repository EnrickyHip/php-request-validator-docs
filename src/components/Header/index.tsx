import React from 'react';
import * as Styled from './styled';
import Link from 'next/link';
import { GoVerified } from 'react-icons/go';
import { AiFillGithub } from 'react-icons/ai';

function Header() {
  return (
    <Styled.HeaderContainer>
      <Styled.HeaderItem>
        <Link href={'/'}>
          <Styled.Logo>
            <GoVerified size={30} />
            <Styled.Title>PHP Request Validator</Styled.Title>
          </Styled.Logo>
        </Link>
        <Styled.Version>1.0.0</Styled.Version>
      </Styled.HeaderItem>

      <Styled.HeaderItem>
        <Link href="https://github.com/EnrickyHip/php-request-validator" target="_blank">
          <AiFillGithub size={30} />
        </Link>
      </Styled.HeaderItem>
    </Styled.HeaderContainer>
  );
}

export default Header;
