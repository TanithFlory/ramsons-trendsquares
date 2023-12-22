import { TbTemperature, TbTemperatureCelsius } from "react-icons/tb";

interface IProps {
  Icon: React.ReactElement;
  title: string;
  children?: React.ReactNode;
}

export default function StatsCard({ Icon, title, children }: IProps) {
  return (
    <div className="flex flex-col items-center justify-center w-[250px] h-[129px] bg-statsBg p-4 rounded-xl border-[1px] border-outline hover:scale-105 group transition-all duration-500 ease-in-out cursor-pointer  hover:bg-black">
      <div className="flex gap-4 items-center">
        <div>{Icon}</div>
        <div>
          <h2 className="font-bold text-sm">{title}</h2>
        </div>
      </div>
      <div className="mt-2 flex gap-4 justify-center">{children}</div>
    </div>
  );
}
