import initializeCommunicatorConfig from "../helpers/lxCommunicatorConfig";

export const socket = initializeCommunicatorConfig();

export async function POST(req: Request, res: Response) {
  try {
    const json = await req.json();
    const data = json.body;

    const { ip_address, username, password } = data;

    await socket.open(ip_address, username, password);
    const response = await socket.send("jdev/sps/enablebinstatusupdate");

    return Response.json({
      status: 200,
      message: "Connection Successful",
    });
  } catch (error) {
    console.log(error);
    return Response.json({
      status: 501,
      message: "Server Error",
    });
  }
}
