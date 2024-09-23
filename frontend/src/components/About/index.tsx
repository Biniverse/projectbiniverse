import { TeamMember } from "../../shared/types";

const teamMembers: TeamMember[] = [
  {
    name: "Edward Joseph A. Habon",
    role: "Fullstack Developer",
    bio: "Maybe we got lost in translation",
    imageUrl: "/images/edward.jpg",
  },
  {
    name: "John Patrick Ryan D. Mandal",
    role: "Fullstack Developer",
    bio: "Maybe I asked for too much",
    imageUrl: "/images/ptrck.jpg",
  },
  {
    name: "Ron Dave Fredrick N. Talledo",
    role: "Fullstack Developer",
    bio: "But maybe this thing was a masterpiece",
    imageUrl: "/images/ron.jpg",
  },
  {
    name: "Stephen S. Abueva",
    role: "Fullstack Developer",
    bio: "til you tore it all up",
    imageUrl: "/images/images.jpg",
  },
  {
    name: "Jovany S. Opelina",
    role: "Fullstack Developer",
    bio: "Running scared, I was there",
    imageUrl: "/images/jovany.jpg",
  },
  {
    name: "Ester S. Hubahib",
    role: "Fullstack Developer",
    bio: "I remember it all too well",
    imageUrl: "/images/images.jpg",
  },
];

export const AboutUsComponent = () => {
  return (
    <section className="mb-5">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-extrabold text-gray-800 mb-8">
          Meet the Team
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="w-full h-64 overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={member.imageUrl}
                  alt={member.name}
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-600 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
