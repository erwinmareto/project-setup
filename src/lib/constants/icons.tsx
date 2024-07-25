import React from 'react';

import { AiOutlineQuestionCircle } from 'react-icons/ai';
import {
  SiNetflix,
  SiMicrosoft,
  SiSpotify,
  SiUdemy,
  SiPlaystation,
  SiPrime,
  SiCanva,
  SiDropbox
} from 'react-icons/si';
import { TbBrandDisney } from 'react-icons/tb';

const iconContainerStyles = {
  height: '1.25rem', // h-5
  width: '1.25rem', // w-5
  borderRadius: '0.375rem', // rounded-md
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

const NetflixIcon = () => (
  <div style={{ ...iconContainerStyles, backgroundColor: '#101010' }}>
    <SiNetflix style={{ color: '#E50914' }} />
  </div>
);

const Office365Icon = () => (
  <div style={{ ...iconContainerStyles, backgroundColor: '#D83B01' }}>
    <SiMicrosoft style={{ color: '#ffffff' }} />
  </div>
);

const SpotifyIcon = () => (
  <div style={{ ...iconContainerStyles, backgroundColor: '#1DB954' }}>
    <SiSpotify style={{ color: '#ffffff' }} />
  </div>
);

const UdemyIcon = () => (
  <div style={{ ...iconContainerStyles, backgroundColor: '#A435F0' }}>
    <SiUdemy style={{ color: '#ffffff' }} />
  </div>
);

const PlayStationIcon = () => (
  <div style={{ ...iconContainerStyles, backgroundColor: '#003087' }}>
    <SiPlaystation style={{ color: '#ffffff' }} />
  </div>
);

const AmazonIcon = () => (
  <div style={{ ...iconContainerStyles, backgroundColor: '#00A8E1' }}>
    <SiPrime style={{ color: '#ffffff' }} />
  </div>
);

const CanvaIcon = () => (
  <div style={{ ...iconContainerStyles, backgroundColor: '#00C4CC' }}>
    <SiCanva style={{ color: '#ffffff' }} />
  </div>
);

const DropboxIcon = () => (
  <div style={{ ...iconContainerStyles, backgroundColor: '#0061FF' }}>
    <SiDropbox style={{ color: '#ffffff' }} />
  </div>
);

const DisneyIcon = () => (
  <div style={{ ...iconContainerStyles, backgroundColor: '#113CCF' }}>
    <TbBrandDisney style={{ color: '#ffffff' }} />
  </div>
);

const OthersIcon = () => (
  <div style={{ ...iconContainerStyles, backgroundColor: '#94a3b8 ' }}>
    <AiOutlineQuestionCircle style={{ color: '#ffffff' }} />
  </div>
);

const subscriptionIcons: { [key: string]: JSX.Element } = {
  Netflix: <NetflixIcon />,
  'Office 365': <Office365Icon />,
  Spotify: <SpotifyIcon />,
  // 'Gym Membership': <UdemyIcon />, // Placeholder, replace with an appropriate icon if available
  Udemy: <UdemyIcon />,
  'PlayStation Plus': <PlayStationIcon />,
  'Amazon Prime': <AmazonIcon />,
  Canva: <CanvaIcon />,
  Dropbox: <DropboxIcon />,
  'Disney+': <DisneyIcon />,
  Others: <OthersIcon />
};

export default subscriptionIcons;
