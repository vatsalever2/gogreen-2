import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { StatePageTemplate } from "@/components/state-page-template";
import { statesData } from "@/lib/states-data";

export function generateStaticParams() {
  return Object.keys(statesData).map((slug) => ({ slug }));
}

export async function generateMetadata(props: PageProps<"/areas/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const data = statesData[slug];
  if (!data) return { title: "Service Area" };
  return {
    title: `${data.name} Solar EPC, ${data.code}`,
    description: data.hero.description,
  };
}

export default async function StatePage(props: PageProps<"/areas/[slug]">) {
  const { slug } = await props.params;
  const data = statesData[slug];
  if (!data) notFound();
  return <StatePageTemplate data={data} />;
}
