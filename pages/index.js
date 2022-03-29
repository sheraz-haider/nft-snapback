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
                <a href='https://opensea.io/collection/nftsnapbacks'>Shop on Open Sea</a>
              </div>
            </div>
            <div className='hero_container_img'>
              <img src={assets.headerImg} alt='' />
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
          <div className='video_cont_iner'>
            <video controls id='video' ref={video}>
              <source
                src='https://www.w3schools.com/tags/movie.mp4'
                type='video/mp4'
              />
              Your browser does not support the video tag.
            </video>
            <span
              className='play_icon'
              ref={playBtn}
              onClick={handlePlayVideo}
              id='play_icon'
            ></span>
          </div>
        </div>
      </div>
      <div className='journey_sofar'>
        <div className='wrapper'>
          <div className='journey_sofar_iner'>
            <div className='journey_sofar_top'>
              <h2>NFTsnapback Journey So Far</h2>
              <p>
                NFTsnapback has been growing and creating in the background and
                we are finally at a junction to provide the best quality
                NFTsnapback can provide to the community. Read what we have been
                doing so far and what is yet to come.
              </p>
            </div>
            <ul className='journey_sofar_list'>
              <li>
                <h3>How It Started</h3>
                <p>
                  As mention through many medium posts the idea of NFTsnapback
                  came from while being part of the cyberkong discord.
                  Discussing Kongz merchandise early summer 2021, I wanted to
                  created Snapback for the community. From there the idea kicked
                  off to create not just snapback but infuse the passion and
                  love I found in NFT and combine the two. Where fashion meets
                  tech. So from Early August 2021 NFTsnapback was created.
                </p>
              </li>
              <li>
                <h3>Genesis Launch:</h3>
                <p>
                  Finally the day came when the NFT holders were able to claim
                  their NFTsnapback. A great success and achievement where
                  NFTsnapback distributed the 1st NFT the was back by a physical
                  SNAPBACK. This proof of concept was amazing to see and the
                  community has been appreciative and amazed on the quality
                  Merch they had received.
                </p>
              </li>
              <li>
                <h3>Claim Success:</h3>
                <p>
                  Finally the day came when the NFT holders were able to claim
                  their NFTsnapback. A great success and achievement where
                  NFTsnapback distributed the 1st NFT the was back by a physical
                  SNAPBACK. This proof of concept was amazing to see and the
                  community has been appreciative and amazed on the quality
                  Merch they had received.
                </p>
              </li>
              <li>
                <h3>Next Launch:</h3>
                <p>
                  With the success of the the Genesis Community Cyberkongz
                  NFTsnapback launch we have partnered up with 4
                  projects/Influencer’s in the NFT space. Rizzle Pre Co-founder
                  of Avastars & NFT42, Cloudwhite Influencer in the NFT space
                  and the Founder of $COKE Axie Infinity, Eric Founder of
                  Unofficial Punks the man that stared the whole derivatives of
                  the Cryptopunk movement and Florian Tappeser, a movie industry
                  veteran who worked on many acclaimed animation hits like Hotel
                  Transylvania and How To Train Your Dragon & has his on brand
                  in Drippieverse™ and work with some of the biggest companies
                  in the space such as Genies. NFTsnapback are proud to be
                  working with some of the most incredible people and
                  communities in this space. More announcements due to be
                  announced soon.
                </p>
              </li>
              <li>
                <h3>NEW PARTNERSHIP:</h3>
                <p>
                  We have not stopped and we are only starting. It amazing that
                  we have projects and people in this space that are building
                  the future of tomorrow and also envision what we also see as
                  the forward, which is why we are amazed to be partnering up
                  with Unqily.io. & have Official Sandbox Approved Assets for
                  the Metaverse We will be launching all future NFTsnapback
                  projects and personalised NFT's powered by Uniqly. via the
                  Official NFTsnapback Unqily Store Coming Soon.{' '}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='nfts_projects'>
        <div className='wrapper'>
          <div className='nfts_projects_top'>
            <h2>NFTSNAPBACK PROJECTS</h2>
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
          <h2>Coming Soon</h2>
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
          <h2>Minting Pass Coming Soon</h2>
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
          <h3>
            Minting Pass: All Physical NFTsnapback's Will Come With Customised
            Packaging.
          </h3>
          <a href='#'>Shop Now</a>
        </div>
      </div>
      <div className='nfst_medium'>
        <div className='wrapper'>
          <div className='nfst_medium_iner'>
            <h3>NFTsnapback Medium Posts</h3>
            <p>Check out All posted related to NFTsnapback</p>
            <a href='#'>
              Read on Medium
              <img src={assets.mediumIcon} alt='' />
            </a>
          </div>
        </div>
      </div>
      <div className='how_it_works'>
        <div className='wrapper'>
          <h2>How it works?</h2>
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
              <h3>Buy NFTsnapback NFT</h3>
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
              <h3>Buy NFTsnapback NFT</h3>
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
          <h3> Meet the Team</h3>
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
            <h2>NFTsnapback Charity Programme</h2>
            <p>
              See what we are doing with our profits from sales and royalties.
            </p>
          </div>
          <div className='nft_charity_iner'>
            <div className='nft_charity_left'>
              <p>
                I have been over the last 2 Years as an individual supporting
                Young Teens and paying for there tuition and Higher education
                Degrees.
              </p>

              <p>
                I want to carry that over to a scale where I can not only do
                that but also provide additional needs like building roads,
                community centres, cleaning the streets for cleaner environment,
                education hubs and soo much more.
              </p>

              <p>
                A certain % of profits will be dedicated to the charity
                programme. % of the Profits will go towards developing the
                village and town I come from, and provide a better future for
                children and young adults, one that I was fortunate to get.
              </p>
              <a href='#'>
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
      <div className='collect_nft'>
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
      </div>
      <div className='faq_main'>
        <div className='wrapper'>
          <div className='faq_top'>
            <h3>
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
