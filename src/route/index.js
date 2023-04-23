// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================
var header = {
  name: {
    firstname: 'Dmitro',
    lastname: 'Ivanov',
  },
  position: 'Junior Fullstack JS Developer',
  salary: '600$ in month',
  address: 'Kyiv, Mykola Bazhana Ave., 8b',
}
var footer = {
  social: {
    email: {
      text: 'dmytro@mail.com',
      href: 'mailto:dmytro@mail.com',
    },

    phone: {
      text: '+380670000123',
      href: 'tel:+380670000123',
    },
    linkedin: {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/dmytro-test',
    },
  },
}
// router.get Створює нам один ендпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки

router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume-Summary',
    },
    header,
    main: {
      summary: {
        title: 'Summary',
        text: `Open-minded for new technologies, 1 years of experience
               in development. Wheneever I start work on a new project 
               I lean the domane and try to understand the idea of the 
               project. Good player, every colleague is a friend to me.`,
      },

      experience: {
        title: 'Other experience',
        text: `Pet project for parsing sport betting data from different
              platforms (odds) and sport statistics (tournament position, 
              goals etc), analyzing by simple mathematcs models and preparing 
              probability for such events like: money line - first win/draw/second
              win, totals etc.`,
      },
    },
    footer,
  })
})

// ================================================================
// ================================================================

router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume-Skills',
    },
    header,
    main: {
      skills: [
        {
          name: 'HTML',
          point: 9,
          isTop: false,
        },
        {
          name: 'Handlebars',
          point: 8,
          isTop: false,
        },
        {
          name: 'VS Code',
          point: 10,
          isTop: true,
        },
        {
          name: 'Git',
          point: 9,
          isTop: false,
        },
        {
          name: 'NPM & Terminal',
          point: 7,
          isTop: false,
        },
        {
          name: 'React.js',
          point: 0,
        },
        {
          name: 'PHP',
          point: null,
        },
      ],
      hobbies: [
        {
          name: 'text',
          isMain: true,
        },
        {
          name: 'text',
          isMain: false,
        },
        {
          name: 'text',
          isMain: true,
        },
      ],
    },
    footer,
  })
})

// ================================================================
//=================================================================
router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume-Education',
    },
    header,
    main: {
      educations: [
        {
          name: 'Київський національний університет культури і мистуцтв (КНУКіМ)',
          // point: 9,
          isEnd: true,
        },
        {
          name: 'Унівурситет економіки та права "КРОК"',
          // point: 9,
          isEnd: false,
        },
        {
          name: 'Міжнародна академія управління персоналом (МАУП)',
          // point: 9,
          isEnd: false,
        },
      ],
      certificates: [
        {
          name: 'text',
          id: 'number',
        },
        {
          name: 'text',
          id: 'number',
        },
        {
          name: 'text',
          id: 'number',
        },
      ],
    },
    footer,
  })
})
//=================================================================
//=================================================================
router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані
    layout: 'big',
    page: {
      title: 'Resume-Work',
    },
    header,
    main: {
      works: [
        {
          position: 'Junior Fullstack Developer',
          company: {
            name: 'IT Brains',
            url: 'https://it-brains.com.ua/',
          },
          duration: {
            from: '22.04.2023.',
            to: null,
          },
          projectAmount: 3,

          projects: [
            {
              name: 'Resume',
              url: 'https://resume.com.ua/',
              about: 'text',
              stackAmount: 3,
              awardAmount: 2,
              stacks: [
                {
                  name: 'React.js',
                },
                {
                  name: 'HTML / CSS',
                },
                {
                  name: 'Node.js',
                },
              ],
              awards: [
                {
                  name: 'text',
                },
                {
                  name: 'text',
                },
              ],
            },
          ],
        },
      ],
    },
    footer,
  })
})
// Підключаємо роутер до бек-енду
module.exports = router
