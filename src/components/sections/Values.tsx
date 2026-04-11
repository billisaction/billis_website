import { Shield, Heart, Eye, Handshake } from "lucide-react";

const values = [
  {
    icon: <Shield className="h-8 w-8 text-terra" />,
    title: "Protection",
    desc: "We prioritize the safety and bodily autonomy of every girl in the communities we serve.",
  },
  {
    icon: <Heart className="h-8 w-8 text-terra" />,
    title: "Dignity",
    desc: "We uphold the inherent rights and dignity of survivors, ensuring their voices lead our initiatives.",
  },
  {
    icon: <Eye className="h-8 w-8 text-terra" />,
    title: "Transparency",
    desc: "We are committed to open governance and clear communication with our partners and the public.",
  },
  {
    icon: <Handshake className="h-8 w-8 text-terra" />,
    title: "Collaboration",
    desc: "We believe in the power of working together with community leaders to drive lasting change.",
  },
];

export function Values() {
  return (
    <section className="bg-sand py-20 px-8 md:px-12 md:py-24">
      <div className="mx-auto max-w-7xl text-center">
        <div className="mb-4 text-[0.72rem] font-medium uppercase tracking-[0.16em] text-terra">
          Our Foundation
        </div>
        <h2 className="font-serif text-[2.2rem] font-bold text-earth md:text-[2.8rem] mb-12">
          The values that guide us
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {values.map((value) => (
            <div key={value.title} className="bg-cream p-8 rounded-sm border border-earth/5 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-6 flex justify-center">
                {value.icon}
              </div>
              <h3 className="font-serif text-[1.25rem] font-bold text-earth mb-4">{value.title}</h3>
              <p className="text-[0.85rem] leading-relaxed text-earth-mid">
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
