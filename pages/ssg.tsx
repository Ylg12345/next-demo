import { GetStaticProps, NextPage } from "next";
import Header from "../components/Header";
import InfoList, { ILoginInfoList } from "../components/InfoList";

interface ISSGProps {
  infoList: ILoginInfoList[];
}

const SSG: NextPage<ISSGProps> = ({ infoList }) => {
  return (
    <>
      <Header>this is a SSG render</Header>
      <InfoList 
        list={infoList}
      />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
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

export default SSG;