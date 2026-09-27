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

const shots = import.meta.glob('./assets/{fambus,refview,wedding,sipena,meetings,chatbot}/*.webp', { eager: true, import: 'default' })
const screenshot = (project) => (name, title, tag) => ({
  title,
  tag,
  thumb: shots[`./assets/${project}/${name}-thumb.webp`],
  image: shots[`./assets/${project}/${name}.webp`],
})
const fambusImage = screenshot('fambus')
const refviewImage = screenshot('refview')
const weddingImage = screenshot('wedding')
const sipenaImage = screenshot('sipena')
const meetingsImage = screenshot('meetings')
const chatbotImage = screenshot('chatbot')

export const profile = {
  name: 'Rahadian Bagaskara',
  fullName: 'Rahadian Bagaskara Adikusuma',
  birthday: 'May 16, 1998',
  careerStart: 'August 1, 2021',
  email: 'rahadianadikusuma@gmail.com',
  phone: '+62 823-3579-0073',
  phoneHref: 'https://wa.me/6282335790073',
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
  'Software Engineer with experience building scalable web applications, backend systems, and user-facing features. Skilled in designing and integrating APIs, working with relational and NoSQL databases, improving application performance, and implementing authentication and real-time communication workflows. Experienced in collaborating with cross-functional and distributed teams, translating product requirements into reliable technical solutions, and supporting development from implementation through deployment. Strong problem-solving skills, attention to detail, and a practical approach to building maintainable software.',
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
    thumb: shots['./assets/fambus/app-thumb.webp'],
    description:
      'A mobile app built with React Native and published on Google Play, backed by a Laravel admin dashboard that manages its content and data.',
    links: [
      ['Google Play', 'https://play.google.com/store/apps/details?id=id.ac.uc.fbc.app&hl=en&gl=US'],
      ['Admin Dashboard', 'https://fambus-admin.herokuapp.com/'],
    ],
    images: [
      fambusImage('app', 'Mobile app', 'React Native'),
      fambusImage('admin', 'Admin dashboard', 'Laravel'),
    ],
  },
  {
    title: 'RefView',
    tags: ['Symfony', 'MySQL', 'JavaScript', 'CSS', 'MongoDB'],
    thumb: shots['./assets/refview/home-thumb.webp'],
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
  {
    title: 'Wedding Invitation',
    tags: ['ReactJS', 'Firebase'],
    thumb: shots['./assets/wedding/cover-thumb.webp'],
    description:
      'A newspaper-styled digital wedding invitation for my own wedding. Each guest gets a personalized link that greets them by name, and the invitation includes a countdown, event details with map links, our love story, a photo gallery, wedding gift info, background music, an English/Indonesian toggle, and a wishes & RSVP form stored in Firebase. A separate admin dashboard manages the guest list, with CSV import, XLSX export and bulk updates, and tracks live check-in attendance at the venue.',
    links: [['Wedding Invitation', 'https://weddingofbagasdhela.com/?ref=4HH0VkBI7SHTuMXFpr9j']],
    images: [
      weddingImage('cover', 'Cover', 'Opening'),
      weddingImage('invitation', 'Our wedding day', 'Invitation'),
      weddingImage('groom', 'The groom', 'Invitation'),
      weddingImage('bride', 'The bride', 'Invitation'),
      weddingImage('countdown', 'Countdown', 'Invitation'),
      weddingImage('details', 'Wedding details', 'Invitation'),
      weddingImage('love-story', 'Love story', 'Invitation'),
      weddingImage('moments', 'Our moments', 'Invitation'),
      weddingImage('gift', 'Wedding gift', 'Invitation'),
      weddingImage('wishes', 'Wishes & RSVP', 'Invitation'),
      weddingImage('thank-you', 'Thank you', 'Invitation'),
      weddingImage('dashboard-home', 'Attendance overview', 'Admin Dashboard'),
      weddingImage('dashboard-guest', 'Guest list', 'Admin Dashboard'),
      weddingImage('dashboard-import', 'Import guests', 'Admin Dashboard'),
      weddingImage('dashboard-export', 'Export guests', 'Admin Dashboard'),
      weddingImage('dashboard-bulk', 'Bulk update', 'Admin Dashboard'),
    ],
  },
  {
    title: 'SiPena4 Exam System',
    tags: ['PHP', 'CodeIgniter', 'MySQL'],
    thumb: shots['./assets/sipena/ujian-thumb.webp'],
    description:
      'A computer-based test (CBT) system for SMPN 4 Kota Probolinggo. Teachers and admins manage students, proctors, classes, subjects and rooms, build a question bank by importing from Word or Excel, schedule exams with tokens and randomized questions, and print attendance lists and student login cards. Students sign in to a portal to see their exam schedule, enter an exam with its token, and check their status.',
    note: 'SiPena4 runs on the school’s internal network, so it is not publicly accessible. Names and personal data in the screenshots are blurred.',
    images: [
      sipenaImage('beranda', 'Dashboard', 'Admin View'),
      sipenaImage('lembaga', 'School profile & exam settings', 'Admin View'),
      sipenaImage('siswa', 'Students', 'Admin View'),
      sipenaImage('soal', 'Question bank', 'Admin View'),
      sipenaImage('impor-word', 'Import questions from Word', 'Admin View'),
      sipenaImage('impor-excel', 'Import questions from Excel', 'Admin View'),
      sipenaImage('jurusan', 'Programs', 'Admin View'),
      sipenaImage('kelas', 'Classes', 'Admin View'),
      sipenaImage('mapel', 'Subjects', 'Admin View'),
      sipenaImage('ruang', 'Room assignment', 'Admin View'),
      sipenaImage('proktor', 'Proctors', 'Admin View'),
      sipenaImage('ujian', 'Exams', 'Admin View'),
      sipenaImage('daftar-hadir', 'Rooms & attendance lists', 'Admin View'),
      sipenaImage('kartu-ujian', 'Student login cards', 'Admin View'),
      sipenaImage('siswa-beranda', 'Dashboard', 'Student View'),
      sipenaImage('siswa-ujian', 'My exams', 'Student View'),
      sipenaImage('siswa-token', 'Exam token', 'Student View'),
      sipenaImage('siswa-hasil', 'Exam status', 'Student View'),
    ],
  },
  {
    title: 'Meetings',
    tags: ['ReactJS', 'Golang', 'Postgres', 'Redis', 'Docker'],
    thumb: shots['./assets/meetings/sidebar-chat-thumb.webp'],
    description:
      'A video conferencing platform built for large online events. Each conference has a stage room for presenters and moderators, while viewers are spread across sharded audience rooms that can be recorded. In the meeting room, participants get public chat, a user list with a waiting room, hand raising, reactions, screen sharing, polls, captions and switchable layouts. Audience members watch the stage from a view-only room with a live viewer count, chat messages that float over the stream, reactions, and volume and zoom controls. An admin panel is used to create and join conferences, change the layout of live meetings, manage the Mixerbot bot for live meetings, and download recordings.',
    note: 'Meetings is an internal project, so its real name is not shown and product names in the screenshots are blurred.',
    images: [
      meetingsImage('main', 'Meeting room', 'Meeting Room'),
      meetingsImage('sidebar-user', 'User list', 'Meeting Room'),
      meetingsImage('sidebar-chat', 'Public chat', 'Meeting Room'),
      meetingsImage('sidebar-panel', 'Layout & settings panel', 'Meeting Room'),
      meetingsImage('audience-standby', 'Audience room', 'Audience Room'),
      meetingsImage('audience-open-action', 'Audience controls', 'Audience Room'),
      meetingsImage('audience-send-chat', 'Audience chat', 'Audience Room'),
      meetingsImage('audience-chat-received', 'Chat overlay', 'Audience Room'),
      meetingsImage('admin-create', 'Create conference', 'Admin Panel'),
      meetingsImage('admin-join', 'Join meeting', 'Admin Panel'),
      meetingsImage('admin-layout', 'Layout setting', 'Admin Panel'),
      meetingsImage('admin-mixerbot', 'Mixerbot', 'Admin Panel'),
      meetingsImage('admin-recording', 'Download recording', 'Admin Panel'),
    ],
  },
  {
    title: 'Widget Chatbot',
    tags: ['Preact', 'MySQL', 'Java', 'ReactJS'],
    thumb: shots['./assets/chatbot/open-thumb.webp'],
    description:
      "An AI chatbot widget that companies embed on their website so visitors can easily get information about the company's products. When a visitor is logged in to their company account, the widget can also pull up their personal account information. It opens with a skeleton loading screen, offers quick service menus and suggested questions, and answers free-form questions with formatted replies.",
    note: 'The project also has an admin dashboard, which is not shown for security reasons. The client name in the screenshots is blurred.',
    images: [
      chatbotImage('closed', 'Widget closed', 'Widget'),
      chatbotImage('loading', 'Skeleton loading', 'Widget'),
      chatbotImage('open', 'Widget opened', 'Widget'),
      chatbotImage('answer', 'AI answer', 'Widget'),
    ],
  },
]

export const stats = [
  [`${yearsSince(profile.careerStart)}+`, 'Years of Experience'],
  [String(projects.length), 'Projects Finished'],
]
