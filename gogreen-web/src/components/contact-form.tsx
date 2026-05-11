"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "@/components/icons";
import { cn } from "@/lib/cn";

type Field = {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  options?: string[];
  span?: 1 | 2;
  rows?: number;
};

const fields: Field[] = [
  { name: "name", label: "Full name", placeholder: "Madhan K.", required: true },
  { name: "email", label: "Email", type: "email", placeholder: "you@company.com", required: true },
  { name: "phone", label: "Phone", type: "tel", placeholder: "+1 (___) ___-____" },
  { name: "company", label: "Company / Organization", placeholder: "Acme Real Estate" },
  {
    name: "scope",
    label: "Project scope",
    options: [
      "Solar EPC, Commercial",
      "Solar EPC, Residential",
      "Battery Storage / BESS",
      "Removal & Reinstallation (R&R)",
      "Decommissioning",
      "Electrical / O&M",
      "Other",
    ],
    required: true,
  },
  {
    name: "state",
    label: "State",
    options: ["Virginia", "Maryland", "Washington D.C.", "Pennsylvania", "West Virginia", "Delaware", "Other"],
    required: true,
  },
  {
    name: "message",
    label: "Tell us about your project",
    placeholder: "Site, size, timeline, drawings, anything we should know.",
    span: 2,
    rows: 5,
  },
];

export function ContactForm({ minimal = false }: { minimal?: boolean }) {
  const [state, setState] = useState<"idle" | "submitting" | "done">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    await new Promise((r) => setTimeout(r, 800));
    setState("done");
  }

  if (state === "done") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl border border-line bg-white p-10 lg:p-12 text-center max-w-2xl mx-auto"
      >
        <div className="mx-auto size-12 rounded-full bg-accent text-white inline-flex items-center justify-center">
          <Check className="size-5" strokeWidth={2.5} />
        </div>
        <h3 className="mt-6 font-display text-[28px] tracking-tight">Thanks, we&apos;ll be in touch.</h3>
        <p className="mt-3 text-[15px] text-muted max-w-md mx-auto leading-relaxed">
          Your inquiry is in. Our engineering team will respond within 48 hours,
          often sooner. For critical issues, call us directly.
        </p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className={cn(
        "rounded-2xl border border-line bg-white p-6 sm:p-10 lg:p-12 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5",
        minimal && "border-0 bg-transparent p-0",
      )}
    >
      {fields.map((f) => (
        <div key={f.name} className={cn(f.span === 2 && "sm:col-span-2")}>
          <label className="block text-[12.5px] font-medium tracking-tight mb-2">
            {f.label}
            {f.required && <span className="text-accent ml-1">*</span>}
          </label>
          {f.options ? (
            <select
              name={f.name}
              required={f.required}
              defaultValue=""
              className="w-full h-12 rounded-xl border border-line px-3.5 text-[14.5px] bg-bg focus:border-ink outline-none transition-colors"
            >
              <option value="" disabled>Select…</option>
              {f.options.map((o) => (
                <option key={o} value={o}>{o}</option>
              ))}
            </select>
          ) : f.rows ? (
            <textarea
              name={f.name}
              rows={f.rows}
              placeholder={f.placeholder}
              required={f.required}
              className="w-full rounded-xl border border-line p-3.5 text-[14.5px] bg-bg focus:border-ink outline-none transition-colors resize-y"
            />
          ) : (
            <input
              name={f.name}
              type={f.type ?? "text"}
              placeholder={f.placeholder}
              required={f.required}
              className="w-full h-12 rounded-xl border border-line px-3.5 text-[14.5px] bg-bg focus:border-ink outline-none transition-colors"
            />
          )}
        </div>
      ))}

      <div className="sm:col-span-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6 mt-2">
        <p className="text-[12px] text-muted">
          By submitting you agree to be contacted by GoGreen Solutions about your inquiry.
        </p>
        <button
          type="submit"
          disabled={state === "submitting"}
          className="self-start sm:self-auto shrink-0 inline-flex items-center gap-2 h-12 px-6 rounded-full bg-ink text-white text-sm font-medium tracking-tight hover:bg-accent transition-colors disabled:opacity-60"
        >
          {state === "submitting" ? "Sending…" : (
            <>
              Send inquiry
              <ArrowRight className="size-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
