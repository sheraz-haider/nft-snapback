import React, { useRef } from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Link from 'next/link'
import assets from '../assets/images';

import TeamMember from '../components/teamMember/TeamMember';
import FaqItem from '../components/faqItem/FaqItem';



const nfts = [
  {
    id: 1,
    name: "Avastars",
    description: "Rizzle The 1st Official Rizzle Merchandise collaborated with NFTsnapback. If you you don’t know anything about Rizzle well he is a MetaVerse Maximum-list. Has started and found some amazing projects in the space. Notably known for being Co-founder of project like Avastars, NFT42, and host of many shows across the meatverse & the Matthew & Rizzle show. He is also currently working on #therizzleproject. 100% proceeds of the sale of the Rizzle Avastars collection will go to a charity Foundation that is Started up by NFTsnapback. More information to come out. Now Officially you can buy the 1st Rizzle Avastars merchandise in partnership with NFTsnapabck.",
    image: "https://bafybeihwvuaz2es7yatd5ozblviptnu6x7n6rv465qbqewpmoxeha7wvcy.ipfs.infura-ipfs.io/",
    video: "https://bafybeibae5mmqj2j63tyjqbn3dpwrx34og6mccngo4cwvm2swxeyrvkdre.ipfs.infura-ipfs.io/"
  },
  {
    id: 2,
    name: "Drippers",
    description: "Rizzle The 1st Official Rizzle Merchandise collaborated with NFTsnapback. If you you don’t know anything about Rizzle well he is a MetaVerse Maximum-list. Has started and found some amazing projects in the space. Notably known for being Co-founder of project like Avastars, NFT42, and host of many shows across the meatverse & the Matthew & Rizzle show. He is also currently working on #therizzleproject. 100% proceeds of the sale of the Rizzle Avastars collection will go to a charity Foundation that is Started up by NFTsnapback. More information to come out. Now Officially you can buy the 1st Rizzle Avastars merchandise in partnership with NFTsnapabck.",
    image: "https://bafybeifrfrf6roheuoyjno7ylu235t7df23x2yhhhx2atmkk5h2l2s7xtu.ipfs.infura-ipfs.io/",
    video: "https://bafybeiblyf2qulzjjtcskgpb7mfxshw2bruyuzrm7gcp36nfb53hpiwpja.ipfs.infura-ipfs.io/"
  },
  {
    id: 3,
    name: "Unofficial Punks",
    description: "Rizzle The 1st Official Rizzle Merchandise collaborated with NFTsnapback. If you you don’t know anything about Rizzle well he is a MetaVerse Maximum-list. Has started and found some amazing projects in the space. Notably known for being Co-founder of project like Avastars, NFT42, and host of many shows across the meatverse & the Matthew & Rizzle show. He is also currently working on #therizzleproject. 100% proceeds of the sale of the Rizzle Avastars collection will go to a charity Foundation that is Started up by NFTsnapback. More information to come out. Now Officially you can buy the 1st Rizzle Avastars merchandise in partnership with NFTsnapabck.",
    image: "https://bafybeihrlxlcreoaaeqi542553gk3kpj567yq3fyrdfgizknp2um4rlwka.ipfs.infura-ipfs.io/",
    video: "https://bafybeibbezcrdcdxmzm37xvthumpai5hwikuk6agppskzrgd4c7qpikvgu.ipfs.infura-ipfs.io/"
  },
  {
    id: 4,
    name: "Cocain Cowboy",
    description: "Rizzle The 1st Official Rizzle Merchandise collaborated with NFTsnapback. If you you don’t know anything about Rizzle well he is a MetaVerse Maximum-list. Has started and found some amazing projects in the space. Notably known for being Co-founder of project like Avastars, NFT42, and host of many shows across the meatverse & the Matthew & Rizzle show. He is also currently working on #therizzleproject. 100% proceeds of the sale of the Rizzle Avastars collection will go to a charity Foundation that is Started up by NFTsnapback. More information to come out. Now Officially you can buy the 1st Rizzle Avastars merchandise in partnership with NFTsnapabck.",
    image: "https://bafybeifdq7dsqe4zmzprddkrtzyjx456h46wgjwhysntvm3kv2h3slyr3u.ipfs.infura-ipfs.io/",
    video: "https://bafybeiaaav5f3q7tshx5vwe5pf7ohhdlo6uptpjcbt556c7cw5rd2uagkm.ipfs.infura-ipfs.io/"
  },
];

const projects = ['Avastars', 'Drippers', 'Unoffical Punks', 'Cocain Cowboy'];

// can add or change props
const team = [
  {
    background: assets.teamPattern1,
    profile: assets.team1,
    title: 'Cryptolander',
  },
  {
    background: assets.teamPattern2,
    profile: assets.team2,
    title: 'Heyotetsuo',
  },
  {
    background: assets.teamPattern1,
    profile: assets.team1,
    title: 'Cryptolander',
  },
  {
    background: assets.teamPattern2,
    profile: assets.team2,
    title: 'Heyotetsuo',
  },
];

const Index = () => {
  const video = useRef(null);
  const playBtn = useRef(null);

  const handlePlayVideo = () => {
    video.current?.play();
    playBtn.current.style.display = 'none';
  };
  return (
    <>
      <Header />
      <div className='hero_container'>
        <div className='wrapper'>
          <div className='hero_container_iner'>
            <div className='hero_container_cont'>
              <h2>
              NFTsnapback makes the highest quality and detailed artwork off your favourite NFT into NFTsnapback
              </h2>
              <div className='hero_container_buttons'>
                <a href='https://www.heyotetsuo.com/kongz-claim/'>Claim Now</a>
                <a href='https://opensea.io/collection/nftsnapbacks'>Shop on Opensea</a>
              </div>
            </div>
            <div className='hero_container_img' style={{ overflow: "hidden", padding: "0 0 0 50px" }}>
              <video controls={false} autoPlay={true} loop={true} muted={true} style={{ width: "100%", borderRadius: "50px"}}>
                <source
                  src={'/hero-banner.mp4'}
                  type='video/mp4'
                />
                Your browser does not support the video tag.
              </video>
              {/* <img src={assets.headerImg} alt='' /> */}
            </div>
          </div>
        </div>
      </div>
      <div className='after_hero'>
        <div className='wrapper'>
          <div className='after_hero_iner'>
            <a href='#'>
              <img src={assets.afterHeader1} alt='' />
            </a>
            <a href='#'>
              <img src={assets.afterHeader3} alt='' />
            </a>
            <a href='#'>
              <img src={assets.afterHeader4} alt='' />
            </a>
            <a href='#'>
              <img src={assets.afterHeader5} alt='' />
            </a>
          </div>
        </div>
      </div>
      <div className='video_cont'>
        <div className='wrapper'>
          <div className='collected_nfts_iner'>
            <div className='collected_nfts_cont' style={{ width: "32%", background: "none", marginBottom: "0", boxShadow: "none" }}>
              <div className='collected_nfts_cont_img' style={{ background: `url("${assets.digital}")`, backgroundSize: "cover", backgroundPosition: "center" }}>
                {/* <a href='#'>
                  <img src={assets.digital} alt='' />
                </a> */}
              </div>
              <h3 style={{margin: '20px auto 0', textAlign: 'center', color: '#fff'}}>Buy NFT</h3>
            </div>
            <div className='collected_nfts_cont' style={{ width: "32%", background: "none", marginBottom: "0", boxShadow: "none" }}>
              <div className='collected_nfts_cont_img' style={{ background: `url("${assets.physical}")`, backgroundSize: "cover", backgroundPosition: "center" }}>
                {/* <a href='#'>
                  <img src={assets.physical} alt='' />
                </a> */}
              </div>
              <h3 style={{margin: '20px auto 0', textAlign: 'center', color: '#fff'}}>Claim Physical</h3>
            </div>
            <div className='collected_nfts_cont' style={{ width: "32%", background: "none", marginBottom: "0", boxShadow: "none" }}>
              <div className='collected_nfts_cont_img' style={{ background: `url("${assets.metaverse}")`, backgroundSize: "cover", backgroundPosition: "center" }}>
                {/* <a href='#'>
                  <img src={assets.metaverse} alt='' />
                </a> */}
              </div>
              <h3 style={{margin: '20px auto 0', textAlign: 'center', color: '#fff'}}>Receive Metaverse NFTsnapback</h3>
            </div>
          </div>
        </div>
      </div>
      <div className='journey_sofar'>
        <div className='wrapper'>
          <div className='journey_sofar_iner'>
            <div className='journey_sofar_top'>
              <h2 className='superion-font'>Journey So Far</h2>
              <p>
              NFT Snapback has been growing and creating a physical merchandise organically and now we are finally at a juncture that we can provide superb quality and service to our community.
              </p>
            </div>
            <ul className='journey_sofar_list'>
              <li>
                <h3>How It Started</h3>
                <p>
                The idea of NFT Snapback came from my journey into NFT’s and being part of the Cyberkongz community. This was August 2021 when we first decided to create a Cyberkongz Snapback as a gesture of appreciation for the Cyberkongz community and NFT community as a whole. We wanted to create something people can be proud of. We want to be where tech meets fashion and we’re on course for all and more.
                </p>
              </li>
              <li>
                <h3>Genesis Launch:</h3>
                <p>
                We launched our first project, Cyberkongz #327 Genesis Dr Bling Kong a total supply of 275 were made and this was an incredible moment for NFT Snapback. We chose to launch with a CyberKongz NFT because this was the first community that inspired the inception of NFT Snapback, so wanted to show our appreciation.
                </p>
              </li>
              <li>
                <h3>Claim Success:</h3>
                <p>
                We distributed the first NFT backed by physical Snapback. This proof of concept has been nothing short of a success. The community feedback and enthusiasm was the single greatest thing that happened from this launch and we’re extremely appreciative and humbled by it.
                </p>
              </li>
              <li>
                <h3>Phase 2 Launch:</h3>
                <p>
                Having launched our Genesis O.G collection with resounding success our Phase 2 was collaboration with 4 projects/influencers in the NFT space they’re Rizzle Pre co-founder of Avastars & NFT42, Cloudewhite influencer and founder of $COKE Axie Infinity, Eric founder of Unofficial Punks the man who started the whole derivatives of the Cryptopunk movement and Florian Tappeser a Movie industry veteran who worked on How to train your dragon and Hotel Transylvania, He also has his own brand Drippieverse. NFT Snapback is proud to be working with incredibly talented and knowledgeable individuals and groups.
                </p>
              </li>
              <li>
                <h3>Future Collaboration:</h3>
                <p>
                We’re always striving to find the next NFT project that we can work with that push’s NFT Snapback forward and finding incredibly talented individuals that we can innovate together. There are a few projects and artists that we’re currently talking with to see how we can make our plan come to life.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='nfts_projects'>
        <div className='wrapper'>
          <div className='nfts_projects_top'>
            <h2 className='superion-font'>Official Collab</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur
              <br /> adipiscing elit.
            </p>
          </div>
          <ul className='nfts_projects_list'>
            {nfts.map((nft, index) => (
              <li key={index}>
                <Link href='/mint-nfts'>
                  <a>
                    <div className='nfts_projects_img' style={{ overflow: "hidden" }}>
                    <video controls={false} autoPlay={true} loop={true} muted={true} style={{ height: "100%"}}>
                      <source
                        src={nft.video}
                        type='video/mp4'
                      />
                      Your browser does not support the video tag.
                    </video>
                      {/* <img src={nft.image} alt='' /> */}
                    </div>
                    <span>{nft.name}</span>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='coming_soon'>
        <div className='wrapper'>
          <h2 className='superion-font'>Coming Soon</h2>
          <ul className='coming_soon_list'>
            <li>
              <img src={assets.comingSoon1} alt='' />
              <img src={assets.comingSoon2} alt='' />
            </li>
            <li>
              <img src={assets.comingSoon3} alt='' />
            </li>
            <li>
              <img src={assets.comingSoon4} alt='' />
            </li>
          </ul>
        </div>
      </div>
      <div className='minting_pass'>
        <div className='wrapper'>
          <h2 className='superion-font'>Minting Pass Coming Soon</h2>
          <div className='minting_pass_iner'>
            <div className='video-con'>
              <img src={'/mint-pass.gif'} alt='' />

              {/* <video autoplay loop muted playsInline>
                <source src={'/mint-pass.mp4'} type="video/mp4" />
              </video> */}
            </div>
          </div>
        </div>
      </div>
      <div className='mint_pass'>
        <div className='wrapper'>
          <h3 className='superion-font'>
            Minting Pass: All Physical NFTsnapback's Will Come With Customised
            Packaging.
          </h3>
          {/* <a href='#'>Shop Now</a> */}
        </div>
      </div>
      <div className='nfst_medium'>
        <div className='wrapper'>
          <div className='nfst_medium_iner'>
            <h3 className='superion-font'>NFTsnapback Medium Posts</h3>
            <p>Check out All posted related to NFTsnapback</p>
            <a href='http://www.medium.com/@nftsnapback'>
              Read on Medium
              <img src={assets.mediumIcon} alt='' />
            </a>
          </div>
        </div>
      </div>
      <div className='how_it_works'>
        <div className='wrapper'>
          <h2 className='superion-font'>How it works?</h2>
          <ul className='how_it_works_list'>
            <li>
              <div className='how_it_works_icon'>
                <img src={assets.nuyIcon} alt='' />
              </div>
              <h3>Buy NFTsnapback NFT</h3>
              <p>
                The Current NFTsnapback that you can buy is the O.G.C || KONGZ
                Edition. The NFT can be bought using ETH on the Polygon Matic
                Network. If you are not familiar with this please watch a video
                by EddieIsKong from his youtube channel. Head to 17.27 on the
                timer to be shown how to claim.
              </p>
            </li>
            <li>
              <div className='how_it_works_icon'>
                <img src={assets.emailOpenIcon} alt='' />
              </div>
              <h3>Claim Physical NFTsnapback</h3>
              <p>
                Once you have claimed the Physical NFTsnapback through our claim
                page, we will be notified and prepare your order to be shipped
                out. Once the order has be shipped you will receive a email
                confirmation with all the details regarding you NFTsnapback. We
                ship worldwide and if there is any issues regarding issues with
                address we will be in contact to confirm details before any
                shipment is sent out.
              </p>
            </li>
            <li>
              <div className='how_it_works_icon'>
                <img src={assets.giftIcon} alt='' />
              </div>
              <h3>Receive Metaveres NFTsnapback</h3>
              <p>
                Once you have claimed your NFTsnapback Physical hat you will
                shortly receive an Official Sandbox Assets from the NFTsnapback
                Opensea Account.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className='team_cont'>
        <div className='wrapper'>
          <h3 className='superion-font'> Meet the Team</h3>
          <ul className='team_list'>
            {team.map((member, index) => (
              <li key={index}>
                <TeamMember
                  background={member.background}
                  profile={member.profile}
                  title={member.title}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='nft_charity'>
        <div className='wrapper'>
          <div className='nft_charity_top'>
            <h2 className='superion-font'>NFTsnapback Charity Programme</h2>
            <p>
              See what we are doing with our profits from sales and royalties.
            </p>
          </div>
          <div className='nft_charity_iner'>
            <div className='nft_charity_left'>
              <p>
              A wise man once told me the only way to get rich not with money, NFTS or materials things but rich in spirit is to give charity and when you’re rich in spirit I believe you naturally get financially richer too. It’s been 2 years now that I have been supporting young underprivileged children with education and higher education degrees. As NFT Snapback grows I would like to take the charity with me and expand on what I am able to do at the moments. This will be building roads, community centres, cleaner streets, education hubs and so much more. We will do this by allocating a % of profits to the charity which will pay for all the needs that was mentioned above.
              </p>

              <a href='http://www.medium.com/@nftsnapback'>
                Read on Medium <img src={assets.mediumIcon} alt='' />
              </a>
            </div>
            <ul className='nft_charity_right'>
              <li>
                <img src={assets.charity1} alt='' />
              </li>
              <li>
                <img src={assets.charity2} alt='' />
              </li>
              <li>
                <img src={assets.charity3} alt='' />
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <div className='collect_nft'>
        <div className='wrapper'>
          <div className='collect_nft_iner'>
            <h3>
              Get ready to collect
              <br />
              our NFT
            </h3>
            <a href='#'>Shop Now</a>
          </div>
        </div>
      </div> */}
      <div className='faq_main'>
        <div className='wrapper'>
          <div className='faq_top'>
            <h3 className='superion-font'>
              Freaquently Asked
              <br />
              Question
            </h3>
            <p>Wanna Ask Something?</p>
          </div>
          <div className='faq_iner'>
            {Array.from({ length: 5 }, (_, i) => i).map(item => (
              <FaqItem />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Index;
