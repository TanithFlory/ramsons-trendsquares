export default async function parseJson<T>(data: string) {
  try {
    const objects: T = await JSON.parse(data);

    return objects;
  } catch (error) {
    console.log(error);
  }
}
