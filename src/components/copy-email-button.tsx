"use client";

import { Check, Copy } from "lucide-react";
import { useEffect, useState } from "react";

export function CopyEmailButton({ email }: { email: string }) {
  const [status, setStatus] = useState<"idle" | "copied" | "failed">("idle");

  useEffect(() => {
    if (status === "idle") return;
    const timer = window.setTimeout(() => setStatus("idle"), 2400);
    return () => window.clearTimeout(timer);
  }, [status]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setStatus("copied");
    } catch {
      setStatus("failed");
    }
  };

  return <>
    <button type="button" className="button secondary copy-email" onClick={copy}>
      {status === "copied" ? <Check aria-hidden /> : <Copy aria-hidden />}
      {status === "copied" ? "Email copied" : status === "failed" ? email : "Copy email"}
    </button>
    <span className="sr-only" role="status">
      {status === "copied" ? `${email} copied to clipboard` : status === "failed" ? `Couldn't copy. The address is ${email}` : ""}
    </span>
  </>;
}
