/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import Typed from "react-typed";
import { Fade } from "react-reveal";

import { COLORS, FONTS_SIZE, PADDING_MARGIN } from "../general/styles";
import { Card, Row, Text } from "../core-ui";
import { Computer, MyImage } from "../assets/images";
import { DESCRIPTION } from "../general/data/aboutMe";

export default function Header() {
  return (
    <div css={styles.headerContainer}>
      <Fade duration={5000}>
        <Card style={styles.cardStyle}>
          <Row style={styles.rowContainer}>
            <div css={styles.leftColumn}>
              <div css={styles.introductionTextContainer}>
                <Text data-comp="text" css={styles.introductionText}>
                  Hello,{" "}
                </Text>
                <Text data-comp="text" css={styles.introductionText}>
                  {DESCRIPTION.introductionName}
                </Text>
              </div>
              <Typed
                data-comp="text-animation"
                strings={[
                  "I'm a Software Engineer",
                  "I like to build things",
                  "I'm a thinker",
                  "I'm an easy person",
                ]}
                typeSpeed={50}
                backSpeed={100}
                loop
                css={{ ...styles.descText, marginTop: "20px" }}
              />
              <Text
                data-comp="text"
                css={{
                  ...styles.descText,
                  marginTop: "5px",
                }}
              >
                Live in Jakarta, Indonesia and born in 1997
              </Text>
            </div>
            <div css={styles.rightColumn}>
              <img alt="" src={MyImage} css={styles.avatar} />
            </div>
          </Row>
          <Text data-comp="quoteText" css={styles.quoteText}>
            "Don’t worry about failures worry about the chances you miss when
            you don’t even try."
          </Text>
          <Text data-comp="quoteText" css={styles.quoteText}>
            - Jack Canfield -
          </Text>
        </Card>
      </Fade>
    </div>
  );
}

const styles = {
  headerContainer: css({
    display: "flex",
    height: "70vh",
    backgroundImage: `url(${Computer})`,
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
    color: COLORS.whiteCream,
    transition: "color 1.2s ease-in-out",
  }),
  descText: css({
    fontSize: FONTS_SIZE.large,
    fontWeight: "bold",
    color: COLORS.whiteCream,
    transition: "color 1.2s ease-in-out",
  }),
  placeText: css({}),
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
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.2)",
    transition: "0.5s all ease-in-out",
    "&:hover": {
      transform: "scale(1.05)",
      background: "rgba(0,0,0,0.9)",
    },
    "&:hover [data-comp=text]": {
      color: COLORS.white,
    },
    "&:hover [data-comp=quoteText]": {
      fontWeight: "bold",
      fontSize: FONTS_SIZE.large,
    },
    "&:hover [data-comp=text-animation]": {
      color: COLORS.whiteCream,
    },
  }),
  quoteText: css({
    fontSize: FONTS_SIZE.medium,
    color: COLORS.white,
    textAlign: "center",
    justifyContent: "center",
    fontFamily: "Hallelujah",
    transition: "font-size 1.2s ease-in-out",
    lineHeight: 1.7,
  }),
  rowContainer: css({
    marginBottom: PADDING_MARGIN.large,
  }),
};
