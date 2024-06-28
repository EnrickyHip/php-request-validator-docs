import React, { CSSProperties, useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { anOldHope } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { CodeContainer, CopyButton, IconsContainer } from './styled';
import { MdOutlineContentCopy } from 'react-icons/md';
import { FaCheck } from 'react-icons/fa6';

export interface Props {
  language: string;
  children: string;
  copy?: boolean;
}

function Code({ children, language, copy = true }: Props) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  const style: CSSProperties = {
    borderRadius: '5px',
    fontSize: '14px',
    padding: '20px',
    fontFamily: 'monospace',
    marginBottom: '20px',
    marginTop: '25px',
    backgroundColor: '#232536',
  };

  return (
    <CodeContainer>
      {copy && (
        <CopyToClipboard text={children} onCopy={handleCopy}>
          <CopyButton>
            <IconsContainer>
              <FaCheck
                className={copied ? 'copy-icon shown-icon' : 'copy-icon hidden-icon'}
                size={16}
                color="#15D031"
              />
              <MdOutlineContentCopy
                className={copied ? 'copy-icon hidden-icon' : 'copy-icon shown-icon'}
                size={16}
                color="#999"
              />
            </IconsContainer>
          </CopyButton>
        </CopyToClipboard>
      )}
      <SyntaxHighlighter language={language} customStyle={style} style={anOldHope}>
        {children}
      </SyntaxHighlighter>
    </CodeContainer>
  );
}

export default Code;
