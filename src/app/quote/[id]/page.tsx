import styles from '@/styles/item.module.scss'
import Image from 'next/image';
import Link from 'next/link';
import { fetchCollection } from '@/_includes/fetchlotr';

// export const dynamic = 'force-dynamic'
// export async function generateStaticParams() {
//   const quotes = await fetchCollection('quote');
 
//   return quotes.docs.map((quote: {_id: string}) => ({
//     id: quote._id,
//   }));
// }

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params
  const { docs:[dialog] } = await fetchCollection('quote', id);
  const { docs:[movie] } = await fetchCollection('movie', dialog.movie);
  const { docs:[character] } = await fetchCollection('character', dialog.character);

  return (
    <section className={styles.container}>
    <Link className={styles.item_back} href="/">Back To Homepage</Link>
    <h1>{dialog.dialog}</h1>
    <div>
      <p><strong>From Movie: </strong><Link href={`/movie/${movie._id}`}>{movie.name}</Link></p>
      <p><strong>Quote By Character: </strong> <Link href={`/character/${character._id}`}>{character.name}</Link></p>
    </div>
  </section>)
  ;
}

// {
//   _id: '5cd96e05de30eff6ebcce839',
//   dialog: "I Aear c'n ven na mar.",
//   movie: '5cd95395de30eff6ebccde5d',
//   character: '5cd99d4bde30eff6ebccfcc8',
// },