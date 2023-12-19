import {
  MdLightMode,
  MdOutlinePlumbing,
  MdLocalFireDepartment,
  MdElevator,
  MdAir,
} from "react-icons/md";
import { FaParking } from "react-icons/fa";
import { TiBatteryCharge } from "react-icons/ti";
import {
  TbAirConditioning,
  TbLockAccess,
  TbTemperature,
  TbTemperatureCelsius,
} from "react-icons/tb";
import { SiSpringsecurity } from "react-icons/si";
import { SlEnergy } from "react-icons/sl";
import { GiPowerGenerator, GiThermometerCold } from "react-icons/gi";

const dimensions = "h-[25px] w-[25px]";
export const cardData = [
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
export const cardData2 = [
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
    title: "HVAC",
    icon: <TbAirConditioning className={dimensions} />,
    children: (
      <>
        <div className="flex items-center mt-2">
          <svg width="0" height="0">
            <linearGradient
              id="blue-gradient"
              x1="100%"
              y1="100%"
              x2="0%"
              y2="0%"
            >
              <stop stopColor="#7a6ded" offset="50%" />
              <stop stopColor="white" offset="50%" />
            </linearGradient>
          </svg>
          <div className="text-sm flex flex-col items-center">
            <div className="flex items-center">
              <TbTemperature
                style={{ stroke: "url(#blue-gradient)" }}
                className="h-[35px] w-[35px]"
              />
              <div className="flex items-center">
                <span className="font-bold text-sm">27</span>
                <TbTemperatureCelsius className="w-[19px] h-[19px]" />
              </div>
            </div>
          </div>
        </div>
        <div className="text-sm flex flex-col items-center justify-around mt-2">
          <div className="flex items-center gap-1">
            <GiThermometerCold className="w-[30px] h-[30px] fill-[#4CB9E7]" />
            <span>Comfort</span>
          </div>
        </div>
      </>
    ),
  },
];
