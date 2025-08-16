"use server"

import { z } from "zod"
import { formSchema } from "./Schema"
import { Resend } from "resend"
import { EmailTemplate } from "@/components/Contact/email-tamplate"

const resend = new Resend(process.env.RESEND_API_KEY || "")

export const send = async (emailFormData: z.infer<typeof formSchema>) => {
  try {
    const { data, error } = await resend.emails.send({
      from: `Nishul from ProjectFolio <${process.env.RESEND_FORM_EMAIL}>`, 
      to: ["nishuldhakar123@gmail.com"], 
      subject: `New Contact Form Submission from ${emailFormData.fullName}`,
      replyTo: emailFormData.email,
      react: EmailTemplate({
        fullName: emailFormData.fullName,
        email: emailFormData.email,
        phoneNo: emailFormData.phoneNo,
        message: emailFormData.message,
      }),
    })

    if (error) {
      return { success: false, error }
    }
    return { success: true, data }
  } catch (err) {
    console.error("Email send failed:", err);
    return { success: false, error: "Unexpected server error" }
  }
}
