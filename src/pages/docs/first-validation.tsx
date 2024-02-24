import { DocumentationLayout } from '@/components/Layout';
import PageIndex from '@/components/PageIndex';
import { Article } from '@/components/UI/Article';
export default function FirstValidation() {
  return (
    <>
      <Article>
        <h1>Your First Validation</h1>
      </Article>
      <PageIndex sections={[]} />
    </>
  );
}

FirstValidation.getLayout = DocumentationLayout;
