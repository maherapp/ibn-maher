import rss, {pagesGlobToRssItems} from '@astrojs/rss'
import type { APIContext } from 'astro'

export async function GET(context:APIContext) {
  if(!context.site) throw new Error('site mst be set in astro.config')
    
  return rss({
    title: 'Astro learner | Blog',
    description: 'My journey learning Astro',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: '<language>en-us</language>'
  })
}