import Dropdown from "@/app/components/ui/Dropdown";

export default function HabilidadesPage() {
  return (
    <div className="container" id="habilidades">
      <h2 className="text-center fw-bold mt-5">Habilidades</h2>
      <div className="row">
        <div className="col-md-10 offset-md-1">
          <Dropdown
            icon="/images/icons/browsers.svg"
            title="Front-end"
            items={[
              { name: "HTML", percent: 90 },
              { name: "CSS", percent: 90 },
              { name: "JavaScript", percent: 90 },
              { name: "Typescript", percent: 80 },
              { name: "React", percent: 80 },
              { name: "Next.js", percent: 80 },
              { name: "React Native", percent: 75 },
              { name: "Angular", percent: 70 },
              { name: "Vue", percent: 80 },
            ]}
          />
          <Dropdown
            icon="/images/icons/layout.svg"
            title="Designer"
            items={[{ name: "Figma", percent: 80 }]}
          />
          <Dropdown
            icon="/images/icons/hard-drives.svg"
            title="Back-end"
            items={[
              { name: "Node", percent: 80 },
              { name: "Express", percent: 80 },
              { name: "MySQL", percent: 80 },
              { name: "PostgreSQL", percent: 80 },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
