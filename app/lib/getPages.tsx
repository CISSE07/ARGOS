import fs from 'fs'
import path from 'path'
export type NavItem = {
  label: string
  href: string
}


export const getHeaderItems = (): NavItem[] => {
  try {
    const cwd = process.cwd()
    const pagesDirectory = path.join(cwd, 'app', '(pages)')

    const dirents = fs.readdirSync(pagesDirectory, { withFileTypes: true })

    const items: NavItem[] = dirents
      .filter((d) => d.isDirectory())
      .map((d) => d.name)
      .filter((name) => {
        if (!name) return false
        if (name.startsWith('(')) return false 
        if (name.startsWith('[')) return false 
        if (name.startsWith('.')) return false 
        return true
      })
      .map((name) => {
        const label = name
          .replace(/[-_]/g, ' ')
          .replace(/\b\w/g, (c) => c.toUpperCase())

        const href = name === 'index' ? '/' : `/${name}`

        return { label, href }
      })

    return items
  } catch (err) {
    console.error('getHeaderItems: erreur en lisant (pages):', err)
    return []
  }
}