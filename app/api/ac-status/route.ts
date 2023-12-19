import { socket } from "../connect-miniserver/route";

export async function GET(req: Request, res: Response) {
  try {
    await socket.send('/');
    return Response.json({
      status: 200,
      message: "Success",
    });
  } catch (error) {
    console.log(error);
  }
}
