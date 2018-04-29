export default {
    name: 'timeline',
    title: 'Timeline',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'subtitle',
            title: 'Subtitle',
            type: 'string'
        },
        {
            name: 'location',
            title: 'Location',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'blockContent'
        },
        {
            name: 'startDate',
            title: 'Start date',
            type: 'datetime'
        },
        {
            name: 'endDate',
            title: 'End date',
            type: 'datetime'
        }
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'subtitle'
        }
    },
    orderings: [
        {
            title: 'Date',
            name: 'startDate',
            by: [
                {field: 'startDate', direction: 'desc'}
            ]
        }
    ]
}
