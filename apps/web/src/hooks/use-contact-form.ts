import { useState } from "react";
import type { ContactFormStatus } from "@/lib/home/submit-contact-form";
import { submitContactForm } from "@/lib/home/submit-contact-form";

export function useContactForm() {
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<ContactFormStatus>("idle");

  async function submit(formData: FormData) {
    setSending(true);
    setStatus("idle");
    try {
      const next = await submitContactForm(formData);
      setStatus(next);
    } catch {
      setStatus("error");
    } finally {
      setSending(false);
    }
  }

  return { sending, status, submit };
}
