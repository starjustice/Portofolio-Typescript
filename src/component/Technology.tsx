/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { Fade, Bounce } from "react-reveal";

import { Row, Text } from "../core-ui";

import { skill } from "../general/data/skill";
import { FONTS_SIZE, PADDING_MARGIN } from "../general/styles";
import CardTechnology from "./CardTechnology";

export default function Technology() {
  return (
    <div css={styles.containerSkill}>
      <Text css={styles.skillText}>
        <Fade left>SKILL</Fade>
      </Text>
      <Bounce cascade>
        <Row style={styles.cardContainer}>
          <CardTechnology
            title={skill[0].tech}
            data={skill[0].list}
            styleCard={styles.card}
          />
          <CardTechnology
            title={skill[1].tech}
            data={skill[1].list}
            styleCard={styles.card}
          />
        </Row>
      </Bounce>
    </div>
  );
}

const styles = {
  containerSkill: css({
    marginTop: PADDING_MARGIN.jumbo,
  }),
  skillText: css({
    justifyContent: "center",
    marginBottom: PADDING_MARGIN.xLarge,
    fontSize: FONTS_SIZE.xxLarge,
    fontWeight: "bold",
  }),
  cardContainer: css({
    display: "flex",
    justifyContent: "space-between",

    alignItems: "stretch",
  }),
  card: css({
    flex: 1,
    margin: "0px 20px",
  }),
};
