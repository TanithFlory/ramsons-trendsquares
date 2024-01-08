// @ts-nocheck

import lightStatistics from "../lights/lightStatistics";
import _ from "lodash";

var LxCommunicator = require("lxcommunicator");
let currentNumOfLightsOn = 17;

export default async function initializeCommunicatorConfig() {
  const uuid = getUUID();

  const WebSocketConfig = LxCommunicator.WebSocketConfig;

  let deviceInfo: string;

  if (typeof window !== "undefined") {
    deviceInfo = window.navigator.userAgent;
  } else {
    deviceInfo = require("os").hostname();
  }

  const config = new WebSocketConfig(
    WebSocketConfig.protocol.WS,
    uuid,
    deviceInfo,
    WebSocketConfig.permission.APP,
    false
  );

  const socket = new LxCommunicator.WebSocket(config);

  await socket.open("192.168.1.245", "varun", "yPRBUinSui");
  const structure = await socket.send("data/LoxAPP3.json");
  await socket.send("jdev/sps/enablebinstatusupdate");
  const delegateObj = {
    socketOnConnectionClosed: function socketOnConnectionClosed(socket, code) {
      console.log("Socket on Connection Closed:");
      console.log(code);
    },
    socketOnEventReceived: _.debounce(async function socketOnEventReceived(
      socket,
      events,
      type
    ) {
      const [numOfLights, updatedNumOfLightsOn] = await lightStatistics(
        structure,
        events,
        currentNumOfLightsOn
      );
      currentNumOfLightsOn = updatedNumOfLightsOn;
      // console.log(events);
      console.log(currentNumOfLightsOn, numOfLights);
    },
    200),
  };

  config.delegate = delegateObj;

  function getUUID() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        const r = (Math.random() * 16) | 0,
          v = c === "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  }

  return socket;
}
