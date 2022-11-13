import Link from 'next/link';
import Header from '../components/Header';
import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <div className={styles.container}>
      <Header>Hello, next</Header>
      <div className={styles.link}>
        <Link href="/ssr">
          SSR
        </Link>
        <Link href="/ssg">
          SSG
        </Link>
        <Link href="/csr">
          CSR
        </Link>
      </div>
    </div>
  )
}


export default Home;