/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { CSSInterpolation } from "@emotion/serialize";

import { COLORS } from "../general/styles";

type CardProps = {
  children: React.ReactNode;
  style?: CSSInterpolation;
};

export default function Card(props: CardProps) {
  const { style, children } = props;
  return (
    <div css={[styles.shadowStyle, styles.cardContainer, style]}>
      {children}
    </div>
  );
}

function Header({ style, children }: CardProps) {
  return (
    <div>
      <div css={[styles.header, style]}>{children}</div>
      <div css={styles.divider} />
    </div>
  );
}

function Content({ children, style }: CardProps) {
  return <div css={[styles.content, style]}>{children}</div>;
}

Card.Header = Header;
Card.Content = Content;

const styles = {
  shadowStyle: css({
    borderRadius: 12,
    boxShadow: `3px 2px 10px ${COLORS.black}`,
  }),
  cardContainer: css({
    backgroundColor: COLORS.white,
    padding: 24,
  }),
  header: css({
    flexDirection: "row",
    justifyContent: "center",
    paddingBottom: 16,
  }),
  divider: css({
    height: 0.5,
    opacity: 0.7,
    backgroundColor: COLORS.black,
    alignSelf: "stretch",
  }),
  content: css({ paddingTop: 16 }),
};
