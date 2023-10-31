import React from 'react';
import { CopyrightDiv, FooterContainer, FooterLinks } from './styled';
import Link from 'next/link';

export interface Props {
  children: React.ReactNode;
}

function Footer() {
  return (
    <FooterContainer>
      <FooterLinks>
        <ul>
          <h3>Documentation</h3>
          <li>
            <Link href="/docs/introduction">Getting Started</Link>
          </li>
          <li>
            <Link href="/docs/introduction">Getting Started</Link>
          </li>
          <li>
            <Link href="/docs/introduction">Getting Started</Link>
          </li>
        </ul>
        <ul>
          <h3>API</h3>
          <li>
            <Link href="/api">Getting Started</Link>
          </li>
          <li>
            <Link href="/api">Getting Started</Link>
          </li>
          <li>
            <Link href="/api">Getting Started</Link>
          </li>
        </ul>
        <ul>
          <h3>More</h3>
          <li>
            <a href="https://github.com/EnrickyHip/php-request-validator" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </li>
        </ul>
      </FooterLinks>
      <CopyrightDiv>Copyright © 2023 Enricky Hipólito</CopyrightDiv>
    </FooterContainer>
  );
}

export default Footer;
