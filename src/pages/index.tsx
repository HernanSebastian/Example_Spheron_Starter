import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Upload from '@/components/Upload';

export default function Home() {  

  return (
    <>
      <Head>
        <title>Example-Spheron-Dega</title>
        <meta name="description" content="Example-Spheron-Dega" />
      </Head>
      <main className={styles.main}>
        
        {<Upload />}
      </main>
    </>
  )
}
