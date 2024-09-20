import { TeamMember } from "../../shared/types";

const teamMembers: TeamMember[] = [
  {
    name: "Edward Joseph A. Habon",
    role: "FullSnack Developer",
    bio: "likes to eat pancit",
    imageUrl: "/images/images.jpg",
  },
  {
    name: "Ester S. Hubahib",
    role: "FullSnack Developer",

    bio: "likes to eat pancit",
    imageUrl: "/images/images.jpg",
  },
  {
    name: "John Patrick Ryan D. Mandal",
    role: "FullSnack Developer",

    bio: "likes to eat pancit",
    imageUrl: "/images/images.jpg",
  },
  {
    name: "Jovany S. Opelina",
    role: "FullSnack Developer",

    bio: "likes to eat pancit",
    imageUrl: "/images/images.jpg",
  },
  {
    name: "Stephen S. Abueva",
    role: "FullSnack Developer",

    bio: "likes to eat pancit",
    imageUrl: "/images/images.jpg",
  },
  {
    name: "Ron Dave N. Talledo",
    role: "FullSnack Developer",

    bio: "likes to eat pancit",
    imageUrl: "/images/images.jpg",
  },
];
export const AboutUsComponent = () => {
  return (
    <section className="mb-5">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">About Us</h2>
        <p className="text-lg text-gray-600 mb-12">
          We are a team of passionate individuals dedicated to the side quests
          grind.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                className="w-full h-56 object-cover"
                src={member.imageUrl}
                alt={member.name}
              />
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
