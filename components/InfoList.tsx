

interface IListProps {
  list: ILoginInfoList[]
}

export interface ILoginInfoList {
  login: string,
  id: number,
  node_id?: string,
  avatar_url: string,
  url: string,
  html_url: string,
  followers_url?: string,
}

const InfoList = ({ list }: IListProps) => {
  return (
    <ul>
    {
      list?.map((item, index) => {
        return (
          <li
            key={`login-list-${index}`}
          >
            {item.login}
          </li>
        )
      })
    }
  </ul>
  );
};

export default InfoList;