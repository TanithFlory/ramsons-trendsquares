import initializeCommunicatorConfig from "../helpers/lxCommunicatorConfig";

export const socket = initializeCommunicatorConfig();

export async function POST(req: Request, res: Response) {
  try {
    const json = await req.json();
    const data = json.body;

    const { ip_address, username, password, controlNode } = data;

    await socket.open("192.168.1.246", "admin", "Modo@2023");
    await socket.send("jdev/sps/enablebinstatusupdate");

    // const serverData = await socket.send("data/LoxAPP3.json");
    // const response2 = await socket.send(
    //   "jdev/sps/io/1b7202a9-0000-a48d-0aff94becc70cadb/state"
    // );
    // console.log(response2);
    // console.log(serverData);
    // console.log(serverData);
    // const response2 = await socket.send(
    //   "/jdev/sps/io/1bd68529-0333-baf0-ffffed57184a04d2/state"
    // );

    return Response.json({
      status: "Okay",
    });
  } catch (error) {
    console.log(error);
    return Response.json({
      status: 501,
      message: "Server Error",
    });
  }
}
