import { Layout } from '@/components/Layout';

interface DocumentationPageProps {
  children: React.ReactNode;
}

export default function DocumentationPage({ children }: DocumentationPageProps) {
  return <Layout tab="docs">{children}</Layout>;
}
