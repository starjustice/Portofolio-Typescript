/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { Fade, Zoom } from "react-reveal";

import {
  Timeline,
  Events,
  ImageEvent,
  TextEvent,
  themes,
} from "@merc/react-timeline";

import "../styles/project.css";

import { Row, Text } from "../core-ui";
import { data, KODEFOX_LINK } from "../general/data/work";
import { COLORS, FONTS_SIZE, PADDING_MARGIN } from "../general/styles";

export default function Project() {
  return (
    <div css={styles.container}>
      <Text css={styles.projectText}>
        <Fade right>PROJECT</Fade>
      </Text>
      <Timeline
        opts={{ layout: "inline-evts" }}
        theme={{
          ...themes.default,
          marker: {
            backgroundColor: "#fff",
            border: "2px solid #EB2DB4",
            borderRadius: "50%",
            width: "20px",
            height: "20px",
            zIndex: 100,
          },
          timelineTrack: {
            left: "50%",
            width: "2px",
            height: "100%",
            backgroundColor: "#ee18b6",
            content: "''",
          },
          imageAtom: {
            objectFit: "contain",
            overflow: "hidden",
            width: "100%",
            maxHeight: "200px",
          },
          card: {
            borderRadius: "4px",
            backgroundColor: "#fff",
            color: "#333",
            padding: "12px",
            boxShadow: "0 4px 6px 0 hsla(0, 0%, 0%, 0.2)",
            width: "auto",
            maxWidth: "500px",
            a: {
              color: "#EC24B5",
            },
          },
          imageText: {
            marginBottom: "12px",
            fontSize: FONTS_SIZE.xLarge + "px",
            fontWeight: "bold",
            fontFamily: "MadeTommy",
          },
          textAtom: {
            marginBottom: "12px",
            fontSize: FONTS_SIZE.xLarge + "px",
            fontWeight: "bold",
            fontFamily: "MadeTommy",
          },
        }}
      >
        <Events>
          {data.map(
            ({
              title,
              desc,
              image,
              technology,
              color,
              company,
              year,
              linkProject,
            }) => {
              return (
                <>
                  <Zoom>
                    {image ? (
                      <div
                        className={linkProject ? "Card-image-container" : ""}
                        onClick={
                          linkProject
                            ? () => {
                                window.open(linkProject, "_blank");
                              }
                            : undefined
                        }
                      >
                        <ImageEvent date={year} text={title} src={image}>
                          <div css={styles.projectCompanyContainer}>
                            <Text
                              css={styles.projectCompanyText}
                              onClick={() => {
                                window.open(KODEFOX_LINK, "_blank");
                              }}
                            >
                              {company}
                            </Text>
                          </div>
                          {technology.length > 0 ? (
                            <Row style={styles.rowLabelContainer}>
                              {technology.map((name) => {
                                return (
                                  <div
                                    css={[
                                      styles.labelContainerTechnology,
                                      { backgroundColor: color },
                                    ]}
                                  >
                                    <Text
                                      style={{
                                        color:
                                          color === COLORS.darkPurple
                                            ? COLORS.white
                                            : COLORS.black,
                                      }}
                                    >
                                      {name}
                                    </Text>
                                  </div>
                                );
                              })}
                            </Row>
                          ) : null}

                          <div>
                            <Text css={styles.projectDescText}>{desc}</Text>
                          </div>
                        </ImageEvent>
                      </div>
                    ) : (
                      <TextEvent date={year} text={title}>
                        <div css={styles.projectCompanyContainer}>
                          <Text
                            css={styles.projectCompanyText}
                            onClick={() => {
                              window.open(KODEFOX_LINK, "_blank");
                            }}
                          >
                            {company}
                          </Text>
                        </div>
                        <div>
                          {technology.length > 0 ? (
                            <Row style={styles.rowLabelContainer}>
                              {technology.map((name) => {
                                return (
                                  <div
                                    css={[
                                      styles.labelContainerTechnology,
                                      { backgroundColor: color },
                                    ]}
                                  >
                                    <Text>{name}</Text>
                                  </div>
                                );
                              })}
                            </Row>
                          ) : null}
                          <Text css={styles.projectDescText}>{desc}</Text>
                        </div>
                      </TextEvent>
                    )}
                  </Zoom>
                </>
              );
            }
          )}
        </Events>
      </Timeline>
    </div>
  );
}

const styles = {
  container: css({
    marginTop: PADDING_MARGIN.jumbo,
  }),
  projectText: css({
    justifyContent: "center",
    marginBottom: PADDING_MARGIN.xLarge,
    fontSize: FONTS_SIZE.xxLarge,
    fontWeight: "bold",
  }),
  projectCompanyContainer: css({
    borderTop: "1px solid",
    paddingTop: 8,
    marginTop: 22,
  }),
  projectCompanyText: css({
    fontsize: FONTS_SIZE.large,
    marginBottom: 12,
    fontWeight: 900,
    cursor: "pointer",
    color: COLORS.blueKodefox,
  }),
  projectDescText: css({
    fontsize: FONTS_SIZE.medium,
    textAlign: "justify",
    marginTop: 10,
  }),
  labelContainerText: css({ fontsize: FONTS_SIZE.small }),
  labelContainerTechnology: css({
    background: COLORS.indigo,
    marginRight: 8,
    padding: 8,
    borderRadius: 18,
    fontsize: FONTS_SIZE.small,
    whiteSpace: "nowrap",
    marginBottom: PADDING_MARGIN.small,
  }),
  rowLabelContainer: css({
    flexWrap: "wrap",
  }),
};
