export default {
    name: 'placeholder',
    title: 'Placeholder',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'value',
            title: 'Value',
            type: 'string'
        }
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'value'
        }
    }
}
