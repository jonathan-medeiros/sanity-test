import { Project } from "@/types/Project";
import { createClient, groq } from "next-sanity";
import { cache } from "react";

export const getProjects = async (): Promise<Project[]> => {
    const client = createClient({
        projectId: "mm97wo51",
        dataset: "production",
        apiVersion: "2023-08-15",
        useCdn: false
    });

    return client.fetch(
        groq`*[_type == "project"]{
            _id, 
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content
        }`, { cache: 'no-store' }
    );
}