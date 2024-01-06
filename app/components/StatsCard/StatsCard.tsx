import React from "react";
import { TbTemperature, TbTemperatureCelsius } from "react-icons/tb";

interface IProps {
  Icon: React.ReactElement;
  title: string;
  children?: React.ReactNode;
  totalLights: number;
  totalLightsOn: number;
}

export default function StatsCard({
  Icon,
  title,
  children,
  totalLights,
  totalLightsOn,
}: IProps) {
  return (
    <div className="flex flex-col items-center justify-center w-[250px] h-[129px] bg-statsBg p-4 rounded-xl border-[1px] border-outline hover:scale-105 group transition-all duration-500 ease-in-out cursor-pointer  hover:bg-black">
      <div className="flex gap-4 items-center">
        <div>
          {React.cloneElement(Icon, {
            fill: `${totalLightsOn > 0 ? "yellow" : "white"}`,
          })}
        </div>
        <div>
          <h2 className="font-bold text-sm">{title}</h2>
        </div>
      </div>
      <div className="mt-2 flex gap-4 justify-center text-xs">
        {title.toLowerCase() === "lightning" ? (
          <>
            <div> Total Lights: {totalLights}</div>
            <div> Lights On: {totalLightsOn}</div>
          </>
        ) : (
          children
        )}
      </div>
    </div>
  );
}
