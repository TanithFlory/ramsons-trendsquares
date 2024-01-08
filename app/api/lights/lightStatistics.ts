import parseJson from "@/app/api/helpers/parseJson";

/**
 * Calculates the total number of lights turned on.
 *
 * @param {string} dataStructure - The JSON string representing the data structure of Miniserver, LoxoneAPPJson.
 * @param {any} events - The events data produced by ws.
 * @param {number} currentNumOfLightsOn - The total lights on (Need to retain the value)
 * @returns {Promise<[numOfLights: number, currentNumOfLightsOn: number]>} - Total number of lights turned on.
 */
export default async function lightStatistics(
  dataStructure: string,
  events: any,
  currentNumOfLightsOn: number
): Promise<[numOfLights: number, currentNumOfLightsOn: number] | undefined> {
  const objects = await parseJson<Record<string, string>>(dataStructure);
  let numOfLights = 0;
  let activeMoodsUuid: string[] = [];

  if (!objects) return;

  const iterableObject = Object.values(objects.controls);
  for (const item of iterableObject) {
    if (item.type !== "CentralLightController") continue;

    numOfLights = item.details.controls.length;

    for (const innerItem of item.details.controls) {
      activeMoodsUuid.push(
        (objects.controls[innerItem.uuid] as any).states.activeMoods
      );
    }
  }
  // console.log(activeMoodsUuid)
  for (const event of events) {
    console.log(event)
    for (const item of activeMoodsUuid) {
      if (item === event.uuid) {
        const data = await parseJson<number[]>(event.text);
        if (data?.[0] === 778) {
          // 778 is OFF.
          currentNumOfLightsOn--;
        } else {
          currentNumOfLightsOn++;
        }
      }
    }
  }
  
  return [numOfLights, currentNumOfLightsOn];
}
