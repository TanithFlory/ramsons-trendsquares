import StatsCard from "../components/StatsCard/StatsCard";
import {
  MdLightMode,
  MdOutlinePlumbing,
  MdLocalFireDepartment,
  MdElevator,
  MdAir,
} from "react-icons/md";
import { FaParking } from "react-icons/fa";
import { TiBatteryCharge } from "react-icons/ti";
import { TbAirConditioning, TbLockAccess } from "react-icons/tb";
import { SiSpringsecurity } from "react-icons/si";
import { SlEnergy } from "react-icons/sl";
import { GiPowerGenerator } from "react-icons/gi";
import Building from "../components/Building/Building";

export default function Home() {
  return (
    <>
      <Building />
      <div className="max-w-[1200px]  mx-auto h-screen">
        <div className="relative z-10 flex justify-between mx-auto max-w-[1000px]">
          <div className="p-4 flex flex-col gap-4">
            {cardData.map(({ icon, title }, index) => {
              return <StatsCard Icon={icon} title={title} key={index} />;
            })}
          </div>
          <div className="p-4 flex flex-col gap-4">
            {cardData2.map(({ icon, title }, index) => {
              return <StatsCard Icon={icon} title={title} key={index} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
const dimensions = "h-[25px] w-[25px]";
const cardData = [
  {
    title: "Lightning",
    icon: <MdLightMode className={dimensions} />,
  },
  {
    title: "Plumbing",
    icon: <MdOutlinePlumbing className={dimensions} />,
  },
  {
    title: "Fire Suppression",
    icon: <MdLocalFireDepartment className={dimensions} />,
  },
  {
    title: "Passenger Elevators",
    icon: <MdElevator className={dimensions} />,
  },
  {
    title: "Backup DG",
    icon: <GiPowerGenerator className={dimensions} />,
  },
  {
    title: "EV Charge",
    icon: <TiBatteryCharge className={dimensions} />,
  },
];
const cardData2 = [
  {
    title: "Energy Monitoring",
    icon: <SlEnergy className={dimensions} />,
  },
  {
    title: "Ventilation",
    icon: <MdAir className={dimensions} />,
  },
  {
    title: "Security",
    icon: <SiSpringsecurity className={dimensions} />,
  },
  {
    title: "Access",
    icon: <TbLockAccess className={dimensions} />,
  },
  {
    title: "Parking",
    icon: <FaParking className={dimensions} />,
  },
  {
    title: "EVAC",
    icon: <TbAirConditioning className={dimensions} />,
  },
];
