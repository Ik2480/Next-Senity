import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'sanity-nextjs',
  title: 'Sanity-nextjs',

  projectId: '9vbdvyqv',
  dataset: 'production',
   basePath: "/studio",

  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
})
