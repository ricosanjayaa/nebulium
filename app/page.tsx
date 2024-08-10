import Journal from "@/components/Journal";
import Project from "@/components/Project";
import Section from "@/components/Section";

export default function Page() {
  const ProjectsData = [
    {
      id: "recipeshare",
      title: "Recipeshare: Interactive Recipe",
      description: "Recipeshare is a website that listing down all the recipes shared by users. (This project is under development)",
      badges: ["Web Development"]
    }
  ];

  const JournalsData = [];

  return (
    <>
      <section className="flex flex-col gap-1">
        <p className="text-xl font-medium">Hello there! 👋</p>
        <p className="opacity-50 text-lg">I{"'"}m Rico Sanjaya, I craft websites that are visually striking and functionally seamless. I also develop digital experiences that are intuitive and user-centric.</p>
      </section>
      <Section label="projects">
        <div className="flex flex-col gap-4 group">
          {ProjectsData.map((data) => (
            <Project title={data.title} description={data.description} badges={data.badges} id={data.id} key={data.id} />
          ))}
        </div>
      </Section>
      <Section label="journal">
        <p className="opacity-50">There is no journal at the moment...</p>
      </Section>
    </>
  );
}