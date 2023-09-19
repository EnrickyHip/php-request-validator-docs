import { GetStaticProps } from 'next';

export default function Index() {
  return null;
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    redirect: {
      destination: '/docs',
      permanent: true,
    },
  };
};
