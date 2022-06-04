/** @jsxImportSource @emotion/react */

import { CSSInterpolation } from "@emotion/serialize";

import { Card, List, Text } from "../core-ui";

type CardTechnologyProps = {
  title: string;
  data: Array<string>;
  styleCard?: CSSInterpolation;
};
export default function CardTechnology(props: CardTechnologyProps) {
  const { title, data, styleCard } = props;
  return (
    <Card style={styleCard}>
      <Card.Header>
        <Text>{title}</Text>
      </Card.Header>
      <Card.Content>
        <List data={data} />
      </Card.Content>
    </Card>
  );
}
