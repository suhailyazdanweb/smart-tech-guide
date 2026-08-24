"use client";

import { useState } from "react";

const initialForm = { name: "", email: "", project: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: "idle", message: "" });

  function updateField(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
    if (status.type !== "idle") setStatus({ type: "idle", message: "" });
  }

  function submitForm(event) {
    event.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.project || !form.message.trim()) {
      setStatus({ type: "error", message: "Please complete each required field." });
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      setStatus({ type: "error", message: "Please enter a valid email address." });
      return;
    }
    const subject = encodeURIComponent(`Project enquiry from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nProject: ${form.project}\n\n${form.message}`);
    setStatus({ type: "success", message: "Your enquiry is ready. Your email client will open to send it." });
    window.location.href = `mailto:hello@smarttechguide.com?subject=${subject}&body=${body}`;
  }

  return (
    <form className="grid gap-8" onSubmit={submitForm} noValidate>
      <div className="grid grid-cols-2 gap-5 max-[640px]:grid-cols-1">
        <label className="grid gap-2 text-[10px] font-bold uppercase tracking-[.1em]">Name <input className="border-b border-[var(--line)] bg-transparent px-0 py-3 text-base font-normal normal-case tracking-normal outline-none transition focus:border-[var(--teal-dark)]" name="name" value={form.name} onChange={updateField} required /></label>
        <label className="grid gap-2 text-[10px] font-bold uppercase tracking-[.1em]">Email <input className="border-b border-[var(--line)] bg-transparent px-0 py-3 text-base font-normal normal-case tracking-normal outline-none transition focus:border-[var(--teal-dark)]" name="email" type="email" value={form.email} onChange={updateField} required /></label>
      </div>
      <label className="grid gap-2 text-[10px] font-bold uppercase tracking-[.1em]">Project / service <select className="border-b border-[var(--line)] bg-transparent px-0 py-3 text-base font-normal tracking-normal outline-none transition focus:border-[var(--teal-dark)]" name="project" value={form.project} onChange={updateField} required><option value="">Select a direction</option><option>Web Design</option><option>Web Development</option><option>UI/UX Design</option><option>Graphic Design</option><option>Something else</option></select></label>
      <label className="grid gap-2 text-[10px] font-bold uppercase tracking-[.1em]">Project details <textarea className="min-h-32 resize-y border-b border-[var(--line)] bg-transparent px-0 py-3 text-base font-normal normal-case tracking-normal outline-none transition focus:border-[var(--teal-dark)]" name="message" value={form.message} onChange={updateField} required /></label>
      <button className="inline-flex min-h-[52px] w-fit items-center justify-center gap-4 bg-[var(--teal)] px-[21px] text-xs font-bold uppercase tracking-[.08em] transition hover:-translate-y-0.5 hover:bg-[var(--coral)]" type="submit">Start the conversation <span className="text-[17px]">↗</span></button>
      <p className={`text-sm ${status.type === "error" ? "text-[var(--coral)]" : "text-[var(--teal-dark)]"}`} role="status" aria-live="polite">{status.message}</p>
    </form>
  );
}
