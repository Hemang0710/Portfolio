/**
 * Site config — single source of truth for your profile.
 *
 * Update `lib/site-config.ts` with your real links. All LinkedIn, GitHub, email,
 * resume, and project URLs across the site use these values. When someone clicks
 * LinkedIn, GitHub, or email, they will be sent to these URLs.
 */

export const siteConfig = {
  name: 'Hemang Patel',
  title: 'Full-Stack Developer',
  location: 'Etobicoke, Ontario, Canada',

  links: {
    /** Your LinkedIn profile URL — e.g. https://www.linkedin.com/in/your-username */
    linkedin: 'https://www.linkedin.com/in/hemangpatelj',
    /** Your GitHub profile URL */
    github: 'https://github.com/Hemang0710',
    /** Your email — used for mailto: and contact page */
    email: 'hemangpatel0710@gmail.com',
    phone: '+1 437-858-0484',
    /** Resume PDF: put file in /public or use full URL */
    resumePdf: '/Hemang_Patel_Resume.pdf',
    portfolioRepo: 'https://github.com/Hemang0710/Portfolio',
  },

  githubUsername: 'Hemang0710',
} as const
