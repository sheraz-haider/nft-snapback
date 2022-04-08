import React from 'react';

import assets from '../../assets/images';

const TeamMember = ({ background, profile, title, description, designation }) => {
  return (
    <>
      <div className='team_img'>
        <img src={background} alt='' />
        <span>
          <img src={profile} alt='' />
        </span>
      </div>
      <div className='team_detail' style={{ minHeight: "350px" }}>
        <h4>{title}</h4>
        <p>{designation}</p>
        {description}
        {/* <a target={"_blank"} href={`https://twitter.com/${title}`}>
          <img src={assets.twitter} alt='' />
          Follow
        </a> */}
      </div>
    </>
  );
};

export default TeamMember;
