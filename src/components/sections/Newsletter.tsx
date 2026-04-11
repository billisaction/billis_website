"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setEmail("");
    }, 1500);
  };

  return (
    <section className="bg-sand py-20 px-8 md:px-12 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-16">
          <div>
            <div className="mb-4 text-[0.72rem] font-medium uppercase tracking-[0.16em] text-terra">
              Stay Connected
            </div>
            <h2 className="font-serif text-[2.2rem] font-bold text-earth md:text-[2.8rem] mb-6 leading-tight">
              Join our community of courage
            </h2>
            <p className="text-[1.1rem] leading-relaxed text-earth-mid max-w-xl">
              Receive monthly updates on our programs, impact stories, and ways to support our mission. We respect your privacy.
            </p>
          </div>

          <div className="bg-cream p-8 md:p-12 rounded-sm border border-earth/5 shadow-sm">
            {isSuccess ? (
              <div className="text-center">
                <div className="h-16 w-16 bg-terra/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send className="h-8 w-8 text-terra" />
                </div>
                <h3 className="font-serif text-[1.5rem] font-bold text-earth mb-4">Thank you for joining us!</h3>
                <p className="text-[0.95rem] text-earth-mid mb-8">
                  You've successfully subscribed to our newsletter. We'll be in touch soon.
                </p>
                <Button onClick={() => setIsSuccess(false)} variant="outline" className="rounded-sm border-terra text-terra hover:bg-terra hover:text-white transition-colors">
                  Subscribe Another Email
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-[0.8rem] font-bold uppercase tracking-widest text-earth/60">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    id="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-14 rounded-sm border-earth/10 bg-white px-6 focus:ring-terra focus:border-terra"
                  />
                </div>
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="h-14 rounded-sm bg-terra text-white uppercase tracking-widest text-[0.9rem] font-bold hover:bg-terra-light transition-all duration-300"
                >
                  {isSubmitting ? "Subscribing..." : "Join Our Newsletter"}
                </Button>
                <p className="text-[0.75rem] text-earth-mid text-center italic">
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
