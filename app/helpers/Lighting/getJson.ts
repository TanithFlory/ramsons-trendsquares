export default function getJson(text: string) {
  try {
    const data = JSON.parse(text);
    return data;
  } catch (error) {}
}
