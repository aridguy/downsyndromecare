// src/utils/contentfulClient.js
import { createClient } from 'contentful'

export const contentfulClient = createClient({
  space: process.env.REACT_APP_GENERAL_SPACE_ID,
  accessToken: process.env.REACT_APP_ACHIEVEMENTS_ACCESS_TOKEN
})
