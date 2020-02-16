module.exports = {
    title: 'Beykun',
    description: 'Welcome to my portofoilio',
    head: [
        ['link', { rel: 'icon', href: '/img/logo.png' }]
    ],
    themeConfig: {
        // logo: '/img/logo.png',
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Portofolio', link: '/portofolio/'},
            {text: 'Blog', link: '/blog/'},
            { text: 'Github', link: 'https://github.com/BeyKun' },
            { text: 'Linkedin', link: 'https://www.linkedin.com/in/bayu-rasukma-raga-87079b192/' }
        ],
        sidebar: {
            '/blog/': [
                '',
                'novel/KDKAM'
            ]
        }
    },
    configureWebpack: {
        resolve: {
          alias: {
            '@img': '/img'
          }
        }
      }
}