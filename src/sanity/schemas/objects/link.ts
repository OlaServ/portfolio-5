export default {
    name: 'link',
    type: 'object',
    title: 'Link',
    fields: [
      {
      title: 'Internal Link',
      name: 'internalLink',
      description: 'Select pages for navigation',
      type: 'reference',
      to: [{ type: 'page' }, {type: "homepage"}, {type: "recommendationsPage"}], 
      },
      {
        name: 'externalUrl',
        title: 'External URL',
        description:"Use fully qualified URLS for external link",
        type: 'url',
      },
    ]
  };