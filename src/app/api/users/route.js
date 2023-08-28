export async function GET(request) {
  const users = [
    { id: 1, name: "ashok" },
    { id: 2, name: "rajasekhar" },
  ];

  return new Response(JSON.stringify(users));
}
