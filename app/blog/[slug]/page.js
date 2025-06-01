import { client, urlFor } from "@/app/lib/sanity";
import { PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";

async function getData({ slug }) {
    if (!slug) throw new Error("Slug is required");

    const query = `
    *[_type == 'blog' && slug.current == '${slug}']{
        "currentSlug" : slug.current,
        title,
        content,
        titleImage
    }[0]
    `;

    const data = await client.fetch(query);
    console.log(data);
    return data;
}

export default async function BlogArticle({ params }) {
    const data = await getData({ slug: params.slug }); 
    console.log(data);

    return (
        <div>

            <h1 className="titledata">{data.title}</h1>

            <div className="imagedata">
                <Image src={urlFor(data.titleImage).url()} width={500} height={300} alt={data.titleImage} priority />
            </div>

            <div className="porttext">
                <PortableText value={data.content}>
                </PortableText>
            </div>
        
        </div>
    );
}
