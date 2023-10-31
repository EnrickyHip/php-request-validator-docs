import React, { useEffect } from 'react';
import { CodeContainer } from './styled';
import Prism from 'prismjs';
import 'prismjs/components/prism-markup-templating.js';
import 'prismjs/components/prism-php';

export interface Props {
  language: React.ReactNode;
  children: string;
}

function Code({ children, language }: Props) {
  const className = 'language-' + language;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      Prism.highlightAll();
    }
  }, []);

  return (
    <CodeContainer>
      <pre className={className}>
        <code className={className}>{children}</code>
      </pre>
    </CodeContainer>
  );
}

export default Code;
