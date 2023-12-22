import { socket } from "../connect-miniserver/route";

export async function POST(req: Request, res: Response) {
  try {
    await socket.send('/jdev/sps/io/19657c36-0168-e0b8-ffffed57184a04d2/state');
    return Response.json({
      status: 200,
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return Response.json({
      status: 500,
      message: "Error",
    });
  }
}
