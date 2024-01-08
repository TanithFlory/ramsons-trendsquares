export async function getStructure(socket: any) {
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
