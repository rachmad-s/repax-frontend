import Image from 'next/image';

const Home = () => <div>Home</div>;

export const getServerSideProps = async () => ({
  redirect: {
    destination: `/dashboard`,
    permanent: false,
  },
});

export default Home;
