import Image from "next/image";

const teamMembers = [
  {
    name: "Ali",
    role: "Frontend Engineer",
    portrait: "/jpg/ali.jpg",
  },
  {
    name: "Nasira",
    role: "Business Developer",
    portrait: "/jpg/nasira.jpg",
  },
  {
    name: "Faraz",
    role: "SEO Specialist",
    portrait: "/jpg/faraz1.jpg",
  },
  {
    name: "Ahsan",
    role: "QA and Product Testing",
    portrait: "/jpg/ahsan.jpg",
  },
  {
    name: "Awais",
    role: "Full-stack Developer",
    portrait: "/jpg/awais1.jpg",
  },
  {
    name: "Abdullah",
    role: "Social Media Manager",
    portrait: "/jpg/abdullah1.jpg",
  },
];

export default function Members() {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-2 sm:px-12 lg:px-16 xl:px-28 xl:pb-20">
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,#0A0A0A_0%,#101010_60%,#0A0A0A_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_25%,rgba(227,81,81,0.14),transparent_40%)]" />

      <div className="mx-auto max-w-6xl rounded-3xl border border-white/12 bg-neutral-900/72 p-6 sm:p-8">
        <div className="text-center">
          <h2 className="font-semibold">
            A multidisciplinary team, built to ship
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-white/80">
            Designers, engineers, and strategists collaborating in one workflow
            to move products from idea to production.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <article
              key={member.name}
              className="rounded-2xl border border-white/12 bg-black/35 p-4 text-center transition-colors duration-300 hover:border-light-primary/45"
            >
              <Image
                src={member.portrait}
                alt={`${member.name} portrait`}
                width={200}
                height={220}
                className="mx-auto h-[150px] w-[150px] rounded-2xl object-cover"
              />
              <h3 className="mt-4 text-lg font-semibold text-white">
                {member.name}
              </h3>
              <p className="mt-1 text-sm text-white/72">{member.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
