import { DocumentationLayout } from '@/components/Layout';
import PageIndex from '@/components/PageIndex';
import { Article } from '@/components/UI/Article';
import Link from 'next/link';

export default function CreatingAFieldValidator() {
  const sections = [
    {
      id: 'what-is-a-field',
      name: 'What is a field?',
    },
  ];

  return (
    <>
      <Article>
        <h1>Creating a Field Validator</h1>
        <section id="what-is-a-field">
          <h2>What is a field?</h2>
          <p>
            Are considered fields those properties which data type is a
            <a href="https://www.php.net/manual/en/function.is-scalar.php" target="_blank" rel="noreferrer">
              {' '}
              PHP Scalar Data Type
            </a>
            : strings, integers, floating numbers and booleans. If your property is one of these types, then you need a
            {
              //TODO colocar link para a api do FieldValidator
            }
            Field Validator! <Link href=""></Link>
          </p>
        </section>
      </Article>
      <PageIndex sections={sections} />
    </>
  );
}

CreatingAFieldValidator.getLayout = DocumentationLayout;
