/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

import {
  ContactInformation,
  Experience,
  Header,
  Project,
  Technology,
} from "../component";
import { PADDING_MARGIN } from "../general/styles";

export default function Home() {
  return (
    <div>
      <Header />
      <div css={styles.TechContainer}>
        <Technology />
      </div>
      <div css={styles.experienceContainer}>
        <Experience />
      </div>
      <Project />

      <ContactInformation />
    </div>
  );
}

const styles = {
  TechContainer: css({
    padding: "0px 60px",
    marginBottom: PADDING_MARGIN.jumbo,
  }),
  experienceContainer: css({
    marginBottom: PADDING_MARGIN.jumbo,
  }),
};
