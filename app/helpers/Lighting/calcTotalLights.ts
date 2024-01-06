export default function calcTotalLights(data: string) {
  const objects = JSON.parse(data);
  let totalLights: number = 0;

  Object.values(objects.controls).forEach((item) => {
    if (item.type === "CentralLightController") {
      totalLights = item.details.controls.length;
    }
  });

  return totalLights;
}
