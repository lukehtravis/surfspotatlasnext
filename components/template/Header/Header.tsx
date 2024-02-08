import styles from './header.module.css'
import Link from 'next/link'

interface Props {
  isHomepage?: boolean
}

export function Header({ isHomepage = false }: Props) {
  return (
    <div className={`${styles.header} ${isHomepage ? styles['is-homepage'] : null}`}>
      <p>The Surf Spot Atlas</p>
      <Link href='add-spot'>Add Spot</Link>
      <Link href='search'>Search</Link>
    </div>
  )
}

export default Header
