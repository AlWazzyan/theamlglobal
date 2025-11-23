import {
  EmailTemplate,
  EmailTemplateProps,
} from "@/components/templates/email-template";
import { NextApiResponse } from "next";
import { Resend } from "resend";

// const resend = new Resend("re_EyS3fdrT_L9g7JPzSbYU4DGYH8zQYb4hJ");
const resend = new Resend("re_SM9QAtWS_5uC3Kk1ZFxqAv1xFaf85R97h");

export async function POST(req: Request) {
  const request = await req.json();
  console.log(request, "requestr");
  try {
    const { data, error } = await resend.emails.send({
      from: "AML <dev@ekeoam.com>",
      to: ["Williamcorteg@gmail.com"],
      subject: "New user notificagtion",
      react: EmailTemplate({ ...request }),
    });

    if (error) {
      console.log(error);
      return Response.json({ error }, { status: 500 });
    }

    console.log(data);
    return Response.json(data);
  } catch (error) {
    console.log(error);
    return Response.json({ error }, { status: 500 });
  }
}
