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
                <a href='https://opensea.io/collection/nftsnapbacks'>Opensea</a>
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
        <h2 className="superion-font" style={{fontStyle: 'normal', marginBottom: '12px', fontWeight: 700, fontSize: '40px', lineHeight: '56px', textAlign: 'center', color: '#ffffff'}}>Customer Journey</h2>

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
              <h2 className='superion-font'>NFTsnapback Journey So Far..</h2>
              <p>
              NFTsnapback has been building in the background and we are finally at a junction to provide the best quality Merchandise to the #NFTcommunity.
              </p>
            </div>
            <ul className='journey_sofar_list'>
              <li>
                <h3>How It Started:</h3>
                <p>
                As mention through many medium posts the idea of NFTsnapback came from while being part of the Cyberkong discord. Discussing Kongz merchandise early summer 2021, I wanted to created Snapback for the community. From there the idea kicked off to create not just snapback but infuse the passion and love I found in NFT and combine the two. Here is where fashion meets tech, so from Early August 2021 NFTsnapback was created.
                </p>
              </li>
              <li>
                <h3>Genesis Launch:</h3>
                <p>
                There was 275 Genesis O.G.C || KONGZ NFTsnapback that was created for the cyberkongz community and Ladz City community. These NFT at the time was all airdropped using a Snapshot of cyberkongz holders at the time, through the smart contract. As months went by we sourced the finest quality hats, production company and created the best premium quality NFTsnapback for the community using Cyberkong #327 AKA DR Bling Kong.
                </p>
              </li>
              <li>
                <h3>Claim Success:</h3>
                <p>
                Finally the day came when the NFT holders were able to claim their NFTsnapback. A great success and achievement where NFTsnapback distributed the 1st NFT the was back by a physical SNAPBACK. This proof of concept was amazing to see and the community has been appreciative and amazed on the quality Merchandise they had received. Now we have built out our own platform using our own Smart Contract that will make creating and claiming Physical Assets easy for all our customers.
                </p>
              </li>
              <li>
                <h3>Phase 2 Launch:</h3>
                <p>
                With the success of the the Genesis Community Cyberkongz NFTsnapback launch we have partnered up with 4 projects/Influencer’s in the NFT space. Avastars collection using an NFT of a previous co-founder @NFT42, Cloudwhite Influencer in the NFT space and the Founder of $COKE Axie Infinity, Eric Founder of Unofficial Punks the man that stared the whole derivatives of the Cryptopunk movement and Florian Tappeser, a movie industry veteran who worked on many acclaimed animation hits like Hotel Transylvania and How To Train Your Dragon & has his on brand in Drippieverse™ and work with some of the biggest companies in the space such as Genies. NFTsnapback are proud to be working with some of the most incredible people and communities in this space. NFTsnapback will be able to work with any projects or Influencer's that wish to create a Series Collection with us.
                </p>
              </li>
              <li>
                <h3>Minting Pass:</h3>
                <p>
                We are delighted to share with you shortly after the successful launch of our Collaboration Series, we will be launching our very 1st Mint Pass. There will be 100 Mint Pass that will enable you to create a custom 1 of 1 of your Favourite NFT. This is something we want to strive and be able to deliver to the wider community and we're excited that this soon going to be possible. Stay tuned as we will be announcing via our socials when and how you will be able to obtain a NFTsnapback Mint Pass.
                </p>
              </li>
            </ul>
            <div className='minting_pass' style={{ marginBottom: "20px", paddingTop: "0" }}>
              <div className='wrapper'>
                {/* <h2 className='superion-font'>Minting Pass Coming Soon</h2> */}
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
          </div>
        </div>
      </div>

      <div className='nfts_projects'>
        <div className='wrapper'>
          <div className='nfts_projects_top'>
            <h2 className='superion-font'>Official Collab</h2>
            <p>
              Official Collaboration & Partnership from some of the leading project to influential People in this space.
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
      <div className='coming_soon nfts_artwork_samples'>
        <div className='wrapper'>
          <h2 className='superion-font'>NFTsnapback Artwork Samples</h2>
          <p>
          Through building & testing here are some of the most recognised NFT collections that we test sampled to push our production capabilities to the max. 
          </p>
          <br />
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
              <p style={{ textAlign: "left" }}>
                To be able to buy our NFTs there will be two ways. 
                <br />
                <br />
                1. When ever we announce a collaboration or when a new series of Mint pass are available these will be able to be bought through our minting page. Make sure you keep upto date when ever we have an Minting Event.
                <br />
                <br />
                2. If you missed out on the minting, then have a look at Opensea, Look Rare and see if there are any NFTsnapback available on the open market.
              </p>
            </li>
            <li>
              <div className='how_it_works_icon'>
                <img src={assets.emailOpenIcon} alt='' />
              </div>
              <h3>Claim Physical NFTsnapback</h3>
              <p style={{ textAlign: "left" }}>
              To claim the physical Item all the new collections will require you to burn your NFT (Series 1 Kongz Will not be burnable).  Upon Burning your NFT you will be required to fill out your shipping details. Once we receive your information your NFT will be updated and inform you of the status of your Physical item.
              </p>
            </li>
            <li>
              <div className='how_it_works_icon'>
                <img src={assets.giftIcon} alt='' />
              </div>
              <h3>Receive Metaveres NFTsnapback</h3>
              <p style={{ textAlign: "left" }}>
              We have now created a Decentraland wearable for all customers that claim their physical NFTsnapback. This wearable item will be airdropped and there is no additional steps the customer has to take. Now you can have your NFTsnapback as a physical and metaverse Wearable for your Avatar. We believe this is the future and we're exciting to bring this to you.
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
            {[
              {
                question: `How do I use Matic Network to buy or claim Series 1 O.G.C || Kongz?`,
                answer: [
                  <p>There are great tutorials that you can find and watch online via Youtube.</p>,
                  <p>We have a link provided by EddieIsKong on his YouTube channel and can talk you through the steps, on how to use Polygon Matic Network.</p>,
                  <p><a href="https://www.youtube.com/watch?v=xUTYW8uWzIE" target={'_blank'} style={{ color: "#fff", textDecoration: "underline" }}>https://www.youtube.com/watch?v=xUTYW8uWzIE</a></p>,
                ]
              },
              {
                question: `How Do I know If the NFT Is Claimed Or Not?`,
                answer: [
                  <p>For the Series 1 O.G.C.|| KONGZ, we have created a tool on our claiming page to see if the NFT has been claimed or not. Please do check before you consider buying to claim.</p>,
                  <p>Use the Token I.D from the NFT you want to check on the Opensea Store and input the information on the claiming page. You will be able to find out if the NFT has been used or not.</p>,
                  <p>On the Newer collection to come out, all claimed NFT's will be burned and only unclaimed NFT's will be on the open market, leaving less issues and concerns if you wish to buy one.</p>,
                ]
              },
              {
                question: `What if my order goes missing or damaged upon receiving the goods?`,
                answer: [
                  <p>We send all order via track and signed and signing is required upon receiving the package.</p>,
                  <p>If you see the package damaged in any way please don’t sign and inform them its damaged and insurance will be able to cover this and work on sending a replacement as soon as possible.</p>,
                  <p>In regards to missing orders we will investigate as to see what occurred and be in direct communication to resolve it as best as possible.</p>,
                ]
              },
              {
                question: `Can I create my own 1-1 NFTsnapback?`,
                answer: [
                  <p>This is something we are starving on to bring to the community and soon this will be possible.</p>,
                  <p>Our Minting pass will enable this service for custom creation. Very soon announcement will be made on how to obtain it.</p>,
                ]
              },
              {
                question: `What if I want to create NFTsnapback for my project or community?`,
                answer: [
                  <p>That is great we are happy to work with projects or influencers and proved NFTsnapback Merchandise.</p>,
                  <p>Reach out via email and we will get back to you as soon as possible.</p>,
                ]
              },
            ].map(faq => (
              <FaqItem question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Index;
