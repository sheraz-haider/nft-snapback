import React from 'react';

import assets from '../../assets/images';

const TeamMember = ({ background, profile, title }) => {
  return (
    <>
      <div className='team_img'>
        <img src={background} alt='' />
        <span>
          <img src={profile} alt='' />
        </span>
      </div>
      <div className='team_detail'>
        <h4>{title}</h4>
        <p>
          Founder of NFTsnapback. Passion for NFT and fashion and bring this
          service to everyone in the community. Keen interest in being part of
          the development of this space and will use all my experience to
          provide excellence in this space.
        </p>
        <a href='#'>
          <img src={assets.twitter} alt='' />
          Follow
        </a>
      </div>
    </>
  );
};

export default TeamMember;
