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

const refview = import.meta.glob('./assets/refview-*.webp', { eager: true, import: 'default' })
const refviewImage = (name, title, tag) => ({
  title,
  tag,
  thumb: refview[`./assets/refview-${name}-thumb.webp`],
  image: refview[`./assets/refview-${name}.webp`],
})

export const profile = {
  name: 'Rahadian Bagaskara',
  fullName: 'Rahadian Bagaskara Adikusuma',
  birthday: 'May 16, 1998',
  careerStart: 'August 1, 2021',
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

const yearsSince = (date, now = new Date()) => {
  const from = new Date(date)
  const anniversary = new Date(now.getFullYear(), from.getMonth(), from.getDate())
  return now.getFullYear() - from.getFullYear() - (now < anniversary ? 1 : 0)
}

export const about = [
  `My name is Bagas and I am ${yearsSince(profile.birthday)} years old. I've been working as a programmer at Arkana Teknologi Indonesia for about a year now. Also currently I am working as a part-time coding instructor at Timedoor Academy`,
  'I was graduated from Polytechnic State of Malang, with a degree for applied computer science. After graduated on August 2021, I immediately got a job offer from Arkana Teknologi Indonesia and this is where I learned so much about programming in the real world',
  'Moving forward, I hope to expand my experience across different companies and different development.',
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
  { title: 'Symfony', logo: symfony, darkInvert: true, description: 'API and web development using Symfony framework' },
]

export const projects = [
  {
    title: 'Fambus App',
    tags: ['React Native', 'Laravel'],
    thumb: fambusAppThumb,
    description:
      'A mobile app built with React Native and published on Google Play, backed by a Laravel admin dashboard that manages its content and data.',
    links: [
      ['Google Play', 'https://play.google.com/store/apps/details?id=id.ac.uc.fbc.app&hl=en&gl=US'],
      ['Admin Dashboard', 'https://fambus-admin.herokuapp.com/'],
    ],
    images: [
      { title: 'Mobile app', tag: 'React Native', thumb: fambusAppThumb, image: fambusApp },
      { title: 'Admin dashboard', tag: 'Laravel', thumb: fambusAdminThumb, image: fambusAdmin },
    ],
  },
  {
    title: 'RefView',
    tags: ['Symfony', 'MySQL', 'JavaScript', 'CSS', 'MongoDB'],
    thumb: refview['./assets/refview-home-thumb.webp'],
    description:
      'A dedicated site for sports officials and assigners by rSchoolToday, integrated with its Activity Scheduler. Officials manage their schedule, sign contracts, set availability and track payments, while assigners assign officials to games, reassign them and send contracts.',
    note: 'RefView has since changed ownership, so the site is no longer accessible.',
    links: [['RefView', 'https://refview.com']],
    images: [
      refviewImage('login', 'Login', 'Official View'),
      refviewImage('home', 'Home', 'Official View'),
      refviewImage('personal-info', 'Personal info', 'Official View'),
      refviewImage('certifications', 'Sports & certifications', 'Official View'),
      refviewImage('schedule', 'My schedule', 'Official View'),
      refviewImage('contracts', 'Contracts', 'Official View'),
      refviewImage('contract', 'Contract document', 'Official View'),
      refviewImage('self-select', 'Self select', 'Official View'),
      refviewImage('availability', 'My availability', 'Official View'),
      refviewImage('directory', 'Directory', 'Official View'),
      refviewImage('payment', 'Payment', 'Official View'),
      refviewImage('games', 'Assign by game', 'Assigner View'),
      refviewImage('selected-officials', 'Reassign officials', 'Assigner View'),
      refviewImage('send-contract', 'Send contract', 'Assigner View'),
    ],
  },
]

export const stats = [
  [`${yearsSince(profile.careerStart)}+`, 'Years of Experience'],
  [String(projects.length), 'Projects Finished'],
]
