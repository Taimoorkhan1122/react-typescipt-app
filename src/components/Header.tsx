import { useContext } from "react";

import { GlobalContext } from "../context/GlobalProvider";

const Header = () => {
  const { state } = useContext(GlobalContext);
  console.log(state);

  return <div>Header</div>;
};

export default Header;
