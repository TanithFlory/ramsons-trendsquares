// @ts-nocheck
"use client";
import StatsCard from "../StatsCard/StatsCard";
import { cardData, cardData2 } from "./Home.data";
import Building from "../Building/Building";
import Car from "../Car/Car";
import initializeCommunicatorConfig from "@/app/api/helpers/lxCommunicatorConfig";
import calcTotalLights from "@/app/helpers/Lighting/calcTotalLights";
import calcTotalLightsOn from "@/app/helpers/Lighting/calcNumOfLightsOn";
import getJson from "@/app/helpers/Lighting/getJson";
import { useEffect, useState } from "react";

export default function Page() {
  const { socket, config } = initializeCommunicatorConfig();
  const [totalLightsOn, setTotalLightsOn] = useState(0);
  const [totalLights, setTotalLights] = useState(0);
  const [structure, setStructure] = useState();
  let activeMoodsUuid: string[] = [];

  const delegateObj = {
    socketOnConnectionClosed: function socketOnConnectionClosed(socket, code) {
      console.log("Socket on Connection Closed:");
      console.log(code);
    },
    socketOnEventReceived: function socketOnEventReceived(
      socket,
      events,
      type
    ) {
      events.forEach(function (event) {
        activeMoodsUuid.forEach((item) => {
          let totalLightsOn = 0;
          if (item === event.uuid) {
            const data = getJson(event.text);
            if (data[0] !== 778) {
              //778 is OFF.
              totalLightsOn++;
            }
          }
          setTotalLightsOn(totalLightsOn);
        });
      });
    },
  };
  config.delegate = delegateObj;

  async function openSocket() {
    try {
      await socket.open("192.168.1.246", "admin", "Modo@2023");
      const structure = await socket.send("data/LoxAPP3.json");
      setStructure(structure);
      await socket.send("jdev/sps/enablebinstatusupdate");

      setTotalLights(calcTotalLights(structure));

      activeMoodsUuid = calcTotalLightsOn(structure);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    openSocket();
  }, []);

  return (
    <>
      <div className="mx-auto h-screen flex max-lg:flex-wrap max-lg:justify-center">
        <div className="p-4 flex flex-col gap-4 justify-center pl-16">
          {cardData.map(({ icon, title, children }, index) => {
            return (
              <StatsCard
                Icon={icon}
                title={title}
                key={index}
                totalLights={title.toLowerCase() === "lightning" && totalLights}
                totalLightsOn={
                  title.toLowerCase() === "lightning" && totalLightsOn
                }
              >
                {children}
              </StatsCard>
            );
          })}
        </div>
        <div className="flex-1 max-lg:hidden">
          <Car />
        </div>
        <div className="p-4 flex flex-col gap-4 justify-center pr-16">
          {cardData2.map(({ icon, title, children }, index) => {
            return (
              <StatsCard Icon={icon} title={title} key={index}>
                {children}
              </StatsCard>
            );
          })}
        </div>
      </div>
    </>
  );
}
