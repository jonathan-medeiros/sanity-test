import { getProjects } from "@/sanity/sanity-utils"

export default async function Home() {

    const projects = await getProjects();

    return (
        <div>
            {projects.map((projects) => (
                <div key={projects._id}>
                    {projects.name}
                </div>
            ))}
        </div>
    );
}
