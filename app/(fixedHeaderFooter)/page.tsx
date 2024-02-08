import Image from 'next/image'
import styles from './page.module.css'

export const metadata = {
  title: 'The Surf Spot Atlas',
  description: 'The Surf Spot Atlas is a tool to help surfers find information about surf spots all over the world.',
}

export default function Home() {
  return (
    <main className={styles['full-screen-wrapper']}>
      <Image src='/surfers.jpeg' alt='surfers' layout='fill' objectFit='cover' quality={100} />
    </main>
  )
}
