export default async function getToken(
  env: string,
  tokenApi: string,
  roomId: string,
  role: string
) {
  const userId = "abcd";
  const response = await fetch(tokenApi, {
    method: "POST",
    body: JSON.stringify({
      env: env,
      role: role,
      room_id: roomId,
      user_id: userId
    })
  });

  const { token } = await response.json();
  console.log("Token - ", token);
  return token;
}
