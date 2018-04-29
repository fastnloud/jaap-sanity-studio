export default {
    name: 'link',
    title: 'Links',
    type: 'document',
    fields: [
        {
            name: 'label',
            title: 'Label',
            type: 'string'
        },
        {
            name: 'icon',
            title: 'Icon',
            type: 'string'
        },
        {
            name: 'href',
            title: 'Link',
            type: 'url'
        },
        {
            name: 'priority',
            title: 'Priority',
            type: 'number'
        }
    ],
    preview: {
        select: {
            title: 'label',
            subtitle: 'href'
        }
    },
    orderings: [
        {
            title: 'Priority',
            name: 'priority',
            by: [
                {field: 'priority', direction: 'asc'}
            ]
        }
    ]
}
