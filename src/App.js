// import './App.css';
import styles from './style';

// v1
// import NavBar from './components/NavBar';
// import Home from './components/Home';
// import About from './components/About';
// import Footer from './components/Footer';
// import CarouselProfile from './components/widget/CarouselProfile';
// import PeoplesSay from './components/PeoplesSay';
// import DownloadNow from './components/DownloadNow';
// import DontMiss from './components/DontMiss';

// v2
// import { Navbar, Hero, Stats, Business, Billing, CardDeal, Testimonials, Clients, CTA, Footer } from './v2/components';

// v3
import { Navbar, Hero, HeaderAbout, About, DontMiss, Download, Profile, Footer, PeopleSay } from './v3/components';
import AllAbout from './v3/components/AllAbout';

function App() {
  return (
    // v1
    // <div>
    //   <NavBar />
    //   <Home />
    //   <div class="divide-y-4 divide-dashed">
    //     <About></About>
    //     <PeoplesSay></PeoplesSay>
    //   </div>
    //   <DownloadNow></DownloadNow>
    //   <DontMiss></DontMiss>
    //   <div class="divide-y-2 divide-black divide-dashed">
    //     <CarouselProfile></CarouselProfile>
    //     <Footer></Footer>
    //   </div>
    // </div>

    // v2
    // <div className='bg-primary w-full overflow-hidden'>
    //   <div className={`${styles.paddingX} ${styles.flexCenter}`}>
    //     <div className={`${styles.boxWidth}`}>
    //       <Navbar></Navbar>
    //     </div>
    //   </div>

    //   <div className={`bg-primary ${styles.flexStart}`}>
    //     <div className={`${styles.boxWidth}`}>
    //       <Hero></Hero>
    //     </div>
    //   </div>

    //   <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
    //     <div className={`${styles.boxWidth}`}>
    //       <Stats></Stats>
    //       <Business></Business>
    //       <Billing></Billing>
    //       <CardDeal></CardDeal>
    //       <Testimonials></Testimonials>
    //       <Clients></Clients>
    //       <CTA></CTA>
    //       <Footer></Footer>
    //     </div>
    //   </div>
    // </div>

    // v3
    <div className='bg-dark-purple w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar></Navbar>
        </div>
      </div>

      <div className={`bg-dark-purple ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero></Hero>
        </div>
      </div>

      <div class="divide-y-2 divide-white divide-dashed">
        <AllAbout></AllAbout>
        {/* <div className={`bg-dark-purple ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <HeaderAbout></HeaderAbout>
            <About></About>
          </div>
        </div> */}

        <div className={`bg-dark-purple ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <PeopleSay></PeopleSay>
          </div>
        </div>
      </div>

      <div className={`bg-darker-purple ${styles.paddingX} ${styles.flexStart} border-b-2 border-dashed border-black`}>
        <div className={`${styles.boxWidth}`}>
          <Download></Download>
        </div>
      </div>

      <div className={`bg-dark-purple ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <DontMiss></DontMiss>
        </div>
      </div>

      <div class="divide-y-2 divide-black divide-dashed">
      <div className={`${styles.boxWidthTwo}`}>
        <Profile></Profile>
      </div>

      <div className={`bg-white ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer></Footer>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
