/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";
import { CSSInterpolation } from "@emotion/serialize";

import { FONTS_SIZE } from "../general/styles";

type TextProps = {
  style?: CSSInterpolation;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export default function Text(props: TextProps) {
  const { style, children } = props;
  return (
    <div css={{ ...styles.defaultText, style }} {...props}>
      {children}
    </div>
  );
}

const styles = {
  defaultText: css({
    fontSize: FONTS_SIZE.medium,
    display: "flex",
    flexDirection: "row",
    fontFamily: "MadeTommy",
  }),
};
