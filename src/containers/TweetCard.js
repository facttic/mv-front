import React from "react";
import Card from "../components/Card";
import styled from "styled-components";

const Modal = styled.div`
  position: absolute;
  z-index: 10;
  animation: "in 400ms ease-out";
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
  animation: in 500ms ease-in-out;
`;

export default function TweetCard({
    isAuthenticated,
    currentTweet,
    container,
    closeCard,
    deleteTweet,
    banUser
}) {
    let containerRect = container.current.getBoundingClientRect();
    let elemRect = currentTweet.el.getBoundingClientRect();
    let x =
        elemRect.left -
        containerRect.left +
        (elemRect.right - elemRect.left) / 2 -
        160;
    let y = elemRect.top - containerRect.top - 30;

    if (x + 320 > containerRect.right - containerRect.left + 15)
        x = containerRect.right - containerRect.left + 15 - 320;
    if (x < 15) x = 15;
    if (y < -25) y = -25;

    return (
        <Modal style={{ top: y, left: x }}>
            <Overlay onTouchStart={closeCard} />
            <Card
                show={isAuthenticated}
                tweet={currentTweet.tweet}
                close={closeCard}
                delete={deleteTweet}
                block={banUser}
            />
        </Modal>
    )
}


