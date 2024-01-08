import initializeCommunicatorConfig from "../helpers/lxCommunicatorConfig";

export async function POST(req: Request, res: Response) {
  await initializeCommunicatorConfig();
}
