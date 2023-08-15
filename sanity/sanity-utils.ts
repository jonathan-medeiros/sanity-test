import { createClient, groq } from "next-sanity";

export const getProjects = async () => {
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
        }`
    );
}
