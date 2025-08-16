"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { formSchema } from "@/lib/Schema"
import z from "zod"
import { send } from "@/lib/email"


const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { fullName: "", phoneNo: "", email: "", message: "" },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    send(values)
    await new Promise(res => setTimeout(res, 2000))
    form.reset()
  }

  const fields = [
    { name: "fullName", label: "Full Name", placeholder: "Nishul dhakar" },
    { name: "phoneNo", label: "Phone Number", placeholder: "+91 1234567890" },
    { name: "email", label: "Email", placeholder: "example@email.com" },
    { name: "message", label: "Message", placeholder: "Type your message here...", isTextarea: true },
  ]

  return (
<section className="w-full">
  <div className="mb-8">

    <p className="text-gray-400 mb-2">Have an idea, collaboration, or just want to say hi?</p>
    <p className="text-gray-400">Drop me a message.</p>
  </div>

  <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {fields.slice(0, 2).map(({ name, label, placeholder }) => (
          <FormField
            key={name}
            control={form.control}
            name={name as keyof z.infer<typeof formSchema>}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{label}</FormLabel>
                <FormControl>
                  <Input placeholder={placeholder} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
      </div>

      {fields.slice(2).map(({ name, label, placeholder, isTextarea }) => (
        <FormField
          key={name}
          control={form.control}
          name={name as keyof z.infer<typeof formSchema>}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{label}</FormLabel>
              <FormControl>
                {isTextarea ? (
                  <Textarea placeholder={placeholder} rows={6} {...field} />
                ) : (
                  <Input placeholder={placeholder} {...field} />
                )}
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      ))}

      <Button type="submit" disabled={form.formState.isSubmitting}>
        {form.formState.isSubmitting ? (
          <div className="flex items-center justify-center gap-3">
            <div className="w-5 h-5 border-2 border-gray-400 border-t-black rounded-full animate-spin" />
            Sending Message...
          </div>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  </Form>
</section>

  )
}

export default ContactForm
