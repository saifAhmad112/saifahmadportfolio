import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !message) {
      return NextResponse.json(
        { error: "Name and message are required" },
        { status: 400 }
      );
    }

    await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "0587b1c1-19d8-4b71-b0e2-6eb6d3d49b06",
        to_email: "saif.sid6@gmail.com",
        name,
        email: email || "Not provided",
        subject: subject || `New Inquiry from ${name}`,
        message,
        from_name: "Saif Portfolio Contact Form",
      }),
    });

    return NextResponse.json({
      success: true,
      message: "Message processed successfully",
    });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
