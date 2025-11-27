export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  if (!name) {
    return Response.json({ error: "Name is required" }, { status: 400 });
  }

  console.log("New contact form submission:", name, email, message);

  return Response.json({ message: `Thanks for contacting us, ${name}!` });
}
