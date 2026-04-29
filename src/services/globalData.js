// src/globalData.js
import { createClient } from 'contentful'

class GlobalData {
  constructor() {
    this.data = {
      achievements: null,
      volunteers: null,
      testimonials: null,
      changeContent: null,
      visionMissionGoal: null,
      objectives: null,
      team: null,
      projects: null,
      blog: null,
      faq: null
    }
    this.loaded = false
    this.loading = false
  }

  async loadAllData() {
    if (this.loaded) {
      console.log('📦 Using already loaded data')
      return this.data
    }

    if (this.loading) {
      console.log('⏳ Waiting for existing fetch...')
      await this._waitForLoad()
      return this.data
    }

    const cached = localStorage.getItem('ngo_all_data')
    if (cached) {
      try {
        const { data, timestamp } = JSON.parse(cached)
        if (Date.now() - timestamp < 24 * 60 * 60 * 1000) {
          console.log('💾 Using cached data from localStorage')
          this.data = data
          this.loaded = true
          return this.data
        }
      } catch (e) {
        console.log('Cache parse error, fetching fresh')
      }
    }

    console.log('🌐 Fetching fresh data from Contentful...')
    this.loading = true

    try {
      const spaceId = process.env.REACT_APP_GENERAL_SPACE_ID
      if (!spaceId) {
        console.error('Missing REACT_APP_GENERAL_SPACE_ID in .env file')
        throw new Error('Space ID missing')
      }

      const clientAchievements = createClient({
        space: spaceId,
        accessToken: process.env.REACT_APP_ACHIEVEMENTS_ACCESS_TOKEN
      })

      const clientVolunteer = createClient({
        space: spaceId,
        accessToken: process.env.REACT_APP_VOLUNTEER_ACCESS_TOKEN
      })

      const clientTestimonials = createClient({
        space: spaceId,
        accessToken: process.env.REACT_APP_TESTIMONIAL_ACCESS_TOKEN
      })

      const clientChangeTheWorld = createClient({
        space: spaceId,
        accessToken: process.env.REACT_APP_CHANGETHEWOLRD_ACCESSTOKEN_API_KEY
      })

      const clientMissionsVision = createClient({
        space: spaceId,
        accessToken: process.env.REACT_APP_MISSIONVISIONGOAL_ACCESS_TOKEN
      })

      const clientObjectives = createClient({
        space: spaceId,
        accessToken: process.env.REACT_APP_OBJECTIVES_ACCESS_TOKEN
      })

      const clientTeam = createClient({
        space: spaceId,
        accessToken: process.env.REACT_APP_VOLUNTEER_ACCESS_TOKEN
      })

      const clientProjects = createClient({
        space: spaceId,
        accessToken: process.env.REACT_APP_ACHIEVEMENTS_ACCESS_TOKEN
      })

      const clientBlog = createClient({
        space: spaceId,
        accessToken: process.env.REACT_APP_ACHIEVEMENTS_ACCESS_TOKEN
      })

      const clientFaq = createClient({
        space: spaceId,
        accessToken: process.env.REACT_APP_ACHIEVEMENTS_ACCESS_TOKEN
      })

      const [achievementsRes, volunteersRes, testimonialsRes, changeContentRes, visionMissionRes, objectivesRes, teamRes, projectsRes, blogRes, faqRes] = await Promise.all([
        clientAchievements.getEntries({ content_type: 'achievement' }).catch(e => ({ items: [] })),
        clientVolunteer.getEntries({ content_type: 'volunteers' }).catch(e => ({ items: [] })),
        clientTestimonials.getEntries({ content_type: 'testimonial' }).catch(e => ({ items: [] })),
        clientChangeTheWorld.getEntries({ content_type: 'changeTheWorld' }).catch(e => ({ items: [] })),
        clientMissionsVision.getEntries({ content_type: 'missionAndVisionStatements' }).catch(e => ({ items: [] })),
        clientObjectives.getEntries({ content_type: 'aimsAndObjectives' }).catch(e => ({ items: [] })),
        clientTeam.getEntries({ content_type: 'team' }).catch(e => ({ items: [] })),
        clientProjects.getEntries({ content_type: 'projects' }).catch(e => ({ items: [] })),
        clientBlog.getEntries({ content_type: 'blog' }).catch(e => ({ items: [] })),
        clientFaq.getEntries({ content_type: 'faq' }).catch(e => ({ items: [] }))
      ])

      this.data = {
        achievements: achievementsRes.items,
        volunteers: volunteersRes.items,
        testimonials: testimonialsRes.items,
        changeContent: changeContentRes.items,
        visionMissionGoal: visionMissionRes.items,
        objectives: objectivesRes.items,
        team: teamRes.items,
        projects: projectsRes.items,
        blog: blogRes.items,
        faq: faqRes.items
      }

      localStorage.setItem('ngo_all_data', JSON.stringify({
        data: this.data,
        timestamp: Date.now()
      }))

      this.loaded = true
      console.log('✅ All data loaded and cached!', {
        achievements: this.data.achievements.length,
        volunteers: this.data.volunteers.length,
        testimonials: this.data.testimonials.length,
        changeContent: this.data.changeContent.length,
        visionMissionGoal: this.data.visionMissionGoal.length,
        objectives: this.data.objectives.length,
        team: this.data.team.length,
        projects: this.data.projects.length,
        blog: this.data.blog.length,
        faq: this.data.faq.length
      })
      return this.data
    } catch (error) {
      console.error('❌ Error loading data:', error)
      const expiredCache = localStorage.getItem('ngo_all_data')
      if (expiredCache) {
        console.log('⚠️ Using expired cache due to fetch error')
        const { data } = JSON.parse(expiredCache)
        this.data = data
        this.loaded = true
        return this.data
      }
      throw error
    } finally {
      this.loading = false
    }
  }

  _waitForLoad() {
    return new Promise((resolve) => {
      const checkInterval = setInterval(() => {
        if (!this.loading) {
          clearInterval(checkInterval)
          resolve()
        }
      }, 100)
    })
  }

  async forceRefresh() {
    localStorage.removeItem('ngo_all_data')
    this.loaded = false
    return await this.loadAllData()
  }
}

const globalDataInstance = new GlobalData()
export default globalDataInstance