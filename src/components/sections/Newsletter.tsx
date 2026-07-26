"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle2, Loader2, Send } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email.trim() || !/^[\w.!#$%&'*+/=?^`{|}~-]+@[\w-]+(?:\.[\w-]+)+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);
    // Placeholder until a real email provider is connected
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setEmail("");
    }, 1200);
  };

  return (
    <section id="newsletter" className="bg-cream py-20 px-6 sm:px-8 md:px-12 md:py-24" aria-labelledby="newsletter-heading">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
          <div>
            <div className="mb-4 flex items-center gap-2.5 text-[0.72rem] font-medium uppercase tracking-[0.16em] text-terra">
              <span className="h-px w-7 bg-gold" aria-hidden="true" />
              Stay Connected
            </div>
            <h2
              id="newsletter-heading"
              className="mb-6 font-serif text-[2.2rem] font-bold leading-tight text-earth md:text-[2.8rem]"
            >
              Join our community of courage
            </h2>
            <p className="max-w-xl text-[1.1rem] leading-relaxed text-earth-mid">
              Receive monthly updates on our programs, impact stories, and ways to support our mission. We respect your privacy.
            </p>
          </div>

          <div className="rounded-sm border border-earth/5 bg-cream p-8 shadow-sm md:p-12">
            {isSuccess ? (
              <div className="text-center" role="status" aria-live="polite">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-terra/10">
                  <CheckCircle2 className="h-8 w-8 text-terra" aria-hidden="true" />
                </div>
                <h3 className="mb-4 font-serif text-[1.5rem] font-bold text-earth">
                  Thank you for joining us!
                </h3>
                <p className="mb-8 text-[0.95rem] text-earth-mid">
                  You&apos;ve successfully subscribed to our newsletter. We&apos;ll be in touch soon.
                </p>
                <Button
                  onClick={() => setIsSuccess(false)}
                  variant="outline"
                  className="min-h-11 rounded-sm border-terra text-terra transition-colors duration-200 hover:bg-terra hover:text-white"
                >
                  Subscribe Another Email
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="newsletter-email"
                    className="text-[0.8rem] font-bold uppercase tracking-widest text-earth"
                  >
                    Email Address
                  </label>
                  <Input
                    type="email"
                    id="newsletter-email"
                    name="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError("");
                    }}
                    required
                    aria-invalid={Boolean(error)}
                    aria-describedby={error ? "newsletter-email-error" : "newsletter-privacy"}
                    className="h-14 rounded-sm border-earth/15 bg-white px-6 text-earth transition-colors duration-200 focus-visible:border-terra focus-visible:ring-terra"
                  />
                  {error ? (
                    <p
                      id="newsletter-email-error"
                      role="alert"
                      className="text-[0.85rem] text-red-700"
                    >
                      {error}
                    </p>
                  ) : null}
                </div>
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="flex h-14 min-h-12 items-center justify-center gap-2 rounded-sm bg-terra text-[0.9rem] font-bold uppercase tracking-widest text-white transition-all duration-200 hover:bg-terra-light disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                      Subscribing...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" aria-hidden="true" />
                      Join Our Newsletter
                    </>
                  )}
                </Button>
                <p id="newsletter-privacy" className="text-center text-[0.75rem] leading-relaxed text-earth-mid">
                  By joining, you agree to receive our latest updates and impact stories. 
                  You can unsubscribe at any time.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
