/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

import { COLORS, FONTS_SIZE } from "../general/styles";
import { Card, Text } from "../core-ui";
import { Code, MyImage } from "../assets/images";
import { DESCRIPTION } from "../general/data/aboutMe";

export default function Header() {
  return (
    <div css={styles.headerContainer}>
      <Card style={styles.cardStyle}>
        <div css={styles.leftColumn}>
          <div css={styles.introductionTextContainer}>
            <Text css={styles.introductionText}>Hello, </Text>
            <Text css={styles.introductionText}>
              {DESCRIPTION.introductionName}
            </Text>
          </div>
          <Text css={{ ...styles.descText, marginTop: "20px" }}>
            Software Engineer From Indonesia.
          </Text>
          <Text css={{ ...styles.descText, marginTop: "5px" }}>
            Live in Jakarta and born in 1997
          </Text>
        </div>
        <div css={styles.rightColumn}>
          <img alt="" src={MyImage} css={styles.avatar} />
        </div>
      </Card>
    </div>
  );
}

const styles = {
  headerContainer: css({
    display: "flex",
    height: "70vh",
    backgroundImage: `url(${Code})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    flexWrap: "wrap-reverse",
    flexDirection: "row",
    padding: 55,
    justifyContent: "center",
  }),
  leftColumn: css({
    paddingLeft: 42,
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flex: 1,
  }),
  introductionTextContainer: css({
    marginBottom: 8,
  }),
  introductionText: css({
    fontSize: FONTS_SIZE.xxLarge,
    fontWeight: "bold",
    color: COLORS.white,
  }),
  descText: css({
    fontSize: FONTS_SIZE.large,
    fontWeight: "bold",
    color: COLORS.teal,
  }),
  middleColumn: css({
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  }),
  rightColumn: css({
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    paddingRight: 42,
  }),
  avatar: css({
    width: 220,
    height: 300,
    borderRadius: 50,
    [`@media (max-width: 608px)`]: {
      width: 150,
      height: 150,
      borderRadius: 20,
    },
  }),
  cardStyle: css({
    opacity: 1,
    display: "flex",
    backgroundColor: "rgba(0,0,0,0.6)",
    "&:hover": {
      backgroundColor: "teal",
    },
  }),
};
