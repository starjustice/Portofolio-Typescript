/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { CSSInterpolation } from "@emotion/serialize";

type RowProps = {
  style?: CSSInterpolation;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export default function Row(props: RowProps) {
  const { style, children } = props;

  return (
    <div css={[styles.row, style]} {...props}>
      {children}
    </div>
  );
}

const styles = {
  row: css({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    flexGrow: 1,
  }),
};
