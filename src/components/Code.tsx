import React, { CSSProperties } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { anOldHope } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

export interface Props {
  language: string;
  children: string;
}

function Code({ children, language }: Props) {
  const style: CSSProperties = {
    borderRadius: '5px',
    fontSize: '15px',
    padding: '20px',
    fontFamily: 'monospace',
  };

  return (
    <SyntaxHighlighter language={language} customStyle={style} style={anOldHope}>
      {children}
    </SyntaxHighlighter>
  );
}

export default Code;
