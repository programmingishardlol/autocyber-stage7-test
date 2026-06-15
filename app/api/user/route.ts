// app/api/user/route.ts
export async function GET() {
  const user = await currentUser();
  if (!user) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  return Response.json({ email: "test@example.com" });
}
