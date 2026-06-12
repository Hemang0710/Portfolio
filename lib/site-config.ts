/**
 * Site config — single source of truth for your profile.
 *
 * Update `lib/site-config.ts` with your real links. All LinkedIn, GitHub, email,
 * resume, and project URLs across the site use these values.
 */

export const siteConfig = {
  name: 'Hemang Patel',
  title: 'AI Full-Stack & GenAI Engineer',
  location: 'Toronto, ON, Canada',

  links: {
    linkedin: 'https://www.linkedin.com/in/hemangpatelj',
    github: 'https://github.com/Hemang0710',
    email: 'hemangpatel0710@gmail.com',
    phone: '+1 437-858-0484',
    resumePdf: '/Hemang_Patel_Resume.pdf',
    portfolioRepo: 'https://github.com/Hemang0710/Portfolio',
  },

  photo: '/hemang-photo.jpg',
  githubUsername: 'Hemang0710',
} as const
