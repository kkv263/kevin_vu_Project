import styles from '@/styles/item.module.scss'
import Image from 'next/image';
import Link from 'next/link';
import { fetchCollection } from '@/_includes/fetchlotr';

export async function generateStaticParams() {
  const movies = await fetchCollection('movie');
 
  return movies.docs.map((movie:{_id: string}) => ({
    id: movie._id,
  }));
}

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params
  const { docs: [movie] } = await fetchCollection('movie', id)

  function toHoursAndMinutes(totalMinutes:number) {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours} hours and ${minutes > 0 ? ` ${minutes} minutes` : ""}`;
  }

  return (
  <section className={styles.container}>
    <Link className={styles.item_back} href="/">Back To Homepage</Link>
    <h1>{movie.name}</h1>
    <div className={styles.item_info}>
      <div className={styles.item_left}>
        <Image src="/placeholder.gif" alt="movie cover" width={300} height={488}></Image>
        <p className={styles.item_caption}><strong>Runtime: </strong>{toHoursAndMinutes(movie.runtimeInMinutes)}</p>
      </div>
      <div className={styles.item_right}>
        <p className={styles.item_detail}>
          <span>Synopsis</span> 
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, ab! Doloribus dolor sint aliquid natus id voluptates ipsam similique numquam non consectetur illum corporis neque, inventore minus voluptatem temporibus harum!</span>
        </p>
        <p><strong>Movie Budget: </strong>{movie.budgetInMillions.toLocaleString('en')} millon</p>
        <p><strong>Box Office Revnue: </strong>{movie.boxOfficeRevenueInMillions.toLocaleString('en')} million</p>
        <p><strong>Academy Award Nominations: </strong>{movie.academyAwardNominations}</p>
        <p><strong>Academy Award Wins: </strong>{movie.academyAwardWins}</p>
        <p><strong>Rotten Tomatoes Score: </strong>{movie.rottenTomatoesScore}%</p>
      </div>
    </div>
  </section>)
  ;
}

// Example Movie Object
// {
//   _id: '5cd95395de30eff6ebccde5a',
//   name: 'The Battle of the Five Armies',
//   runtimeInMinutes: 144,
//   budgetInMillions: 250,
//   boxOfficeRevenueInMillions: 956,
//   academyAwardNominations: 1,
//   academyAwardWins: 0,
//   rottenTomatoesScore: 60
// }