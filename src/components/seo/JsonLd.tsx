import { siteConfig } from "@/config/site";

interface JsonLdProps {
    type?: "website" | "person" | "article" | "breadcrumb";
    data?: Record<string, any>;
}

export function JsonLd({ type = "website", data = {} }: JsonLdProps) {
    const baseSchema = {
        "@context": "https://schema.org",
    };

    let schema: Record<string, any> = { ...baseSchema };

    switch (type) {
        case "website":
            schema = {
                ...baseSchema,
                "@type": "WebSite",
                name: siteConfig.name,
                description: siteConfig.description,
                url: siteConfig.url,
                author: {
                    "@type": "Person",
                    name: siteConfig.author.name,
                    email: siteConfig.author.email,
                    url: siteConfig.url,
                    jobTitle: siteConfig.author.jobTitle,
                    sameAs: [
                        siteConfig.links.github,
                        siteConfig.links.linkedin,
                        siteConfig.links.twitter,
                    ],
                },
                potentialAction: {
                    "@type": "SearchAction",
                    target: {
                        "@type": "EntryPoint",
                        urlTemplate: `${siteConfig.url}/blog?q={search_term_string}`,
                    },
                    "query-input": "required name=search_term_string",
                },
                ...data,
            };
            break;

        case "person":
            schema = {
                ...baseSchema,
                "@type": "Person",
                name: siteConfig.author.name,
                email: siteConfig.author.email,
                url: siteConfig.url,
                image: `${siteConfig.url}${siteConfig.ogImage}`,
                jobTitle: siteConfig.author.jobTitle,
                worksFor: {
                    "@type": "Organization",
                    name: siteConfig.author.name,
                },
                alumniOf: {
                    "@type": "Organization",
                    name: data.education || "University",
                },
                knowsAbout: [
                    "Web Development",
                    "Full Stack Development",
                    "React",
                    "Next.js",
                    "Node.js",
                    "TypeScript",
                    "JavaScript",
                    "Python",
                    "AI/ML",
                    "Machine Learning",
                    "Generative AI",
                    "DevOps",
                    "Docker",
                    "Kubernetes",
                    "Cloud Computing",
                    "Software Engineering",
                ],
                sameAs: [
                    siteConfig.links.github,
                    siteConfig.links.linkedin,
                    siteConfig.links.twitter,
                ],
                address: {
                    "@type": "PostalAddress",
                    addressCountry: "IN",
                    addressRegion: siteConfig.author.location,
                },
                ...data,
            };
            break;

        case "article":
            schema = {
                ...baseSchema,
                "@type": "Article",
                headline: data.title,
                description: data.description,
                image: data.image ? `${siteConfig.url}${data.image}` : `${siteConfig.url}${siteConfig.ogImage}`,
                datePublished: data.publishedTime,
                dateModified: data.modifiedTime || data.publishedTime,
                author: {
                    "@type": "Person",
                    name: siteConfig.author.name,
                    url: siteConfig.url,
                },
                publisher: {
                    "@type": "Organization",
                    name: siteConfig.name,
                    logo: {
                        "@type": "ImageObject",
                        url: `${siteConfig.url}${siteConfig.ogImage}`,
                    },
                },
                mainEntityOfPage: {
                    "@type": "WebPage",
                    "@id": data.url || siteConfig.url,
                },
                keywords: data.keywords?.join(", ") || "",
                ...data,
            };
            break;

        case "breadcrumb":
            schema = {
                ...baseSchema,
                "@type": "BreadcrumbList",
                itemListElement: data.items?.map((item: any, index: number) => ({
                    "@type": "ListItem",
                    position: index + 1,
                    name: item.name,
                    item: `${siteConfig.url}${item.path}`,
                })) || [],
            };
            break;
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(schema, null, 2),
            }}
        />
    );
}
