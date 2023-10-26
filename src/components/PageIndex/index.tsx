import React, { useEffect, useState } from 'react';
import { PageIndexAside, PageIndexLink, PageIndexList } from './styled';

interface PageIndexSection {
  id: string;
  name: string;
}

export interface PageIndexProps {
  sections: PageIndexSection[];
}

function PageIndex({ sections }: PageIndexProps) {
  const [activeSection, setActiveSection] = useState('');

  const handleHashChange = () => {
    const hash = window.location.hash;

    const targetElement = document.querySelector(hash) as HTMLDivElement;
    const header = document.querySelector('header') as HTMLDivElement;

    if (targetElement) {
      const fixedMenuHeight = header.offsetHeight;
      const targetPosition = targetElement.offsetTop - fixedMenuHeight;

      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;

      for (const section of sections) {
        const sectionElement = document.getElementById(section.id);
        if (sectionElement) {
          const sectionTop = sectionElement.offsetTop;
          const sectionBottom = sectionTop + sectionElement.clientHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sections]);

  return (
    <PageIndexAside>
      <PageIndexList>
        {sections.map((section) => (
          <li key={section.id}>
            <PageIndexLink
              onClick={() => setTimeout(handleHashChange, 10)}
              href={'#' + section.id}
              active={activeSection === section.id}
            >
              {section.name}
            </PageIndexLink>
          </li>
        ))}
      </PageIndexList>
    </PageIndexAside>
  );
}

export default PageIndex;
