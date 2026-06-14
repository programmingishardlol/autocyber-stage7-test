// app/api/user/route.ts
export async function GET() {
  return Response.json({ email: "test@example.com" });
}