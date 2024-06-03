import { NextRequest } from "next/server";
import { Resend } from "resend";

export async function POST(request: NextRequest) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await request.json();
    const { email, name, message } = body;

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "sain.biswas16409@gmail.com",
      subject: "Contact from Portfolio Website",
      html: `<div> <p>Email from : ${name}</p> <p> Reply on Email: ${email} </p> <p> ${message} </p> </div>`,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    console.log("Success");
    return Response.json(data);
  } catch (error) {
    console.log(error);
    return Response.json({ error }, { status: 500 });
  }
}
