import { MAILTO_SUBJECT_AR, SITE } from "./site";

export type ContactFormStatus = "idle" | "success" | "error";

export async function submitContactForm(formData: FormData): Promise<ContactFormStatus> {
  const payload = {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    phone: String(formData.get("phone") ?? "") || undefined,
    message: String(formData.get("message") ?? ""),
  };

  const subject = encodeURIComponent(MAILTO_SUBJECT_AR);
  const body = encodeURIComponent(
    [`Name: ${payload.name}`, `Email: ${payload.email}`, payload.phone ? `Phone: ${payload.phone}` : "", "", payload.message]
      .filter(Boolean)
      .join("\n")
  );

  try {
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
    return "success";
  } catch {
    return "error";
  }
}
