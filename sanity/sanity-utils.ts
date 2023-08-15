import { Project } from "@/types/Project";
import { createClient, groq } from "next-sanity";
import next from "next/types";

export const getProjects = async (): Promise<Project[]> => {
    const client = createClient({
        projectId: "mm97wo51",
        dataset: "production",
        apiVersion: "2023-08-15",
        useCdn: false
    });

    console.log('Chamou o fetch...!');
    
    return client.fetch(
        groq`*[_type == "project"]{
            _id, 
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content
        }`, { catch: 'no-store'}
    );
}
