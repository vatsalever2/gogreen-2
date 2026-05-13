"use client";

import { useState, useRef } from "react";
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
  autocomplete?: string;
};

const fields: Field[] = [
  { name: "name", label: "Full name", placeholder: "Full Name", required: true, autocomplete: "name" },
  { name: "email", label: "Email", type: "email", placeholder: "you@company.com", required: true, autocomplete: "email" },
  { name: "phone", label: "Phone", type: "tel", placeholder: "+1 (___) ___-____", autocomplete: "tel" },
  { name: "company", label: "Company / Organization", placeholder: "Acme Real Estate", autocomplete: "organization" },
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
    autocomplete: "address-level1",
  },
  {
    name: "message",
    label: "Tell us about your project",
    placeholder: "Site, size, timeline, drawings, anything we should know.",
    span: 2,
    rows: 5,
    autocomplete: "off",
  },
];

const inputBase = "w-full rounded-xl border px-3.5 text-[14.5px] bg-bg transition-colors focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-0 focus-visible:border-accent";

function fieldClass(hasError: boolean) {
  return cn(inputBase, hasError ? "border-red-500 bg-red-50/40" : "border-line");
}

/** Formats up to 10 digits → (XXX) XXX-XXXX */
function formatPhone(digits: string): string {
  const d = digits.slice(0, 10);
  if (d.length < 4) return d;
  if (d.length < 7) return `(${d.slice(0, 3)}) ${d.slice(3)}`;
  return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`;
}

function PhoneInput({ id, hasError, errId }: { id: string; hasError: boolean; errId?: string }) {
  const [display, setDisplay] = useState("");
  const [digits, setDigits]   = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const raw = e.target.value.replace(/\D/g, "").slice(0, 10);
    setDigits(raw);
    setDisplay(formatPhone(raw));
  }

  return (
    <div
      className={cn(
        "flex h-12 rounded-xl border overflow-hidden transition-colors",
        "focus-within:outline-2 focus-within:outline-accent focus-within:outline-offset-0 focus-within:border-accent",
        hasError ? "border-red-500 bg-red-50/40" : "border-line bg-bg",
      )}
    >
      {/* Locked +1 country code */}
      <span
        aria-hidden="true"
        className="flex items-center px-3.5 text-[14.5px] font-medium text-muted border-r border-line bg-zinc-50 select-none whitespace-nowrap"
      >
        +1
      </span>

      {/* Hidden input submits the full formatted value */}
      <input type="hidden" name="phone" value={digits ? `+1 ${formatPhone(digits)}` : ""} />

      {/* Visible input — no name, not submitted directly */}
      <input
        ref={inputRef}
        id={id}
        type="tel"
        inputMode="numeric"
        value={display}
        onChange={handleChange}
        placeholder="(555) 000-0000"
        maxLength={14}
        aria-invalid={hasError}
        aria-describedby={errId}
        autoComplete="tel-national"
        className="flex-1 min-w-0 px-3.5 text-[14.5px] bg-transparent outline-none placeholder:text-zinc-400"
      />
    </div>
  );
}

function validate(data: Record<string, string>) {
  const errs: Record<string, string> = {};
  if (!data.name?.trim()) errs.name = "Name is required";
  if (!data.email?.trim()) errs.email = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errs.email = "Enter a valid email address";
  if (!data.scope) errs.scope = "Please select a project scope";
  if (!data.state) errs.state = "Please select a state";
  return errs;
}

export function ContactForm({ minimal = false }: { minimal?: boolean }) {
  const [status, setStatus] = useState<"idle" | "submitting" | "done">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;

    const errs = validate(data);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      const firstKey = Object.keys(errs)[0];
      document.getElementById(`field-${firstKey}`)?.focus();
      return;
    }

    setErrors({});
    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("non-ok");
      setStatus("done");
    } catch {
      setStatus("idle");
      setErrors({ _form: "Something went wrong. Please try again or contact us directly." });
    }
  }

  if (status === "done") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        role="alert"
        aria-live="polite"
        className="rounded-2xl border border-line bg-white p-10 lg:p-12 text-center max-w-2xl mx-auto"
      >
        <div className="mx-auto size-12 rounded-full bg-accent text-white inline-flex items-center justify-center" aria-hidden="true">
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
      aria-label="Contact inquiry form"
      noValidate
      className={cn(
        "rounded-2xl border border-line bg-white p-6 sm:p-10 lg:p-12 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5",
        minimal && "border-0 bg-transparent p-0",
      )}
    >
      {errors._form && (
        <div
          role="alert"
          className="sm:col-span-2 text-[13px] text-red-700 bg-red-50 border border-red-200 rounded-xl px-4 py-3"
        >
          {errors._form}
        </div>
      )}

      {fields.map((f) => {
        const id = `field-${f.name}`;
        const err = errors[f.name];
        const errId = err ? `${id}-error` : undefined;
        return (
          <div key={f.name} className={cn(f.span === 2 && "sm:col-span-2")}>
            <label htmlFor={id} className="block text-[12.5px] font-medium tracking-tight mb-2">
              {f.label}
              {f.required && <span className="text-accent ml-1" aria-label="required">*</span>}
            </label>

            {f.options ? (
              <select
                id={id}
                name={f.name}
                required={f.required}
                aria-required={f.required}
                aria-invalid={!!err}
                aria-describedby={errId}
                defaultValue=""
                autoComplete={f.autocomplete}
                className={cn(fieldClass(!!err), "h-12")}
              >
                <option value="" disabled>Select…</option>
                {f.options.map((o) => <option key={o} value={o}>{o}</option>)}
              </select>
            ) : f.rows ? (
              <textarea
                id={id}
                name={f.name}
                rows={f.rows}
                placeholder={f.placeholder}
                required={f.required}
                aria-required={f.required}
                aria-invalid={!!err}
                aria-describedby={errId}
                autoComplete={f.autocomplete}
                className={cn(fieldClass(!!err), "p-3.5 resize-y")}
              />
            ) : f.name === "phone" ? (
              <PhoneInput id={id} hasError={!!err} errId={errId} />
            ) : (
              <input
                id={id}
                name={f.name}
                type={f.type ?? "text"}
                placeholder={f.placeholder}
                required={f.required}
                aria-required={f.required}
                aria-invalid={!!err}
                aria-describedby={errId}
                autoComplete={f.autocomplete}
                className={cn(fieldClass(!!err), "h-12")}
              />
            )}

            {err && (
              <p id={errId} role="alert" className="mt-1.5 text-[12px] text-red-600">
                {err}
              </p>
            )}
          </div>
        );
      })}

      {/* SMS Opt-in Consent — optional, unchecked by default */}
      <div className="sm:col-span-2">
        <label className="flex items-start gap-3 cursor-pointer group">
          <input
            type="checkbox"
            name="sms_consent"
            value="yes"
            defaultChecked={false}
            className="mt-0.5 h-4 w-4 shrink-0 rounded border-line accent-accent cursor-pointer"
          />
          <span className="text-[12.5px] text-muted leading-relaxed">
            I consent to receive informational and project-related SMS messages from{" "}
            <strong className="text-ink font-medium">GoGreen Solutions</strong>. Reply{" "}
            <strong className="text-ink font-medium">STOP</strong> to opt-out; Reply{" "}
            <strong className="text-ink font-medium">HELP</strong> for support. Message and data
            rates may apply. Messaging frequency may vary. View our{" "}
            <a
              href="/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline underline-offset-2 hover:text-accent/80 transition-colors"
            >
              Privacy Policy
            </a>
            .
          </span>
        </label>
      </div>

      <div className="sm:col-span-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6 mt-2">
        <p id="form-notice" className="text-[12px] text-muted">
          By submitting you agree to be contacted by GoGreen Solutions about your inquiry.
          Fields marked <span aria-hidden="true">*</span> are required.
        </p>
        <button
          type="submit"
          disabled={status === "submitting"}
          aria-disabled={status === "submitting"}
          aria-describedby="form-notice"
          className="self-start sm:self-auto shrink-0 inline-flex items-center gap-2 h-12 px-6 rounded-full bg-ink text-white text-sm font-medium tracking-tight hover:bg-accent transition-colors disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
        >
          {status === "submitting" ? "Sending…" : (
            <>Send inquiry <ArrowRight className="size-4" /></>
          )}
        </button>
      </div>
    </form>
  );
}
