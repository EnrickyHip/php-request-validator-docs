import { DocumentationLayout } from '@/components/Layout';
import PageIndex from '@/components/PageIndex';
import { Article } from '@/components/UI/Article';

export default function FirstValidation() {
  const sections = [];

  return (
    <>
      <Article>
        <h1>isRequired()</h1>
      </Article>
      <PageIndex sections={[]} />
    </>
  );
}

FirstValidation.getLayout = DocumentationLayout;
