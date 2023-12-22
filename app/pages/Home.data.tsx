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
import { FaRegLightbulb } from "react-icons/fa";
import { GiValve } from "react-icons/gi";
import { AiOutlineSafety } from "react-icons/ai";
import { BsFillFuelPumpDieselFill } from "react-icons/bs";
import { ImPowerCord } from "react-icons/im";
import { FaDoorClosed, FaDoorOpen } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { TiTickOutline } from "react-icons/ti";
import { CiBatteryCharging } from "react-icons/ci";
import { FiAlertTriangle } from "react-icons/fi";

const dimensions = "h-[25px] w-[25px]";

function StatWrapper({
  children,
  styles,
}: {
  children: React.ReactNode;
  styles?: string;
}) {
  return (
    <div
      className={`flex items-center gap-1 flex-wrap text-sm justify-center ${styles}`}
    >
      {children}
    </div>
  );
}

/*TODO: Icon fill % depending on parameter level.*/

export const cardData = [
  {
    title: "Lightning",
    icon: <MdLightMode className={dimensions} />,
    children: (
      <StatWrapper>
        <FaRegLightbulb className={`${dimensions} fill-[#FFEA00]`} />
        <span>On in 3 rooms</span>
      </StatWrapper>
    ),
  },
  {
    title: "Plumbing",
    icon: <MdOutlinePlumbing className={dimensions} />,
    children: (
      <StatWrapper>
        <StatWrapper>
          <GiValve className={`${dimensions} fill-[#FFEA00]`} />
          <span>Total Valves 3</span>
        </StatWrapper>
        <StatWrapper>
          <GiValve className={`${dimensions} fill-[#ff2600]`} />
          <span>Faulty Valves 3</span>
        </StatWrapper>
      </StatWrapper>
    ),
  },
  {
    title: "Fire Suppression",
    icon: <MdLocalFireDepartment className={dimensions} />,
    children: (
      <StatWrapper>
        <AiOutlineSafety className={`${dimensions} !fill-[#30f807]`} />
        <span>No alerts</span>
      </StatWrapper>
    ),
  },
  {
    title: "Passenger Elevators",
    icon: <MdElevator className={dimensions} />,
    children: (
      <StatWrapper>
        <AiOutlineSafety className={`${dimensions} !fill-[#30f807]`} />
        <span>All elveators working</span>
      </StatWrapper>
    ),
  },
  {
    title: "Backup DG",
    icon: <GiPowerGenerator className={dimensions} />,
    children: (
      <StatWrapper>
        <StatWrapper>
          <BsFillFuelPumpDieselFill
            className={`${dimensions} fill-[#8400ff]`}
          />
          <span>Fuel Level</span>
        </StatWrapper>
        <StatWrapper>
          <SlEnergy className={`${dimensions} fill-[#fc560a]`} />
          <span>Consumption</span>
        </StatWrapper>
      </StatWrapper>
    ),
  },
  {
    title: "EV Charge",
    icon: <TiBatteryCharge className={dimensions} />,
    children: (
      <StatWrapper>
        <StatWrapper>
          <ImPowerCord className={`${dimensions} fill-[#30f807]`} />
          <span>Current Power: </span>
        </StatWrapper>
        <StatWrapper>
          <SlEnergy className={`${dimensions} fill-[#fc560a]`} />
          <span>Target Power: </span>
        </StatWrapper>
      </StatWrapper>
    ),
  },
];
export const cardData2 = [
  {
    title: "Energy Monitoring",
    icon: <SlEnergy className={dimensions} />,
    children: (
      <StatWrapper>
        <StatWrapper>
          <SlEnergy className={`${dimensions} fill-[#fc560a]`} />
          <span>Consumption: </span>
        </StatWrapper>
        <StatWrapper>
          <span>Monthly Consumption:</span>{" "}
        </StatWrapper>
      </StatWrapper>
    ),
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
            <GiThermometerCold className={`${dimensions} fill-[#4CB9E7]`} />
            <span>Comfort</span>
          </div>
        </div>
      </>
    ),
  },
  {
    title: "Security",
    icon: <SiSpringsecurity className={dimensions} />,
    children: (
      <StatWrapper>
        <StatWrapper>
          <MdOutlineSecurity className={`${dimensions} fill-[#30f807]`} />
          <span>Armed</span>
        </StatWrapper>
        <StatWrapper>
          <MdOutlineSecurity className={`${dimensions} fill-[#6d6d6d]`} />
          <span>Disarmed</span>
        </StatWrapper>
      </StatWrapper>
    ),
  },
  {
    title: "Access",
    icon: <TbLockAccess className={dimensions} />,
    children: (
      <StatWrapper>
        <StatWrapper>
          <FaDoorOpen className={`${dimensions} fill-[#ffffff]`} />
          <span>Doors open: </span>
        </StatWrapper>
        <StatWrapper>
          <FaDoorClosed className={`${dimensions} fill-[#686868]`} />
          <span>Doors closed: </span>
        </StatWrapper>
      </StatWrapper>
    ),
  },
  {
    title: "Parking",
    icon: <FaParking className={dimensions} />,
    children: (
      <StatWrapper>
        <TiTickOutline className={`${dimensions} fill-[#30f807]`} />
        <span>Available Parking Spots: </span>
      </StatWrapper>
    ),
  },
  {
    title: "UPS",
    icon: <MdAir className={dimensions} />,
    children: (
      <StatWrapper styles="flex-col">
        <StatWrapper>
          <CiBatteryCharging className={`${dimensions} fill-[#30f807]`} />
          <span>Total users</span>
        </StatWrapper>
        <StatWrapper>
          <FiAlertTriangle className={`${dimensions} fill-[#ff0000]`} />
          <span>Alert: Overloaded</span>
        </StatWrapper>
        <StatWrapper>
          <SlEnergy className={`${dimensions} fill-[#30f807]`} />
          <span>Load: </span>
        </StatWrapper>
      </StatWrapper>
    ),
  },
];
