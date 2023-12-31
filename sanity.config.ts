import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { vercelDeployTool } from 'sanity-plugin-vercel-deploy'
import schemas from "./sanity/schemas";

const config = defineConfig({
    projectId: "mm97wo51",
    dataset: "production",
    title: "Marketplace Admin",
    apiVersion: "2023-08-15",
    basePath: '/admin',
    plugins: [deskTool(), vercelDeployTool()],
    schema: { types: schemas },
})

export default config;