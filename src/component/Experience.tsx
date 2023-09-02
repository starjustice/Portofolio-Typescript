/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { Collapse } from "react-collapse";

import { Row, Text } from "../core-ui";
import { WORK_EXPERIENCE } from "../general/data/work";
import { COLORS, FONTS_SIZE, PADDING_MARGIN } from "../general/styles";
import "./css/Experience.css";
import { useState } from "react";

export default function Experience() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Text css={styles.experienceText}>Experience</Text>

      {WORK_EXPERIENCE.map(
        ({ company, year, desc, position, image }, index) => {
          return (
            <div
              className="cardContainer"
              onClick={() => setIsOpen(!isOpen)}
              key={index}
              css={styles.accordionContainer}
            >
              <Row>
                <img alt="" src={image} css={styles.image} />
                <div>
                  <Text css={styles.textTitle}>{company}</Text>
                  <Text css={styles.textSubTitle}>{year}</Text>
                  <Text css={[styles.textSubTitle, styles.highlightText]}>
                    {position}
                  </Text>
                </div>
              </Row>

              <Collapse isOpened={isOpen}>
                <div css={styles.divider} />
                <Text css={styles.descText}>{desc}</Text>
              </Collapse>
            </div>
          );
        }
      )}
    </div>
  );
}

const styles = {
  experienceText: css({
    justifyContent: "center",
    marginBottom: PADDING_MARGIN.xLarge,
    fontSize: FONTS_SIZE.xxLarge,
    fontWeight: "bold",
  }),
  accordionContainer: css({
    borderRadius: 12,
    boxShadow: `3px 2px 10px ${COLORS.black}`,
    backgroundColor: COLORS.lightBlue,
    padding: PADDING_MARGIN.medium,
    maxWidth: "40%",
  }),
  textTitle: css({
    fontSize: FONTS_SIZE.xLarge,
  }),
  textSubTitle: css({
    fontSize: FONTS_SIZE.large,
  }),
  descText: css({
    color: "#052e03",
    lineHeight: 1.5,
  }),
  image: css({
    height: "150px",
  }),
  highlightText: css({
    color: COLORS.darkBrown,
  }),
  divider: css({
    height: 0.5,
    opacity: 0.7,
    backgroundColor: COLORS.black,
    alignSelf: "stretch",
    marginBottom: PADDING_MARGIN.small,
  }),
};
