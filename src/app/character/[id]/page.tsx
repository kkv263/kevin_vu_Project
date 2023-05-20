import styles from '@/styles/item.module.scss'
import Image from 'next/image';
import Link from 'next/link';
import { fetchCollection } from '@/_includes/fetchlotr';

export async function generateStaticParams() {
  const characters = await fetchCollection('character')

  return characters.docs.map((character:{_id: string}) => ({
    id: character._id,
  }));
}

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params
  const { docs: [char] } = await fetchCollection('character', id)

  return (
    <section className={styles.container}>
    <Link className={styles.item_back} href="/">Back To Homepage</Link>
    <h1>{char.name}</h1>
    <div className={styles.item_info}>
      <div className={styles.item_left}>
        <Image src="/placeholder.gif" alt="movie cover" width={300} height={488}></Image>
      </div>
      <div className={styles.item_right}>
        <p className={styles.item_detail}>
          <span>Character Bio:</span> 
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, ab! Doloribus dolor sint aliquid natus id voluptates ipsam similique numquam non consectetur illum corporis neque, inventore minus voluptatem temporibus harum!</span>
        </p>
        {Object.keys(char).slice(1).map((keyName, i) => (
          keyName !== 'wikiUrl' ? 
          <p key={i}><strong>{keyName}: </strong>{char[keyName] ? char[keyName] : 'N/A'}</p> : 
          <p key={i}><strong>{keyName}: </strong><a rel="noopener noreferrer" target="_blank" href={char[keyName]}>{char[keyName]}</a></p>
        ))}
      </div>
    </div>
  </section>)
  ;
}

// Example Character Object
// {
//   _id: '5cd99d4bde30eff6ebccfbc5',
//   height: '',
//   race: 'Human',
//   gender: 'Male',
//   birth: 'Late ,First Age',
//   spouse: 'None known',
//   death: 'FA 489',
//   realm: '',
//   hair: '',
//   name: 'Algund',
//   wikiUrl: 'http://lotr.wikia.com//wiki/Algund'
// }