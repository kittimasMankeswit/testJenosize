import '../styles/globals.css'
import Navnar from './../layouts/_app/index'
import styles from '../styles/Home.module.css'
function MyApp ({ Component, pageProps })
{
  return <div>
    <Navnar />
    <Component {...pageProps} />
    <footer className={styles.footer}>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{' '}
        <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
      </a>
    </footer>
  </div>
}

export default MyApp

{/* <div className={styles.container}>
  <Head>
    <title>Create Next App</title>
    <link rel="icon" href="/favicon.ico" />
  </Head>

  <main className={styles.main}>
    <div className={styles.grid}>

    </div>
  </main>

  <footer >

  </footer>
</div> */}
