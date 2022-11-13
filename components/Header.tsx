import { FC } from "react";

interface IHeader {
  children: string;
}

const Header: FC<IHeader> = ({ children }) => {
  return (
    <h1>
      {children}
    </h1>
  );
};

export default Header;