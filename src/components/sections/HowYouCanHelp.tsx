import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Share2, Users, Mail, HandHeart } from "lucide-react";
import Link from "next/link";

const helpWays = [
  {
    icon: <Share2 className="h-6 w-6 text-terra" />,
    title: "Spread Awareness",
    desc: "Share our mission and impact stories on your social platforms to help us reach more people.",
    cta: "Share Story",
  },
  {
    icon: <Users className="h-6 w-6 text-terra" />,
    title: "Volunteer with Us",
    desc: "Join our dedicated team of volunteers and contribute your skills to support our various programs.",
    cta: "Join Now",
  },
  {
    icon: <Mail className="h-6 w-6 text-terra" />,
    title: "Newsletter Signup",
    desc: "Subscribe to our newsletter and stay updated with our latest initiatives and impact stories.",
    cta: "Subscribe",
  },
  {
    icon: <HandHeart className="h-6 w-6 text-terra" />,
    title: "Partner with Us",
    desc: "Collaborate with us to develop and implement innovative programs for community empowerment.",
    cta: "Contact Us",
  },
];

export function HowYouCanHelp() {
  return (
    <section className="bg-earth py-20 px-8 md:px-12 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <div className="mb-4 text-[0.72rem] font-medium uppercase tracking-[0.16em] text-terra-light">
            Get Involved
          </div>
          <h2 className="font-serif text-[2.2rem] font-bold text-sand md:text-[2.8rem] mb-6">
            Other ways to support our mission
          </h2>
          <p className="mx-auto max-w-2xl text-[1rem] leading-relaxed text-[#B8A898]">
            Beyond donations, there are many ways you can contribute to ending FGM and empowering girls in Somali communities.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          {helpWays.map((way) => (
            <Card key={way.title} className="bg-white/5 border border-white/10 p-6 md:p-8 hover:bg-white/10 transition-all duration-300">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                {way.icon}
              </div>
              <CardHeader className="p-0 mb-4">
                <CardTitle className="font-serif text-[1.25rem] font-bold text-sand leading-tight">
                  {way.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 mb-6">
                <p className="text-[0.85rem] leading-relaxed text-sand/60">
                  {way.desc}
                </p>
              </CardContent>
              <Button 
                variant="outline" 
                className="w-full rounded-sm border-white/20 bg-transparent text-[0.75rem] font-bold uppercase tracking-widest text-sand hover:bg-white hover:text-earth transition-colors"
              >
                {way.cta}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
