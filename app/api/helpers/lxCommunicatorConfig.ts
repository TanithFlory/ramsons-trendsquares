// @ts-nocheck

var LxCommunicator = require("lxcommunicator");

export default function initializeCommunicatorConfig() {
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

  const delegateObj = {
    socketOnDataProgress: function socketOnDataProgress(socket, progress) {
      console.log("Socket on Data Progress:");
      console.log(progress);
    },
    socketOnTokenConfirmed: function socketOnTokenConfirmed(socket, response) {
      console.log("Socket on Token Confirmed:");
      console.log(response);
    },
    socketOnTokenReceived: function socketOnTokenReceived(socket, result) {
      console.log("Socket on Token Received:");
      console.log(result);
    },
    socketOnTokenRefresh: function socketOnTokenRefresh(socket, newTkObj) {
      console.log("Socket on Token Refresh");
      console.log(newTkObj);
    },
    socketOnConnectionClosed: function socketOnConnectionClosed(socket, code) {
      console.log("Socket on Connection Closed:");
      console.log(code);
    },
    socketOnEventReceived: function socketOnEventReceived(
      socket,
      events,
      type
    ) {
      events.forEach((event) => {
        if (event.uuid === "19657c36-0168-e0b8-ffffed57184a04d2") {
          console.log("Central Light Controller");
        }
      });
      // if (events?.entries) {
      //   console.log(events);
      // }
    },
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
