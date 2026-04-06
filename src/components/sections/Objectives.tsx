import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Objectives() {
  const objectives = [
    {
      num: "01",
      title: "Awareness & behaviour change through media",
      desc: "Using powerful media to shift public understanding and drive meaningful change in attitudes toward FGM.",
    },
    {
      num: "02",
      title: "Adolescent girl empowerment",
      desc: "Giving girls knowledge, life skills, and the confidence to know and demand their rights.",
    },
    {
      num: "03",
      title: "Family & community engagement",
      desc: "Involving families, religious leaders, and men as partners in protection — online and offline.",
    },
    {
      num: "04",
      title: "Protection & referral systems",
      desc: "Strengthening community-based networks so girls at risk have safe paths to support and safety.",
    },
    {
      num: "05",
      title: "Legal & policy advocacy",
      desc: "Advocating for laws to be enforced, and ensuring that protection on paper becomes protection in practice.",
    },
  ];

  return (
    <section id="about" className="bg-sand px-8 py-20 md:px-12 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <div className="mb-4 text-[0.72rem] font-medium uppercase tracking-[0.16em] text-terra">
            Our objectives
          </div>
          <h2 className="font-serif text-[2.2rem] font-bold text-earth md:text-[2.8rem]">
            Five pillars of change
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
          {objectives.map((obj) => (
            <Card
              key={obj.num}
              className="group rounded-sm border-none bg-cream p-6 shadow-sm transition-all duration-300 hover:border-t-4 hover:border-terra"
            >
              <CardHeader className="p-0 mb-4">
                <div className="font-serif text-[1.8rem] font-black text-sand-dark">
                  {obj.num}
                </div>
                <CardTitle className="mt-2 text-[0.82rem] font-medium leading-tight text-earth">
                  {obj.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-[0.75rem] leading-relaxed text-earth-mid">
                  {obj.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
