import planet01Img from '../constants/img/planet-01.png';
import planet02Img from '../constants/img/planet-02.png';
import planet03Img from '../constants/img/planet-03.png';
import planet04Img from '../constants/img/planet-04.png';
import planet05Img from '../constants/img/planet-05.png';
import planet06Img from '../constants/img/planet-06.png';
import planet07Img from '../constants/img/planet-07.png';
import planet08Img from '../constants/img/planet-08.png';

import vrpanoIcon from '../constants/img/vrpano.svg';
import headsetIcon from '../constants/img/headset.svg';

import twitterIcon from '../constants/img/twitter.svg';
import linkedinIcon from '../constants/img/linkedin.svg';
import instagramIcon from '../constants/img/instagram.svg';
import facebookIcon from '../constants/img/facebook.svg';

export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Explore', href: '#explore' },
  { label: 'Get started', href: '#get-started' },
  { label: "What's new", href: '#what-new' },
  { label: 'World', href: '#world' },
  { label: 'Insight', href: '#insight' },
  { label: 'Feedback', href: '#feedback' },
  { label: 'Contacts', href: '#contacts' },
];

export const exploreWorlds = [
  {
    id: 'world-1',
    imgUrl: planet01Img,
    title: 'The Hogwarts',
  },
  {
    id: 'world-2',
    imgUrl: planet02Img,
    title: 'The Upside Down',
  },
  {
    id: 'world-3',
    imgUrl: planet03Img,
    title: 'Kadirojo Permai',
  },
  {
    id: 'world-4',
    imgUrl: planet04Img,
    title: 'Paradise Island',
  },
  {
    id: 'world-5',
    imgUrl: planet05Img,
    title: 'Hawkins Labs',
  },
];

export const startingFeatures = [
  'Find a world that suits you and you want to enter',
  'Enter the world by reading basmalah to be safe',
  'No need to beat around the bush, just stay on the gas and have fun',
];

export const newFeatures = [
  {
    imgUrl: vrpanoIcon,
    title: 'A new world',
    subtitle:
      'we have the latest update with new world for you to try never mind',
  },
  {
    imgUrl: headsetIcon,
    title: 'More realistic',
    subtitle:
      'In the latest update, your eyes are narrow, making the world more realistic than ever',
  },
];

export const insights = [
  {
    imgUrl: planet06Img,
    title: 'The launch of the Metaverse makes Elon musk ketar-ketir',
    subtitle:
      'Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Diam maecenas sed enim ut sem viverra alique.',
  },
  {
    imgUrl: planet07Img,
    title: '7 tips to easily master the madness of the Metaverse',
    subtitle:
      'Vitae congue eu consequat ac felis donec. Et magnis dis parturient montes nascetur ridiculus mus. Convallis tellus id interdum',
  },
  {
    imgUrl: planet08Img,
    title: 'With one platform you can explore the whole world virtually',
    subtitle:
      'Quam quisque id diam vel quam elementum. Viverra nam libero justo laoreet sit amet cursus sit. Mauris in aliquam sem',
  },
];

export const socials = [
  {
    name: 'twitter',
    url: twitterIcon,
  },
  {
    name: 'linkedin',
    url: linkedinIcon,
  },
  {
    name: 'instagram',
    url: instagramIcon,
  },
  {
    name: 'facebook',
    url: facebookIcon,
  },
];
