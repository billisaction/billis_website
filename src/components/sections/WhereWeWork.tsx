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
    <section className="bg-cream py-20 px-8 md:px-12 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <div className="mb-4 flex items-center justify-center gap-2.5 text-[0.72rem] font-medium uppercase tracking-[0.16em] text-terra">
            <span className="h-px w-7 bg-gold"></span>
            Our Reach
          </div>
          <h2 className="font-serif text-[2.2rem] font-bold text-earth md:text-[2.8rem] mb-6">
            Where we work for change
          </h2>
          <p className="mx-auto max-w-2xl text-[1rem] leading-relaxed text-earth-mid">
            Our mission spans multiple regions, working closely with Somali communities across the globe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {locations.map((location) => (
            <div key={`${location.name}-${location.region}`} className="bg-white border border-earth/10 p-8 rounded-sm shadow-sm transition-all duration-300 hover:border-terra/30 hover:shadow-md">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-terra/10">
                <MapPin className="h-6 w-6 text-terra" />
              </div>
              <h3 className="font-serif text-[1.5rem] font-bold text-earth mb-2">{location.name}</h3>
              <div className="mb-4 text-[0.7rem] font-bold uppercase tracking-widest text-terra">
                {location.region}
              </div>
              <p className="text-[0.85rem] leading-relaxed text-earth-mid">
                {location.focus}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
