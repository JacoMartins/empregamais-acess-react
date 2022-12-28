import cearaMapa from '../assets/images/ceara-mapa-2.png';
import { Car, Factory, HandFist, Leaf, Lightbulb, Lightning, Person, UsersThree, Wheelchair } from 'phosphor-react';
import { ReactNode } from 'react';

import fortalBrasao from '../assets/images/fortaleza.png';
import maracanauBrasao from '../assets/images/maracanau.png';
import caucaiaBrasao from '../assets/images/caucaia.png';
import saogoncauloBrasao from '../assets/images/saogoncaulo.png';

import diversidade from '../assets/images/diversidade.png'

const cityColor = 'var(--green-250)';
const sectorColor = '#537AA1';
const communityColor = '#8D67AB';
const unable = 'RGBA(0, 0, 0, 0.48)';

interface SearchBlockData {
  title: string;
  bgColor: string;
  fColor?: string;
  isAvailable: boolean;
  isColorful: boolean;
  img?: any;
  alt?: any;
  icon?: ReactNode;
  link: string | null;
  href: string | null;
}

export const homeData = [
  {
    title: "Navegar por cidade",
    img: cearaMapa,
    icon: null,
    alt: 'Brasão da cidade de fortaleza',
    isAvailable: true,
    isColorful: false,
    bgColor: 'var(--chakra-green-500)',
    fColor: 'white',
    link: '/buscar/cidade',
    href: null,
  },
  {
    title: "Navegar por setor",
    img: null,
    icon: <Factory weight='fill' />,
    alt: null,
    isAvailable: true,
    isColorful: false,
    bgColor: 'var(--dark-blue-500)',
    fColor: 'white',
    link: '/buscar/setor',
    href: null,
  },
  {
    title: "Navegar por comunidades",
    img: null,
    icon: <Person weight='light' />,
    alt: null,
    isAvailable: true,
    isColorful: false,
    bgColor: 'var(--purple-500)',
    fColor: 'white',
    link: '/buscar/comunidades',
    href: null,
  },
] as SearchBlockData[];

export const searchByCity = [
  {
    title: "Fortaleza",
    img: fortalBrasao,
    icon: null,
    alt: null,
    isAvailable: true,
    isColorful: false,
    bgColor: 'var(--dark-blue-600)',
    fColor: 'white',
    link: null,
    href: '',
  },

  {
    title: "Maracanaú",
    img: maracanauBrasao,
    icon: null,
    alt: null,
    isAvailable: true,
    isColorful: false,
    bgColor: 'var(--green-250)',
    fColor: 'white',
    link: null,
    href: null,
  },

  {
    title: "Caucaia",
    img: caucaiaBrasao,
    icon: null,
    alt: null,
    isAvailable: false,
    isColorful: false,
    bgColor: unable,
    fColor: 'white',
    link: null,
    href: null,
  },

  {
    title: "São Gonçalo",
    img: saogoncauloBrasao,
    icon: null,
    alt: null,
    isAvailable: false,
    isColorful: false,
    bgColor: unable,
    fColor: 'white',
    link: null,
    href: null,
  },
] as SearchBlockData[];

export const searchBySector = [
  {
    title: "Indústria",
    img: null,
    icon: <Factory weight='light' />,
    alt: null,
    isAvailable: true,
    isColorful: true,
    bgColor: 'var(--teal-500)',
    fColor: 'white',
    link: null,
    href: null,
  },
  {
    title: "Mobilidade",
    img: null,
    icon: <Car weight='light'/>,
    alt: null,
    isAvailable: true,
    isColorful: true,
    bgColor: 'var(--purple-500)',
    fColor: 'white',
    link: null,
    href: null,
  },
  {
    title: "Agro",
    img: null,
    icon: <Leaf weight='light'/>,
    alt: null,
    isAvailable: true,
    isColorful: true,
    bgColor: 'var(--chakra-green-600)',
    fColor: 'white',
    link: null,
    href: null,
  },
  {
    title: "Energia",
    img: null,
    icon: <Lightning weight='light'/>,
    alt: null,
    isAvailable: true,
    isColorful: true,
    bgColor: 'var(--yellow-600)',
    fColor: 'white',
    link: null,
    href: null,
  },
  {
    title: "Tecnologia e Inovação",
    img: null,
    icon: <Lightbulb weight='light' />,
    alt: null,
    isAvailable: true,
    isColorful: true,
    bgColor: 'var(--gray-600)',
    fColor: 'white',
    link: null,
    href: null,
  },
  {
    title: "Marketing e Comunicação",
    img: null,
    icon: <UsersThree weight='regular' />,
    alt: null,
    isAvailable: true,
    isColorful: true,
    bgColor: 'var(--pink-500)',
    fColor: 'white',
    link: null,
    href: null,
  },
] as SearchBlockData[];

export const searchByCommunities = [
  {
    title: "Pessoas com Deficiência (PCD)",
    img: null,
    icon: <Wheelchair weight='light' />,
    alt: null,
    isAvailable: true,
    isColorful: true,
    bgColor: 'var(--teal-700)',
    fColor: 'white',
    link: null,
    href: null,
  },
  {
    title: "Diversidade e Inclusão (DEI)",
    img: null,
    icon: <HandFist weight='light' />,
    alt: null,
    isAvailable: true,
    isColorful: true,
    bgColor: 'var(--purple-800)',
    fColor: 'white',
    link: null,
    href: null,
  },
  {
    title: "Inserção Social e Profissional",
    img: null,
    icon: <Person weight='light' />,
    alt: null,
    isAvailable: true,
    isColorful: true,
    bgColor: 'var(--gray-700)',
    fColor: 'white',
    link: null,
    href: null,
  },
] as SearchBlockData[];