// @ts-nocheck
"use client";
import StatsCard from "../StatsCard/StatsCard";
import { cardData, cardData2 } from "./Home.data";
import Building from "../Building/Building";
import Car from "../Car/Car";

export default function Page() {
  return (
    <>
      <div className="mx-auto h-screen flex max-lg:flex-wrap max-lg:justify-center">
        <div className="p-4 flex flex-col gap-4 justify-center pl-16">
          {cardData.map(({ icon, title, children }, index) => {
            return (
              <StatsCard Icon={icon} title={title} key={index}>
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
