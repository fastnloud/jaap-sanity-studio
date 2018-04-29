export default {
    name: 'milestone',
    title: 'Milestones',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'blockContent'
        },
        {
            title: 'Date',
            name: 'date',
            type: 'datetime'
        },
        {
            title: 'Tags',
            name: 'tags',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [
                        {type: 'tag'}
                    ]
                }
            ]
        }
    ],
    preview: {
        select: {
            title: 'title',
            date: 'date'
        },
        prepare(selection) {
            const {title, date} = selection
            return {
                title: title,
                subtitle: date.split('-')[0] // YYYY-MM-DD --> YYYY
            }
        }
    },
    orderings: [
        {
            title: 'Date',
            name: 'date',
            by: [
                {field: 'date', direction: 'desc'}
            ]
        }
    ]
}
