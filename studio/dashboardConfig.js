export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '62fa9dc9818692007fccf89e',
                  title: 'Sanity Studio',
                  name: 'job-hunt-studio',
                  apiId: '3bf3e2d8-4115-4c18-bc19-dd7808d3e06c'
                },
                {
                  buildHookId: '62fa9dca21325900625180b6',
                  title: 'Blog Website',
                  name: 'job-hunt-web',
                  apiId: '4d5a95f8-1587-487f-933c-e1f54d85d33d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jamesgrubb/job-hunt',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://job-hunt-web.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
