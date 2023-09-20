import { GetStaticProps } from 'next';

export default function Docs() {
  return null;
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    redirect: {
      destination: '/docs/introduction',
      permanent: true,
    },
  };
};
