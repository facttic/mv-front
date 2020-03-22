import React from "react";
import styled, { withTheme } from "styled-components";
import CardInfoAuthor from "./CardInfoAuthor";

const Wrapper = styled.div`
  padding: 0.75em 15px;
`;

const Time = styled.time`
  font-size: 0.75em;
  display: block;
  margin-bottom: 1em;
`;

const Text = styled.p`
  color: #000;
  font-size: 0.875em;
`;

const CardInfo = props => {
  const months = [
    "ene.",
    "feb.",
    "mar.",
    "abr.",
    "may.",
    "jun.",
    "jul.",
    "ago.",
    "sep.",
    "oct.",
    "nov.",
    "dic."
  ];
  const date = new Date(props.date);
  const formattedDate =
    date.getFullYear() +
    "-" +
    date.getMonth() +
    1 +
    "-" +
    date.getDate() +
    " " +
    date.getHours() +
    ":" +
    date.getMinutes() +
    ":" +
    date.getSeconds();
  const strDate = date.getDate() + " " + months[date.getMonth()];
  let text = props.text.replace(/\B(#[\wñ]+\b)(?!;)/gi, function(x) {
    return `<a href="https://twitter.com/search?q=${x.replace(
      "#",
      "%23"
    )}" target="_blank" rel="noopener noreferrer">${x}</a>`;
  });

  text = text.replace(/\B(@[_\w]+\b)(?!;)/gi, function(x) {
    return `<a href="https://twitter.com/${x.replace(
      "@",
      ""
    )}" target="_blank" rel="noopener noreferrer">${x}</a>`;
  });

  text = text.replace(/(^|[^'"])(https?:\/\/t\.co\/([a-zA-Z\d]{10}))/gi, function(x) {
    return `<a href="${x}" target="_blank" rel="noopener noreferrer">${x}</a>`;
  });

  return (
    <Wrapper className="CardInfo">
      <Time datetime={formattedDate}>{strDate}</Time>
      <Text
        dangerouslySetInnerHTML={{
          __html: text
        }}
      />
      <CardInfoAuthor author={props.author} />
    </Wrapper>
  );
};

export default withTheme(React.memo(CardInfo));
