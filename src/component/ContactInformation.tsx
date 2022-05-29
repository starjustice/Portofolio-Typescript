/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { ListIconContact } from ".";

import { Row, Text } from "../core-ui";
import { CONTACT } from "../general/data/aboutMe";
import { COLORS, FONTS_SIZE, PADDING_MARGIN } from "../general/styles";

export default function ContactInformation() {
  return (
    <div css={styles.contactContainer}>
      <div>
        <Text css={styles.titleText}>Contact With Me In</Text>

        <Text>
          <a href={CONTACT.email.link} css={styles.emailText}>
            {CONTACT.email.name}
          </a>
        </Text>
      </div>
      <Row style={styles.exploreContainer}>
        <div css={styles.quoteContainer}>
          <Text css={[styles.titleText, styles.exploreText]}>
            Explore Me In
          </Text>
          <ListIconContact />
        </div>
        <div css={styles.quoteContainer}>
          <Text css={styles.quoteText}>
            "ALL THE KNOWLEDGE IS IN THE CONNECTION"
          </Text>
          <Text css={[styles.quoteText, styles.exploreText]}>
            - David Rumelhart -
          </Text>
        </div>
      </Row>
    </div>
  );
}

const styles = {
  contactContainer: css({
    backgroundColor: COLORS.black,
    height: "50vh",
    marginTop: PADDING_MARGIN.medium,
    padding: 80,
    paddingTop: 100,
  }),
  titleText: css({
    fontWeight: "bold",
    fontSize: FONTS_SIZE.xLarge,
    color: COLORS.white,
    marginBottom: PADDING_MARGIN.medium,
  }),
  exploreText: css({
    justifyContent: "center",
    marginBottom: PADDING_MARGIN.medium,
  }),
  emailText: css({
    fontSize: FONTS_SIZE.large,
    color: COLORS.white,
    textDecoration: "none",
  }),
  exploreContainer: css({
    marginTop: PADDING_MARGIN.medium,
    justifyContent: "space-between",
  }),
  quoteContainer: css({
    flex: 1,
  }),
  quoteText: css({
    fontSize: FONTS_SIZE.large,
    color: COLORS.white,
    textAlign: "center",
    justifyContent: "center",
    fontFamily: "Hallelujah",
  }),
  nameText: css({
    marginTop: PADDING_MARGIN.medium,
  }),
};
