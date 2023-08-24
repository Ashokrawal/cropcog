export async function GET(request) {
  const users = [
    { id: 1, name: "ashok" },
    { id: 2, name: "mohan" },
  ];

  return new Response(JSON.stringify(users));
}
