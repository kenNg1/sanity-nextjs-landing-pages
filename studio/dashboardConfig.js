export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5cead4113b675f118ec2b417',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-rup3u4uq',
                  apiId: 'c5f6acbc-c58b-48be-8cbf-79df34b16677'
                },
                {
                  buildHookId: '5cead411cc81f1149512e461',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-8o3qfbe2',
                  apiId: '4c46c3b0-a76a-459b-b200-3ae979b9a094'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kenNg1/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-8o3qfbe2.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
