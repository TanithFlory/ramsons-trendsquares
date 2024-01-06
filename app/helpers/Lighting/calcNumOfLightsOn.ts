export default function calcTotalLightsOn(data: string) {
  const objects = JSON.parse(data);
  let activeMoodsUuid: string[] = [];
  const iterableObject = Object.values(objects.controls);
  iterableObject.forEach((item) => {
    if (item.type === "CentralLightController") {
      item.details.controls.forEach((item) => {
        activeMoodsUuid.push(objects.controls[item.uuid].states.activeMoods);
      });
    }
  });

  return activeMoodsUuid;
}
