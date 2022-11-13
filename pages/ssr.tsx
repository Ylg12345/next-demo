import { GetServerSideProps, NextPage } from "next";
import Header from "../components/Header";
import InfoList, { ILoginInfoList } from "../components/InfoList";

interface ISSRProps {
  infoList: ILoginInfoList[];
}

const SSR: NextPage<ISSRProps> = ({ infoList }) => {

  return (
    <>
      <Header>this is a SSR render</Header>
      <InfoList 
        list={infoList}
      />
    </>
  );
};


export default SSR;


export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('https://api.github.com/users');
  const infoList = await res.json();

  if (!infoList) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: {
      infoList,
    }
  }
};