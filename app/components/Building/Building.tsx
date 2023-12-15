import Image from "next/image";
import buildingImage from "../../assets/3dBuilding.png";

export default function Building() {
  return (
    <div className="absolute left-[50%] translate-x-[-50%]">
      <Image
        src={buildingImage}
        alt="building"
        className="h-full max-w-[600px] mx-auto"
      />
    </div>
  );
}
