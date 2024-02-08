import styles from './footer.module.css'
import Link from 'next/link'

interface Props {
  isHomepage?: boolean
}

export function Footer({ isHomepage = false }: Props) {
  return (
    <div className={`${styles.footer} ${isHomepage ? styles['is-homepage'] : null}`}>
      <p>
        Site built and designed by <Link href='https://github.com/lukehtravis'>Luke Travis</Link>
      </p>
    </div>
  )
}

export default Footer
