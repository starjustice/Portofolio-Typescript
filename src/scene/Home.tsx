/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

import { ContactInformation, Header, Project, Technology } from "../component";

export default function Home() {
  return (
    <div>
      <Header />
      <div css={styles.bodyContainer}>
        <Technology />
        <Project />
      </div>
      <ContactInformation />
    </div>
  );
}

const styles = {
  bodyContainer: css({
    padding: "0px 60px",
  }),
};
