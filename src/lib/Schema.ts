
import { z } from "zod"

export const formSchema = z.object({
  fullName: z.string().min(2, "Name is too short").max(50),
  phoneNo: z.string().min(10, "Phone number is too short").max(15),
  email: z.string().email("Invalid email address"),
  message: z.string().min(2, "Message is too short"),
})