import { socket } from "../connect-miniserver/route";

export async function GET(_req: Request, res: Response) {
  await socket.open("192.168.1.246", "admin", "Modo@2023");

  try {
    const response = await socket.send("data/LoxAPP3.json");

    return Response.json(response);
  } catch (error) {
    console.log(error);
    return Response.json({
      status: "Failed",
    });
  }
}
