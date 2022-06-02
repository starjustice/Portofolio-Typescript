import React from "react";

type ListProps = {
  data: Array<React.ReactNode>;
};

export default function List(props: ListProps) {
  const { data } = props;
  return (
    <ul>
      {data.map((children) => (
        <li>{children}</li>
      ))}
    </ul>
  );
}
