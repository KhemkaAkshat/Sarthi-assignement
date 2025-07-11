import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  try {
    if (body) {
      return NextResponse.json({ emotion: "Anxious", confidence: 0.85 });
    } else {
      return NextResponse.json(
        { error: "Write more about yourself" },
        { status: 400 }
      );
    }
  } catch (err) {
    return NextResponse.json(
        {error:"Internal server error"},
        {status:500}
    )
  }
}
