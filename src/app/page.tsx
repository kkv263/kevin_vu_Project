import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/page.module.scss'
import { fetchCollection } from '@/_includes/fetchlotr';
import { Suspense } from 'react';

export default async function Home() {
  const movieCollection = await fetchCollection('movie');
  const charCollection = await fetchCollection('character');
  const quoteCollection = await fetchCollection('quote');

  return (
    <main className={styles.main}>
      <nav className={styles.nav}>
        <ul>
          <li><a href="#movies">Movies</a></li>
          <li><a href="#characters">Characters</a></li>
          <li><a href="#quotes">Quotes</a></li>
        </ul>
      </nav>
      <h1>Lord of the Rings API Collection</h1>
      <section className={styles.scroll_container}>
        <div id="movies" className={styles.scroll_anchor}></div>
        <h2>Lord of the Rings: Movies</h2>
        <Suspense fallback={<div>Loading...</div>}>
          <ul className={styles.item_list}>
            {movieCollection.docs.map((movie: {_id: string, name:string}, index:number) => (
              <li key={movie._id}>
                <Link href={`/movie/${movie._id}`}>
                  <Image src="/film.svg" width={24} height={24} alt="movie icon"/>
                  {movie.name}
                </Link>
              </li>
            ))}
          </ul>
        </Suspense>

      </section>
      <section className={styles.scroll_container}>
        <div id="characters" className={styles.scroll_anchor}></div>
        <h2>Lord of the Rings: Characters</h2>
        <Suspense fallback={<div>Loading...</div>}>
          <ul className={styles.item_list}>
            {charCollection.docs.map((char: {_id: string, name:string}) => (
              <li key={char._id}>
                <Link href={`/character/${char._id}`}>
                  <Image src="/char.svg" width={24} height={24} alt="character icon"/>
                  {char.name}
                </Link>
              </li>
            ))}
          </ul>
        </Suspense>

      </section>
      <section className={styles.scroll_container}>
        <div id="quotes" className={styles.scroll_anchor}></div>
        <h2>Lord of the Rings: Quotes</h2>
        <Suspense fallback={<div>Loading...</div>}>
          <ul className={styles.item_list}>
            {quoteCollection.docs.map((quote: {_id: string, dialog:string}) => (
              <li key={quote._id}>
                <Link href={`/quote/${quote._id}`}>
                  <Image src="/quote.svg" width={24} height={24} alt="quote icon"/>
                  &quot;{quote.dialog}&quot;
                </Link>
              </li>
            ))}
          </ul>
        </Suspense>
      </section>
    </main>
  )
}
