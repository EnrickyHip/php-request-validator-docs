import PageIndex from '@/components/PageIndex';
import { Article } from '@/components/UI/Article';
import DocumentationPage from '@/templates/Docs';

export default function Introduction() {
  // const sections = [];

  return (
    <DocumentationPage>
      <Article>
        <h1>Your First Validation</h1>
      </Article>
      <PageIndex sections={[]} />
    </DocumentationPage>
  );
}
