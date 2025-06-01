import { client, urlFor } from '../lib/sanity.js';
import Card from '../Components/Card.js';
import Link from 'next/link.js';
import Image from 'next/image';
import '../../Styles/style.css'
async function getData() {

   const query = `*[_type == 'blog'] | order(_createdAt desc){
  title,
    smallDescription,
    "currentSlug" : slug.current,
    titleImage,
}` 

const data = await client.fetch(query);
return data;
}

export default async function Service() {
    const data = await getData();
     console.log('Data from Sanity:', data);

    return(
        <>

  <main className="card-grid">
  {data.map((post, index) => (
    <Card
      key={index}
      imageUrl={urlFor(post.titleImage).width(300).height(300).url()}
      title={post.title}
      description={post.smallDescription}
      href={`/blog/${post.currentSlug}`}
    >

    <h2 className='head-tag'>title={post.title}</h2>
    <p>description={post.smallDescription}</p>

    <button >
      <Link href={`blog/${post.currentSlug}`}>Read More</Link>
    </button>

</Card>
  ))}
</main>    

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<section className="newsletter-section">
  <div className="newsletter-wrapper">
    <div className="newsletter-header">
      <h2 className="newsletter-title">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit
      </h2>
      <p className="newsletter-description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae dolor officia blanditiis
        repellat in, vero, aperiam porro ipsum laboriosam consequuntur exercitationem incidunt
        tempora nisi?
      </p>
    </div>

    <div className="newsletter-form-wrapper">
      <form action="#" className="newsletter-form">
        <div className="input-wrapper">
          <label htmlFor="email" className="sr-only">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Email address"
            className="newsletter-input"
          />
        </div>

        <button type="submit" className="newsletter-button">
          <span className="newsletter-button-text">Sign Up</span>
          <svg
            className="newsletter-button-icon"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </button>
      </form>
    </div>
  </div>
</section>




        </> 
    )
}