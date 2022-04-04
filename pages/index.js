import React, { useRef } from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Link from 'next/link'
import assets from '../assets/images';

import TeamMember from '../components/teamMember/TeamMember';
import FaqItem from '../components/faqItem/FaqItem';
import InnerFooter from '../components/InnerFooter/InnerFooter';



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
    designation: 'Founder/CEO',
    description: <p>An experienced NFT investor having invested early in many emerging PFP (and now blue chip) and collectible trends. An influencer in the NFT space and a core community member of many of the leading projects/communities such as Cyberkongz.</p>,
  },
  {
    background: assets.teamPattern2,
    profile: assets.team2,
    title: 'Heyotetsuo',
    designation: 'CTO',
    description: <p>With over a decade of experience in programming. A full stack Dev &proficient in Solidity, RUST, Python and JavaScript just to name a few. Worked on NFT/blockchain as a Technical Lead on projects such a ArtBlock, MetaHeros & Pixel vault.</p>,
  },
  {
    background: assets.teamPattern1,
    profile: assets.team3,
    title: 'Gadawe.Eth',
    designation: 'Head of Operations & logistics',
    description: <p>Been working in Operations & logistics for over 10years. I have been heading and managing effective solutions for the delivery industry.Significant experience working in warehousing and delivery companies that facilitate large scale logistical operations</p>,
  },
  {
    background: assets.teamPattern2,
    profile: assets.team4,
    title: 'Anthony williams',
    designation: 'Head of Finance and Analytics',
    description: <p>Over the last 8 years, I have been working as Operations & financial Manager experience in management and senior management. This includes managing a $500bn budget for a leading transport and logistics provider.</p>,
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
              O.G.C || NFTsnapback is the first physical snapback hat collection that is backed by an NFT (Non-Fungible Token). NFTsnapback aims to be the number 1 snapback brand.
              </h2>
              <div className='hero_container_buttons'>
                <a href='https://www.heyotetsuo.com/kongz-claim/'>Claim Now</a>
                <a href='https://opensea.io/collection/ogcnftsnapback'>Opensea</a>
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
              <h2 className='superion-font'>O.G.C || NFTsnapback Journey So Far..</h2>
              <p>
              NFTsnapback has been building in the background and we are finally at a junction to provide the best quality Merchandise to the #NFTcommunity.
              </p>
            </div>
            <ul className='journey_sofar_list'>
              <li>
                <h3>How It Started:</h3>
                <p>
                As mentioned through many medium posts the idea of O.G.C || NFTsnapback came from while being part of the Cyberkong community. The reason behind it is simple, we believe that it is inevitable that the world of physical fashion, image and style will merge with the realm of NFTs like we have already seen with the collectible and gaming sectors. So staring as early as August 2021 the concept was in motion with a successful soft launch using a Cyberkong #327.
                </p>
              </li>
              <li>
                <h3>Genesis Soft Launch:</h3>
                <p>
                There was 275 Genesis O.G.C || KONGZ NFTsnapback that was created. These NFT at the time was all airdropped using a Snapshot of cyberkongz holders at the time, through the smart contract. As months went by we sourced the finest quality hats, production company and packing company. This trend hasn’t gone unnoticed by major apparel brands either as we have seen with the recent Adidas and Nike entrants into the NFT space. And thus, it is clear that there is significant opportunity in creating a unique, community focused experience in the Digi-physical space.
                </p>
              </li>
              <li>
                <h3>Claim Success:</h3>
                <p>
                Finally the day came when the NFT holders were able to claim their NFTsnapback. A great success and achievement where NFTsnapback distributed the 1st NFT the was back by a physical SNAPBACK. This proof of concept was amazing to see and the community has been appreciative and amazed on the quality Merchandise they had received. Now we have built out our own platform using our own Smart Contract that will make creating and claiming Physical Assets easy for all our customers.
                </p>
              </li>
              <li>
                <h3>Collaboration:</h3>
                <p>
                O.G.C || NFTsnapback are excited to launch & collaborate with 4 projects/Influencer’s in the NFT space.
                </p>
                <br />
                <p>
                Introducing:
                <ul style={{ marginLeft: "50px" }}>
                  <li><p>Avastars: Using an NFT of a previous co-founder @NFT42. (100% proceeds go to charity)</p></li>
                  <li><p>Cloudwhite, an Influencer in the NFT space and the Founder of $COKE Axie Infinity.</p></li>
                  <li><p>Eric P. Rhodes, Founder of Unofficial Punks the man that stared the whole derivatives of the Cryptopunk movement.</p></li>
                  <li><p>Florian Tappeser, a movie industry veteran who worked on many acclaimed animation hits like Hotel Transylvania and How To Train Your Dragon & has his on brand in Drippieverse™ and work with some of the biggest companies in the space such as Genies.</p></li>
                </ul>
                </p>
                <br />
                <p>
                O.G.C || NFTsnapback are proud to be working with some of the most incredible people and communities in this space. Our Collaborations service will involve partnering with projects/communities to do a joint venture launch.O.G.C will create a collection of branded snapback hats offering a one-stop-shop solution, which would involve us doing the design samples, e-commerce, production, and distribution.
                </p>
              </li>
              <li>
                <h3>Minting Pass:</h3>
                <p>
                O.G.C || NFTsnapback will create a 1-of-1’s service Mint Pass collection. The service will be targeted towards a mass market audience by enabling anyone to turn their PFP or NFT collection item(s) into a redeemable physical & digital wearable item. Effectively we will be offering a customisable experience where for example, the owner of a Cyberkong, Bored Ape or any favourite project can turn this NFT into a snapback hat. We know that this will give more power to encourage most important express someones identity through fashion.
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
            <h2 className='superion-font'>Official O.G.C || NFTsnapback Collab</h2>
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
          <h2 className='superion-font'>O.G.C || NFTsnapback</h2>
          <p>
          Our mission is to create a high end quality brand where our customers can be proud to wear and be utilised by the owner in the physical world, and in the digital world.
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
              <div className='comingSoon-bg' style={{background: `url("${assets.comingSoon5}")`, backgroundSize: 'cover', backgroundPosition: 'center', width: "380px", height: "312px", marginBottom: "20px", borderRadius: "30px", marginTop: "-30px" }} alt='' />
              <div className='comingSoon-bg' style={{background: `url("${assets.comingSoon6}")`, backgroundSize: 'cover', backgroundPosition: 'center', width: "380px", height: "312px", borderRadius: "30px" }} alt='' />
            </li>
          </ul>
        </div>
      </div>

      {/* <div className='mint_pass'>
        <div className='wrapper'>
          <h3 className='superion-font'>
            Minting Pass: All Physical NFTsnapback's Will Come With Customised
            Packaging.
          </h3>
        </div>
      </div> */}
      <div className='nfst_medium'>
        <div className='wrapper'>
          <div className='nfst_medium_iner'>
            <h3 className='superion-font'>O.G.C || NFTsnapback Social Posts</h3>
            <p>Stay updated and informed on when the latest drops and update on O.G.C || NFTsnapbackt.</p>
            <a href='http://www.medium.com/@nftsnapback' style={{ marginLeft: "50px", float: "left"}}>
              Read on Medium
              <img src={assets.mediumIcon} alt='' />
            </a>
            <a href='https://www.instagram.com/nftsnapback'>
              Read on Instagram
              <img src={assets.instagram} alt='' />
            </a>
            <a href='https://www.twitter.com/nftsnapback' style={{ marginRight: "50px", float: "right"}}>
              Read on Twitter
              <img src={assets.twitter} alt='' />
            </a>
          </div>
        </div>
      </div>
      <div className='how_it_works'>
        <div className='wrapper'>
          <h2 className='superion-font'>O.G.C || NFTsnapback How Does It Work?</h2>
          <ul className='how_it_works_list'>
            <li>
              <div className='how_it_works_icon'>
                <img src={assets.nuyIcon} alt='' />
              </div>
              <h3>Buy O.G.C || NFTsnapback</h3>
              <p style={{ textAlign: "left" }}>
              To be able to buy our NFTs there will be two ways.  
                <br />
                <br />
                1. When ever we announce a collaboration or when a new series of Mint pass, these will be able to be bought through our minting page. 
                <br />
                <br />
                2. If you missed out on the minting, then have a look at Opensea, Look Rare and see if there are any O.G.C || NFTsnapback available on the open market.
              </p>
            </li>
            <li>
              <div className='how_it_works_icon'>
                <img src={assets.emailOpenIcon} alt='' />
              </div>
              <h3>Claim O.G.C || NFTsnapback</h3>
              <p style={{ textAlign: "left" }}>
              To claim the physical Item all the new collections will require you to burn your NFT (Series 1 Kongz Will not be burnable).  Upon Burning your NFT you will be required to fill out your shipping details. Once we receive your information your NFT will be updated and inform you of the status of your Physical item. We have created a system that allows you to keep track of your order on our Collected NFT page.
              </p>
            </li>
            <li>
              <div className='how_it_works_icon'>
                <img src={assets.giftIcon} alt='' />
              </div>
              <h3>O.G.C || NFTsnpaback Decentraland Wearable</h3>
              <p style={{ textAlign: "left" }}>
              We have now created an O.G.C || NFTsnapback Decentraland wearable for all customers that claim their physical NFTsnapback. This wearable item will be airdropped and there is no additional steps the customer has to take. As clothing is one of the fundamental facets of identity it makes sense that we want your identity image and character to be able to be transferred into the metaverse.
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
                  designation={member.designation}
                  title={member.title}
                  description={member.description}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='nft_charity'>
        <div className='wrapper'>
          <div className='nft_charity_top'>
            <h2 className='superion-font'>O.G.C || NFTsnapback Charity Programme</h2>
            <p>
            Giving back is a key part of O.G.C || NFTsnapback business ethos.
            </p>
          </div>
          <div className='nft_charity_iner'>
            <div className='nft_charity_left'>
              <p style={{ marginBottom: "5px" }}>
              The NFT space is all about community, whether that is building, sharing, or contributing. And thus, so too should projects in this space focus on building a narrative that is broader than just growth and profits. The narrative of reinvesting to improve outcomes is something that should and will be a fundamental part of the O.G.C || NFTsnapback brand.
              </p>
              <p style={{ marginBottom: "5px" }}>
              Our charity partners of choice will be varied, but initially focused on Africa given the background of the members of the founding team and how we believe we can best contribute to improving outcomes.
              </p>
              <p style={{ marginBottom: "5px" }}>
              Over the years our members have been involved in independent charitable giving such as providing tuition and Higher Education support for young people in East Africa, which is a focus that we would want to continue and scale as we have seen the impact of investment in education and boosting individual prosperity.
              </p>
              <p>
              A registered Ethereum (ETH) Address will be assigned to the O.G.C Charitable Giving Programme.
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
      <InnerFooter />
    </>
  );
};

export default Index;
