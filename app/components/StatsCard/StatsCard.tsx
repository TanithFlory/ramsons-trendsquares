import { IconType } from "react-icons";

interface IProps {
  Icon: React.ReactElement;
  title: string;
}

export default function StatsCard({ Icon, title }: IProps) {
  return (
    <div className="w-[250px] h-[125px] bg-statsBg p-4 rounded-xl border-2 border-outline hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer hover:text-outline hover:bg-black">
      <div className="flex gap-4 items-center">
        <div>{Icon}</div>
        <div>
          <h2 className="font-bold text-sm">{title}</h2>
        </div>
      </div>
      <div className="mt-2 ml-1">
        <p className="text-xs text-textColor font-bold">3 Lights</p>
      </div>
    </div>
  );
}
