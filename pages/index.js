import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { getAbout, getArtists, getArtistsByName, getGallery, getHeroes } from '../lib/api'
import About from '../Components/About'
import Artists from '../Components/Artists'
import Gallery from '../Components/Gallery'
import Contact from '../Components/Contact'
import Hero from '../Components/Hero'
import Faq from '../Components/Faq'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from 'react'
// ..



export default function Home({HeroData, AboutData ,ArtistsData , GalleryData }) {
  useEffect(() => {
    AOS.init();
},[])

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#191919"/>
      </Head>
            <Hero item ={HeroData} />
            <div data-aos="fade-up">
            <About item={AboutData} />
            </div>
            <Artists item={ArtistsData} />
            <Gallery item={GalleryData} />
            <Faq />
            <Contact />
    </div>
  )
}




export async function getServerSideProps() {
  const HeroData = (await getHeroes()) ?? []
  const AboutData = (await getAbout()) ?? []
  const ArtistsData = (await getArtists()) ?? []
  const GalleryData = (await getGallery()) ?? []


return {
  props: {
    HeroData, AboutData ,ArtistsData , GalleryData 

  },
  
    
  
}
}
