import React from "react";
import { Stage } from "@inlet/react-pixi";
import { useDispatch, useSelector } from "react-redux";

import {
  selectWinner,
  selectPlayers,
  selectStatus,
  selectConfig,
  selectButtons,
  selectBall,
} from "./pongSlice";
import Pong from "./Pong";
import Footer from "./Layout/Footer";
import NavBar from "./Layout/Navbar";
import { Helmet } from "react-helmet";
import "./Style/pong.css";

export const PongApp = (props) => {
  const dispatch = useDispatch();

  const winner = useSelector(selectWinner);
  const players = useSelector(selectPlayers);
  const status = useSelector(selectStatus);
  const config = useSelector(selectConfig);
  const buttons = useSelector(selectButtons);
  const ball = useSelector(selectBall);

  const pongContainerProps = {
    ball,
    config,
    buttons,
    players,
    status,
    winner,
    dispatch,
  };

  return (
    <>
      <NavBar />
      <Helmet>
        <title>Play Ping Pong | Sport Store</title>
      </Helmet>
      <div className="appContainer pongCss">
        <Stage
          width={config.width}
          height={config.height}
          options={{ autoDensity: true, backgroundColor: config.boardColor }}>
          <Pong {...pongContainerProps} />
        </Stage>
      </div>
      <Footer />
    </>
  );
};

export default PongApp;
