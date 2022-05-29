/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { Row } from "../core-ui";
import { COLORS } from "../general/styles";
import { CONTACT } from "../general/data/aboutMe";

export default function listIconContact() {
  return (
    <Row style={styles.container}>
      <AiFillGithub
        size={70}
        color={COLORS.white}
        css={styles.icon}
        onClick={() => {
          window.open(CONTACT.github.link, "_blank");
        }}
      />
      <AiFillLinkedin
        size={70}
        color={COLORS.white}
        css={styles.icon}
        onClick={() => {
          window.open(CONTACT.linkIn.link, "_blank");
        }}
      />
    </Row>
  );
}

const styles = {
  container: css({ justifyContent: "space-evenly" }),
  icon: css({
    cursor: "pointer",
  }),
};
