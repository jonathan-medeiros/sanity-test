
import { getProjects } from "@/sanity/sanity-utils"
import { Project } from "@/types/Project";

export default async function Home() {

    const projects: Project[] = await getProjects();

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
