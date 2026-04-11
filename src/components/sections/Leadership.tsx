import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const teamMembers = [
  {
    name: "Dr. Faduma Aden",
    role: "Founder & Executive Director",
    image: "/IMG_0994.JPG.jpeg",
    bio: "A survivor-advocate with over 15 years of experience in community leadership and behavioral change programs.",
  },
  {
    name: "Mohamed Elmi",
    role: "Director of Programs",
    image: "/IMG_0989.JPG.jpeg",
    bio: "Leading our community engagement and policy advocacy efforts across our target regions.",
  },
  {
    name: "Ayan Hussein",
    role: "Head of Communications",
    image: "/IMG_0995.JPG.jpeg",
    bio: "Driving our media outreach and public awareness campaigns for behavioral transformation.",
  },
];

export function Leadership() {
  return (
    <section className="bg-cream py-20 px-8 md:px-12 md:py-24 border-y border-earth/5">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <div className="mb-4 text-[0.72rem] font-medium uppercase tracking-[0.16em] text-terra">
            Our Team
          </div>
          <h2 className="font-serif text-[2.2rem] font-bold text-earth md:text-[2.8rem] mb-6">
            Leading the movement for change
          </h2>
          <p className="mx-auto max-w-2xl text-[1rem] leading-relaxed text-earth-mid">
            Meet the dedicated individuals who lead our mission to end FGM and empower girls in Somali communities.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {teamMembers.map((member) => (
            <Card key={member.name} className="group overflow-hidden border-none bg-sand/30 shadow-none hover:shadow-md transition-all duration-300">
              <div className="relative h-[350px] w-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-8 text-center">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="font-serif text-[1.5rem] font-bold text-earth leading-tight">
                    {member.name}
                  </CardTitle>
                </CardHeader>
                <div className="mb-4 text-[0.75rem] font-bold uppercase tracking-widest text-terra">
                  {member.role}
                </div>
                <p className="text-[0.85rem] leading-relaxed text-earth-mid italic">
                  "{member.bio}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
