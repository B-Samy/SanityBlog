import Link from 'next/link';
import Image from 'next/image';
import '../../Styles/style.css'
export default function Card({ href = '#', imageUrl, title, description }) {
  return (
    <Link href={href} className="card">
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={title || 'Image'}
          className="card-image"
          width={200}
          height={200}

        />
      )}
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <button className='btntag' >
      Read More
    </button>
    </Link>
  );
}
