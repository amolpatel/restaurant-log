import React, { ReactNode, FC, ReactElement } from "react";

import Header from "./Header";

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = (props): ReactElement => (
  <div>
    <Header />
    <div className="container">{props.children}</div>
  </div>
);

export default Layout;
