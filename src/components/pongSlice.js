const GAME_WIDTH = 800;
const GAME_HEIGHT = 700;

const PADDLE_WIDTH = 20;
const PADDLE_HEIGHT = 100;
const PADDLE_OFFSET_X = 20;
const PADDLE_OFFSET_Y = 50;
const PADDLE_SPEED = 20;

const humanPaddle = {
  controller: "human",
  position: "left",
  x: PADDLE_OFFSET_X,
  y: PADDLE_OFFSET_Y,
  width: PADDLE_WIDTH,
  height: PADDLE_HEIGHT,
  score: 0,
};

const computerPaddle = {
  controller: "computer",
  position: "right",
  x: GAME_WIDTH - PADDLE_OFFSET_X - PADDLE_WIDTH,
  y: PADDLE_OFFSET_Y,
  width: PADDLE_WIDTH,
  height: PADDLE_HEIGHT,
  score: 0,
};

const resumeButton = {
  x: GAME_WIDTH / 2,
  y: GAME_HEIGHT / 2 - 50,
  top_x: GAME_WIDTH / 2 - 120,
  top_y: GAME_HEIGHT / 2 - 100,
  text: "RESUME",
};

const startButton = Object.assign({}, resumeButton, {
  text: "START",
});

const restartButton = Object.assign({}, resumeButton, {
  text: "RESTART",
});

const BALL_DEFAULTS = {
  x: GAME_WIDTH / 2,
  y: GAME_HEIGHT / 2,
  radius: 10,
  x_speed: 5,
  y_speed: 5,
};

const initialState = {
  config: {
    boardColor: 0x0d0c22,
    width: GAME_WIDTH,
    height: GAME_HEIGHT,
  },
  velocity: PADDLE_SPEED,
  players: {
    left: humanPaddle,
    right: computerPaddle,
  },
  ball: BALL_DEFAULTS,
  buttons: {
    restart: restartButton,
    start: startButton,
    resume: resumeButton,
  },
  keysPressed: {},
  status: "pre-start",
  winner: null,
  winningScore: 5,
};
