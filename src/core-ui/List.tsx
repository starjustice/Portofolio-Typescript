/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import Text from "./Text";

type ListProps = {
  data: Array<React.ReactNode>;
};

export default function List(props: ListProps) {
  const { data } = props;
  return (
    <ul>
      {data.map((children) => (
        <li>
          <Text>{children}</Text>
        </li>
      ))}
    </ul>
  );
}
