import StatsCard from "../components/StatsCard/StatsCard";
import { cardData, cardData2 } from "./Home.data";

import Building from "../components/Building/Building";

export default function Home() {
  return (
    <>
      <Building />
      <div className="max-w-[1200px]  mx-auto h-screen">
        <div className="relative z-10 flex justify-between mx-auto max-w-[1000px]">
          <div className="p-4 flex flex-col gap-4">
            {cardData.map(({ icon, title }, index) => {
              return (
                <StatsCard Icon={icon} title={title} key={index}></StatsCard>
              );
            })}
          </div>
          <div className="p-4 flex flex-col gap-4">
            {cardData2.map(({ icon, title, children }, index) => {
              return (
                <StatsCard Icon={icon} title={title} key={index}>
                  {children}
                </StatsCard>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
