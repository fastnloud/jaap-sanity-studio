import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import blockContent from './blockContent'
import author from './author'
import link from './link'
import timeline from './timeline'
import milestone from './milestone'
import tag from './tag'
import placeholder from './placeholder'

export default createSchema({
    name: 'default',
    types: schemaTypes.concat([blockContent, author, link, timeline, milestone, tag, placeholder])
})
