let selectedAreas = [];

export async function GET() {
  return Response.json({ selectedAreas });
}

export async function POST(request) {
  const { selectedAreas: areas } = await request.json();
  selectedAreas = areas;
  return Response.json({ success: true, selectedAreas });
}
