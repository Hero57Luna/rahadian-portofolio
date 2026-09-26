import fambusAdmin from './assets/fambus-admin.webp'
import fambusAdminThumb from './assets/fambus-admin-thumb.webp'
import fambusApp from './assets/fambus-app.webp'
import fambusAppThumb from './assets/fambus-app-thumb.webp'
import laravel from './assets/laravel.webp'
import me from './assets/me.webp'
import mongodb from './assets/mongodb.svg'
import mysql from './assets/mysql.svg'
import postgres from './assets/postgres.svg'
import python from './assets/python.webp'
import react from './assets/react.svg'
import reactNative from './assets/react-native.webp'
import symfony from './assets/symfony.svg'
import yii2 from './assets/yii2.webp'

// All site content lives here — edit this file, not the components.

export const profile = {
  name: 'Rahadian Bagaskara',
  fullName: 'Rahadian Bagaskara Adikusuma',
  birthday: 'May 16, 1998',
  email: 'rahadianadikusuma@gmail.com',
  phone: '+62 823-3579-0073',
  phoneHref: '+6282335790073',
  photo: me,
}

export const nav = [
  ['Home', 'home'],
  ['About', 'about'],
  ['Services', 'services'],
  ['Projects', 'projects'],
  ['Contact', 'contact'],
]

// Full years since the birthday, so the text never goes stale.
const born = new Date(profile.birthday)
const today = new Date()
const age =
  today.getFullYear() -
  born.getFullYear() -
  (today < new Date(today.getFullYear(), born.getMonth(), born.getDate()) ? 1 : 0)

export const about = [
  `My name is Bagas and I am ${age} years old. I've been working as a programmer at Arkana Teknologi Indonesia for about a year now. Also currently I am working as a part-time coding instructor at Timedoor Academy`,
  'I was graduated from Polytechnic State of Malang, with a degree for applied computer science. After graduated on August 2021, I immediately got a job offer from Arkana Teknologi Indonesia and this is where I learned so much about programming in the real world',
  'Moving forward, I hope to expand my experience across different companies and different development.',
]

export const stats = [
  ['1+', 'Years of Experience'],
  ['4', 'Projects Finished'],
]

export const services = [
  { title: 'Laravel', logo: laravel, description: 'API and web development using Laravel framework' },
  { title: 'React Native', logo: reactNative, description: 'Mobile app development using React Native framework' },
  { title: 'Python', logo: python, description: 'API development and data scraping using Python' },
  { title: 'Yii2', logo: yii2, description: 'Web application development using Yii2 framework' },
  { title: 'MySQL', logo: mysql, description: 'Relational database design and querying using MySQL' },
  { title: 'Postgres', logo: postgres, description: 'Relational database design and querying using PostgreSQL' },
  { title: 'MongoDB', logo: mongodb, description: 'NoSQL document database design and querying using MongoDB' },
  { title: 'ReactJS', logo: react, description: 'Web application development using the ReactJS library' },
  // darkInvert: the logo is near-black, so flip it on dark cards
  { title: 'Symfony', logo: symfony, darkInvert: true, description: 'API and web development using Symfony framework' },
]

// Each entry is a group of related work; clicking its card opens a detail modal.
export const projects = [
  {
    title: 'Fambus App',
    tags: ['React Native', 'Laravel'],
    thumb: fambusAppThumb,
    // Draft text — replace with the real project story.
    description:
      'A mobile app built with React Native and published on Google Play, backed by a Laravel admin dashboard that manages its content and data.',
    links: [
      ['Google Play', 'https://play.google.com/store/apps/details?id=id.ac.uc.fbc.app&hl=en&gl=US'],
      ['Admin Dashboard', 'https://fambus-admin.herokuapp.com/'],
    ],
    // Same shape Lightbox expects: { title, tag, image } (+ thumb for the modal gallery).
    images: [
      { title: 'Mobile app', tag: 'React Native', thumb: fambusAppThumb, image: fambusApp },
      { title: 'Admin dashboard', tag: 'Laravel', thumb: fambusAdminThumb, image: fambusAdmin },
    ],
  },
]
