import React from "react";

export default function NickName({ theme, isNickName, nickname, className }) {
  return isNickName ? (
    <h2 className={className} style={{ color: theme.text }}>
      ( {nickname} )
    </h2>
  ) : (
    <></>
  );
}
