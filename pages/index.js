import React, { useRef } from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Link from 'next/link';
import assets from '../assets/images';

import TeamMember from '../components/teamMember/TeamMember';
import FaqItem from '../components/faqItem/FaqItem';
import InnerFooter from '../components/InnerFooter/InnerFooter';

const nfts = [
  {
    id: 1,
    name: 'Avastars',
    description:
      'Rizzle The 1st Official Rizzle Merchandise collaborated with NFTsnapback. If you you don’t know anything about Rizzle well he is a MetaVerse Maximum-list. Has started and found some amazing projects in the space. Notably known for being Co-founder of project like Avastars, NFT42, and host of many shows across the meatverse & the Matthew & Rizzle show. He is also currently working on #therizzleproject. 100% proceeds of the sale of the Rizzle Avastars collection will go to a charity Foundation that is Started up by NFTsnapback. More information to come out. Now Officially you can buy the 1st Rizzle Avastars merchandise in partnership with NFTsnapabck.',
    image:
      'https://bafybeihwvuaz2es7yatd5ozblviptnu6x7n6rv465qbqewpmoxeha7wvcy.ipfs.infura-ipfs.io/',
    video:
      'https://bafybeibae5mmqj2j63tyjqbn3dpwrx34og6mccngo4cwvm2swxeyrvkdre.ipfs.infura-ipfs.io/',
  },
  {
    id: 2,
    name: 'Drippers',
    description:
      'Rizzle The 1st Official Rizzle Merchandise collaborated with NFTsnapback. If you you don’t know anything about Rizzle well he is a MetaVerse Maximum-list. Has started and found some amazing projects in the space. Notably known for being Co-founder of project like Avastars, NFT42, and host of many shows across the meatverse & the Matthew & Rizzle show. He is also currently working on #therizzleproject. 100% proceeds of the sale of the Rizzle Avastars collection will go to a charity Foundation that is Started up by NFTsnapback. More information to come out. Now Officially you can buy the 1st Rizzle Avastars merchandise in partnership with NFTsnapabck.',
    image:
      'https://bafybeifrfrf6roheuoyjno7ylu235t7df23x2yhhhx2atmkk5h2l2s7xtu.ipfs.infura-ipfs.io/',
    video:
      'https://bafybeiblyf2qulzjjtcskgpb7mfxshw2bruyuzrm7gcp36nfb53hpiwpja.ipfs.infura-ipfs.io/',
  },
  {
    id: 3,
    name: 'Unofficial Punks',
    description:
      'Rizzle The 1st Official Rizzle Merchandise collaborated with NFTsnapback. If you you don’t know anything about Rizzle well he is a MetaVerse Maximum-list. Has started and found some amazing projects in the space. Notably known for being Co-founder of project like Avastars, NFT42, and host of many shows across the meatverse & the Matthew & Rizzle show. He is also currently working on #therizzleproject. 100% proceeds of the sale of the Rizzle Avastars collection will go to a charity Foundation that is Started up by NFTsnapback. More information to come out. Now Officially you can buy the 1st Rizzle Avastars merchandise in partnership with NFTsnapabck.',
    image:
      'https://bafybeihrlxlcreoaaeqi542553gk3kpj567yq3fyrdfgizknp2um4rlwka.ipfs.infura-ipfs.io/',
    video:
      'https://bafybeibbezcrdcdxmzm37xvthumpai5hwikuk6agppskzrgd4c7qpikvgu.ipfs.infura-ipfs.io/',
  },
  {
    id: 4,
    name: 'Cocain Cowboy',
    description:
      'Rizzle The 1st Official Rizzle Merchandise collaborated with NFTsnapback. If you you don’t know anything about Rizzle well he is a MetaVerse Maximum-list. Has started and found some amazing projects in the space. Notably known for being Co-founder of project like Avastars, NFT42, and host of many shows across the meatverse & the Matthew & Rizzle show. He is also currently working on #therizzleproject. 100% proceeds of the sale of the Rizzle Avastars collection will go to a charity Foundation that is Started up by NFTsnapback. More information to come out. Now Officially you can buy the 1st Rizzle Avastars merchandise in partnership with NFTsnapabck.',
    image:
      'https://bafybeifdq7dsqe4zmzprddkrtzyjx456h46wgjwhysntvm3kv2h3slyr3u.ipfs.infura-ipfs.io/',
    video:
      'https://bafybeiaaav5f3q7tshx5vwe5pf7ohhdlo6uptpjcbt556c7cw5rd2uagkm.ipfs.infura-ipfs.io/',
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
    description: (
      <p>
        An experienced NFT investor having invested early in many emerging PFP
        (and now blue chip) and collectible trends. An influencer in the NFT
        space and a core community member of many of the leading
        projects/communities such as Cyberkongz.
      </p>
    ),
  },
  {
    background: assets.teamPattern2,
    profile: assets.team2,
    title: 'Heyotetsuo',
    designation: 'CTO',
    description: (
      <p>
        With over a decade of experience in programming. A full stack Dev
        &proficient in Solidity, RUST, Python and JavaScript just to name a few.
        Worked on NFT/blockchain as a Technical Lead on projects such a
        ArtBlock, MetaHeros & Pixel vault.
      </p>
    ),
  },
  {
    background: assets.teamPattern1,
    profile: assets.team3,
    title: 'Gadawe.Eth',
    designation: 'Head of Operations & logistics',
    description: (
      <p>
        Been working in Operations & logistics for over 10years. I have been
        heading and managing effective solutions for the delivery
        industry.Significant experience working in warehousing and delivery
        companies that facilitate large scale logistical operations
      </p>
    ),
  },
  {
    background: assets.teamPattern2,
    profile: assets.team4,
    title: 'Anthony williams',
    designation: 'Head of Finance and Analytics',
    description: (
      <p>
        Over the last 8 years, I have been working as Operations & financial
        Manager experience in management and senior management. This includes
        managing a $500bn budget for a leading transport and logistics provider.
      </p>
    ),
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
                O.G.C || NFTsnapback is the first physical snapback hat
                collection that is backed by an NFT (Non-Fungible Token) and
                metaverse ready wearable item. Creating unique apparel
                experiences in both the physical and virtual world.
              </h2>
              <div className='hero_container_buttons'>
                <a href='https://www.heyotetsuo.com/kongz-claim/'>Claim Now</a>
                <a href='https://opensea.io/collection/ogcnftsnapback'>
                  Opensea
                </a>
              </div>
            </div>
            <div
              className='hero_container_img'
              style={{ overflow: 'hidden', padding: '0 0 0 50px' }}
            >
              <video
                className='hero-video'
                controls={false}
                autoPlay={true}
                loop={true}
                muted={true}
                // style={{ width: '100%', borderRadius: '50px' }}
              >
                <source src={'/hero-banner.mp4'} type='video/mp4' />
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
        <h2
          className='superion-font'
          style={{
            fontStyle: 'normal',
            marginBottom: '12px',
            fontWeight: 700,
            fontSize: '40px',
            lineHeight: '56px',
            textAlign: 'center',
            color: '#ffffff',
          }}
        >
          Customer Journey
        </h2>

        <div className='wrapper'>
          <div className='collected_nfts_iner'>
            <div className='collected_nfts_cont'>
              <div
                className='collected_nfts_cont_img'
                style={{
                  background: `url("${assets.digital}")`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                {/* <a href='#'>
                  <img src={assets.digital} alt='' />
                </a> */}
              </div>
              <h3>Buy NFT</h3>
            </div>
            <div className='collected_nfts_cont'>
              <div
                className='collected_nfts_cont_img'
                style={{
                  background: `url("${assets.physical}")`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                {/* <a href='#'>
                  <img src={assets.physical} alt='' />
                </a> */}
              </div>
              <h3>Claim Physical</h3>
            </div>
            <div className='collected_nfts_cont'>
              <div
                className='collected_nfts_cont_img'
                style={{
                  background: `url("${assets.metaverse}")`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>
              <h3>Receive Metaverse NFTsnapback</h3>
            </div>
          </div>
        </div>
      </div>
      <div className='journey_sofar'>
        <div className='wrapper'>
          <div className='journey_sofar_iner'>
            <div className='journey_sofar_top'>
              <h2 className='superion-font'>
                O.G.C || NFTsnapback Journey So Far..
              </h2>
              <p>
                NFTsnapback has quietly been building since 2021 with the goal
                of creating a metaverse apparel brand that blends the digital
                and physical world through merchandise helping to create
                identities, form communities and stimulate creative expression.
                Through various light bulb moments, we are finally ready to
                share our high quality, unique range of product(s) and services
                with the #NFTcommunity!
              </p>
            </div>
            <ul className='journey_sofar_list'>
              <li>
                <h3>How It Started:</h3>
                <p>
                  As mentioned in earlier Mediums posts, the idea for the O.G.C
                  || NFTsnapback brand was inspired by my involvement with the
                  CyberKongz community. CyberKongz have created a very distinct
                  brand in the space, forming its own identity and tribe.
                  Observing how a digital profile picture (PFP) project can be
                  so powerful in uniting people of all different genders,
                  ethnicities, and creed under a common set of values and ethos
                  it became apparent that digital identities and communities
                  will have an important part to play in the formation of
                  culture. We also believe that it is inevitable that the world
                  of physical fashion, image, and style – key components of
                  cultural values and identity – will merge with the realm of
                  NFTs like we have already seen with the collectible and gaming
                  sectors. And thus, we want to be at the forefront of this
                  revolution. So, in August 2021 the concept was in motion with
                  the successful soft launch of the first NFT snapback hat
                  production run using CyberKong #327 (Cryptolander’s main Kong)
                  as the brand asset.
                </p>
              </li>
              <li>
                <h3>Genesis Soft Launch:</h3>
                <p>
                  For the soft launch 275 Genesis O.G.C || KONGZ NFTsnapback
                  NFT’s backed by a claimable physical snapback hat were
                  created. The NFT’s were all airdropped to Genesis CyberKongz
                  holders using a snapshot of wallet addresses at an agreed, and
                  communicated, point in time through the smart contract. We
                  also worked long and hard to source the finest quality
                  suppliers, ensuring that our hats and customer experience
                  deliver on the high standards on which we are building this
                  premium brand. Community feedback for the initial proof of
                  concept soft launch was amazing. For our full launch we have
                  built out our own platform and smart contract that will make
                  creating and claiming physical products even easier for all
                  our customers and partners.
                </p>
              </li>
              <li>
                <h3>Launching with a Bang!</h3>
                <p>
                  To introduce O.G.C || NFTsnapback to the #NFTcommunity, we are
                  excited to collaborate with 4 of the most impactful
                  projects/Influencers in the NFT space! We love what these
                  partners are doing and are privileged to be working with them
                  to share our merchandise experiences with their members and
                  community.
                </p>
              </li>
              <li>
                <h3>Collaboration:</h3>
                <p>
                  O.G.C || NFTsnapback are excited to launch & collaborate with
                  4 projects/Influencer’s in the NFT space.
                </p>
                <br />
                <p>
                  Introducing:
                  <ul style={{ marginLeft: '50px' }}>
                    <li>
                      <p>
                        Avastars Collab – one of the most established and
                        engaged NFT communities. Hats will be branded with an
                        NFT of a previous Co-Founder @NFT42. 100% of the
                        proceeds will go to charity.
                      </p>
                    </li>
                    <li>
                      <p>
                        Cloudwhite Collab – an Influencer in the NFT space with
                        a large and engaged following; and the Founder of $COKE
                        Axie Infinity.
                      </p>
                    </li>
                    <li>
                      <p>
                        Eric P. Rhodes – Founder of Unofficial Punks; and the
                        brain behind the whole CryptoPunks derivatives movement.
                      </p>
                    </li>
                    <li>
                      <p>
                        Florian Tappeser – a movie industry veteran who worked
                        on many acclaimed animated hits like ‘Hotel
                        Transylvania’ and ‘How to Train Your Dragon’; and is the
                        Founder of the creative NFT project Drippieverse™.
                      </p>
                    </li>
                  </ul>
                </p>
                <br />
                <p>
                  O.G.C || NFTsnapback are proud to be working with these
                  incredible partners and communities. If you’d like to discuss
                  a collab with your brand or project, please do get in touch.
                  For further details, please download the NFTsnapback deck
                  here.
                </p>
              </li>
              <li>
                <h3>Minting Pass:</h3>
                <p>
                  As well as our Collaborations service, O.G.C || NFTsnapback
                  will also be offering a 1-of-1’s Mint Pass service. This
                  service will be targeted towards a mass market audience by
                  enabling anyone to turn their PFP or NFT collection item(s)
                  into a redeemable physical and metaverse wearable item.
                  Effectively we will be offering a customisable experience
                  where for example, the owner of a CyberKongz, Bored Ape or any
                  project can turn this NFT into a snapback hat. Taking
                  personalised branding and merchandise to a whole new level!
                  And just like with our Collabs, all NFTsnapback physical hats
                  come with an identical metaverse wearable hat to make digital
                  avatars look even more amazing.
                </p>
              </li>
            </ul>
            <div
              className='minting_pass'
              style={{ marginBottom: '20px', paddingTop: '0' }}
            >
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
            <h2 className='superion-font'>
              Official O.G.C || NFTsnapback Collab
            </h2>
            <p>
              Official Collaboration & Partnership from some of the leading
              project to influential People in this space.
            </p>
          </div>
          <ul className='nfts_projects_list'>
            {nfts.map((nft, index) => (
              <li key={index}>
                <Link href='/mint-nfts'>
                  <a>
                    <div
                      className='nfts_projects_img'
                      style={{ overflow: 'hidden' }}
                    >
                      <video
                        controls={false}
                        autoPlay={true}
                        loop={true}
                        muted={true}
                        style={{ height: '100%' }}
                      >
                        <source src={nft.video} type='video/mp4' />
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
            Our mission is to create a high end quality brand where our
            customers can be proud to wear and be utilised by the owner in the
            physical world, and in the digital world.
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
              <div className='comingSoon-bg' alt='' />
              <div className='comingSoon-bg bottom' alt='' />
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
            <h3 className='superion-font'>O.G.C || NFTsnapback Socials</h3>
            <p>
              Stay up to date and informed on the latest developments, product
              updates and drops on O.G.C || NFTsnapback.
            </p>
            <div className='btn-container'>
              <a href='http://www.medium.com/@nftsnapback'>
                Read on Medium
                <img src={assets.mediumIcon} alt='' />
              </a>
              <a href='https://www.instagram.com/nftsnapback'>
                Read on Instagram
                <img src={assets.instagram} alt='' />
              </a>
              <a href='https://www.twitter.com/nftsnapback'>
                Read on Twitter
                <img src={assets.twitter} alt='' />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='how_it_works'>
        <div className='wrapper'>
          <h2 className='superion-font'>
            O.G.C || NFTsnapback How Does It Work?
          </h2>
          <ul className='how_it_works_list'>
            <li>
              <div className='how_it_works_icon'>
                <img src={assets.nuyIcon} alt='' />
              </div>
              <h3>How to Purchase an O.G.C || NFTsnapback</h3>
              <p style={{ textAlign: 'left' }}>
                An NFTsnapback can be acquired either by one of the following
                ways:  
                <br />
                <br />
                1. By being part of a community and/or project we officially
                collaborate with. 
                <br />
                <br />
                2. By purchasing a Mint Pass – these can be bought on our
                minting page.
                <br />
                <br />
                3. On the secondary market. As collab and Mint Pass quantities
                can be small, there might be an opportunity to purchase an
                unclaimed NFT on Opensea or Look Rare by searching for O.G.C ||
                NFTsnapback.
              </p>
            </li>
            <li>
              <div className='how_it_works_icon'>
                <img src={assets.emailOpenIcon} alt='' />
              </div>
              <h3>Claim O.G.C || NFTsnapback</h3>
              <p style={{ textAlign: 'left' }}>
                To claim the physical item the owner of the NFTsnapbacks NFT
                will be required to burn the NFT (Series 1 KONGZ NFTs will not
                be burnable). Upon Burning the NFT you will be required to fill
                out your shipping details. Once received, the hat will be
                dispatched to your physical location. We’ve even made this
                process more streamlined for you by providing a status tracker
                on your Account page. In addition, we have also created a unique
                system that allows you to keep track of your order even after
                the NFT is burnt.
              </p>
            </li>
            <li>
              <div className='how_it_works_icon'>
                <img src={assets.giftIcon} alt='' />
              </div>
              <h3>O.G.C || NFTsnpaback Decentraland Wearable</h3>
              <p style={{ textAlign: 'left' }}>
                We have also created an O.G.C || NFTsnapback Decentraland
                wearable for all customers that claim their physical NFTsnapback
                hat. This wearable item will be airdropped to you at no
                additional cost, nor are there any additional steps required.
                Get ready to make your avatar an instant celebrity and trend
                setter in the metaverse!
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
            <h2 className='superion-font'>
              O.G.C || NFTsnapback Charity Programme
            </h2>
            <p>
              Giving back is a key part of O.G.C || NFTsnapback business ethos.
            </p>
          </div>
          <div className='nft_charity_iner'>
            <div className='nft_charity_left'>
              <p style={{ marginBottom: '5px' }}>
                The NFT space is all about community, whether that is building,
                sharing, or contributing. And thus, so too should projects in
                this space focus on building a narrative that is broader than
                just growth and profits. The narrative of reinvesting to improve
                outcomes is something that should and will be a fundamental part
                of the O.G.C brand.
              </p>
              <p style={{ marginBottom: '5px' }}>
                Our charity partners of choice will be varied, but initially
                focused on Africa given the background of the members of the
                founding team and how we believe we can best contribute to
                improving outcomes.
              </p>
              <p style={{ marginBottom: '5px' }}>
                Over the years our members have been involved in independent
                charitable giving such as providing tuition and Higher Education
                support for young people in East Africa, which is a focus that
                we would want to continue and scale as we have seen the impact
                of investment in education and boosting individual prosperity.
              </p>
              <p>
                A registered Ethereum (ETH) Address will be assigned to the
                O.G.C Charitable Giving Programme.
              </p>
              <p>
                Our Charitable Giving Programme will be funded from the
                following sources:
              </p>
              <p>• 1.25% from all NFT royalties</p>
              <p>• 10% of net profits.</p>

              <a href='http://www.medium.com/@nftsnapback'>
                Read on Medium <img src={assets.mediumIcon} alt='' />
              </a>
            </div>
            <div className='nft_charity_right'>
              <div>
                <img src={assets.charity1} alt='' />
              </div>
              <div>
                <img src={assets.charity2} alt='' />
              </div>
              <div>
                <img src={assets.charity3} alt='' />
              </div>
            </div>
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
                  <p>
                    There are great tutorials that you can find and watch online
                    via Youtube.
                  </p>,
                  <p>
                    We have a link provided by EddieIsKong on his YouTube
                    channel and can talk you through the steps, on how to use
                    Polygon Matic Network.
                  </p>,
                  <p>
                    <a
                      href='https://www.youtube.com/watch?v=xUTYW8uWzIE'
                      target={'_blank'}
                      style={{ color: '#fff', textDecoration: 'underline' }}
                    >
                      https://www.youtube.com/watch?v=xUTYW8uWzIE
                    </a>
                  </p>,
                ],
              },
              {
                question: `How Do I know If the NFT Is Claimed Or Not?`,
                answer: [
                  <p>
                    For the Series 1 O.G.C.|| KONGZ, we have created a tool on
                    our claiming page to see if the NFT has been claimed or not.
                    Please do check before you consider buying to claim.
                  </p>,
                  <p>
                    Use the Token I.D from the NFT you want to check on the
                    Opensea Store and input the information on the claiming
                    page. You will be able to find out if the NFT has been used
                    or not.
                  </p>,
                  <p>
                    On the Newer collection to come out, all claimed NFT's will
                    be burned and only unclaimed NFT's will be on the open
                    market, leaving less issues and concerns if you wish to buy
                    one.
                  </p>,
                ],
              },
              {
                question: `What if my order goes missing or damaged upon receiving the goods?`,
                answer: [
                  <p>
                    We send all order via track and signed and signing is
                    required upon receiving the package.
                  </p>,
                  <p>
                    If you see the package damaged in any way please don’t sign
                    and inform them its damaged and insurance will be able to
                    cover this and work on sending a replacement as soon as
                    possible.
                  </p>,
                  <p>
                    In regards to missing orders we will investigate as to see
                    what occurred and be in direct communication to resolve it
                    as best as possible.
                  </p>,
                ],
              },
              {
                question: `Can I create my own 1-1 NFTsnapback?`,
                answer: [
                  <p>
                    This is something we are starving on to bring to the
                    community and soon this will be possible.
                  </p>,
                  <p>
                    Our Minting pass will enable this service for custom
                    creation. Very soon announcement will be made on how to
                    obtain it.
                  </p>,
                ],
              },
              {
                question: `What if I want to create NFTsnapback for my project or community?`,
                answer: [
                  <p>
                    That is great we are happy to work with projects or
                    influencers and proved NFTsnapback Merchandise.
                  </p>,
                  <p>
                    Reach out via email and we will get back to you as soon as
                    possible.
                  </p>,
                ],
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
