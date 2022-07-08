/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

import {
  ContactInformation,
  Experience,
  Header,
  Project,
  Technology,
} from "../component";

export default function Home() {
  return (
    <div>
      <Header />
      <div css={styles.bodyContainer}>
        <Technology />
        <Project />
        <Experience />
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
