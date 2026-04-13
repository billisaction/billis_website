import { MapPin } from "lucide-react";

const locations = [
  {
    name: "Somali Reginal State",
    region: "East Africa",
    focus: "Community-led behavioral change programs and policy advocacy.",
  },
  {
    name: "Oramia Reginal State",
    region: "East Africa",
    focus: "Empowering adolescent girls through education and support networks.",
  },
  {
    name: "Somali Reginal State",
    region: "Western Europe",
    focus: "Advancing legal protections and community-led awareness initiatives.",
  },
];

export function WhereWeWork() {
  return (
    <section className="bg-earth py-20 px-8 md:px-12 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <div className="mb-4 text-[0.72rem] font-medium uppercase tracking-[0.16em] text-terra-light">
            Our Reach
          </div>
          <h2 className="font-serif text-[2.2rem] font-bold text-sand md:text-[2.8rem] mb-6">
            Where we work for change
          </h2>
          <p className="mx-auto max-w-2xl text-[1rem] leading-relaxed text-[#B8A898]">
            Our mission spans multiple regions, working closely with Somali communities across the globe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {locations.map((location) => (
            <div key={location.name} className="bg-white/5 border border-white/10 p-8 rounded-sm hover:bg-white/10 transition-all duration-300">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-terra/20">
                <MapPin className="h-6 w-6 text-terra" />
              </div>
              <h3 className="font-serif text-[1.5rem] font-bold text-sand mb-2">{location.name}</h3>
              <div className="mb-4 text-[0.7rem] font-bold uppercase tracking-widest text-terra-light">
                {location.region}
              </div>
              <p className="text-[0.85rem] leading-relaxed text-sand/60">
                {location.focus}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
