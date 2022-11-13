import { useEffect, useState } from "react";
import Header from "../components/Header";
import InfoList, { ILoginInfoList } from "../components/InfoList";

const CSR = () => {

  const [infolist, setInfoList] = useState<ILoginInfoList[]>([]);

  const fetchLoginInfo = () => {
    fetch('https://api.github.com/users')
      .then((res) => res.json())
      .then((data) => {
        setInfoList(data);
      })
  };

  useEffect(() => {
    fetchLoginInfo();
  }, []);

  return (
    <>
      <Header>this is a CSR render</Header>
      <InfoList 
        list={infolist}
      />
    </>
  );
};

export default CSR;