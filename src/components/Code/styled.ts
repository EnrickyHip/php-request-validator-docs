import styled from 'styled-components';

export const CodeContainer = styled.div`
  position: relative;
  line-height: 22px;
`;

export const CopyButton = styled.button`
  align-items: center;
  border: 1px solid #555;
  border-radius: 6px;
  display: flex;
  background-color: transparent;
  cursor: pointer;
  padding: 0.4rem;
  position: absolute;
  transition: border 100ms ease-in-out;
  right: 0.6rem;
  top: 0.6rem;

  &:hover {
    border: 1px solid #8c8c8c;
  }

  svg.copy-icon {
    transition: all 200ms ease-in-out;
    left: 0;
    top: 0;
    position: absolute;
  }

  svg.hidden-icon {
    opacity: 0;
    transform: scale(0.33);
  }

  svg.shown-icon {
    opacity: 1;
    transform: translate(-50%, -50%, scale(1));
    transition-delay: 75ms;
  }
`;

export const IconsContainer = styled.div`
  height: 16px;
  position: relative;
  width: 16px;
`;
