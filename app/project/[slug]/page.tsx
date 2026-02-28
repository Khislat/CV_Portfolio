import { notFound } from "next/navigation";
import { getProjectBySlug, getAllProjectSlugs } from "@/data/projects";
import ProjectDetailContent from "@/components/ProjectDetailContent";


type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project" };
  return {
    title: `${project.title} | Portfolio`,
    description: project.subtitle ?? project.title,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();
  return <ProjectDetailContent project={project} />;
}
