import { connect_miniserver, structure_url } from "@/routeDefinitions";
import Image from "next/image";
import assets from "../constants/images";

export async function getStructureData() {
  try {
    const response = await fetch(structure_url);
    const data = await response.json();

    return JSON.parse(data);
  } catch (error) {
    console.log(error);
  }
}

export default async function Rooms() {
  const data = await getStructureData();

  return (
    <div>
      <div className="max-w-[1200px] mx-auto px-6">
        <h1 className="mx-auto max-w-max font-bold text-3xl">ROOMS</h1>
        <div className="grid grid-cols-cards place-items-center gap-y-6">
          {Object.keys(data.rooms).map((key, index) => {
            const { uuid, image, name, isFavorite } = data.rooms[key];
            const { src } =
              (assets as any)[
                image.replace("IconsFilled/", "").replace(".svg", "") //image key has a value pair with 'IconsFilled/{icon}.svg'
              ] || "";
              
            return (
              isFavorite && (
                <div
                  id={uuid}
                  key={index}
                  className="bg-cardColor font-white rounded-md p-6 min-w-[255px] min-h-[135px] flex flex-col items-center justify-center"
                >
                  <div
                    style={{ mask: `url(${src}) no-repeat center` }}
                    className="bg-outline"
                  >
                    {/* <Image
                    src={
                      (assets as any)[
                        image.replace("IconsFilled/", "").replace(".svg", "") //image key has a value pair with 'IconsFilled/{icon}.svg'
                      ]
                    }
                    alt={name}
                    width={100}
                    height={100}
                  /> */}
                  </div>
                  <div className="font-bold">{name}</div>
                </div>
              )
            );
          })}
        </div>
      </div>
    </div>
  );
}
