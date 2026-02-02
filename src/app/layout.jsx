import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Igor Matsenko',
    default:
      'Igor Matsenko - Enterprise Automation Engineer & AI Operations Specialist
  },
  description:
    'I'm Igor, an enterprise automation engineer based in Ohio. I specialize in developing AI-powered automation solutions using Microsoft Power Automate, Copilot Studio, and Azure, helping organizations streamline their workflows and boost productivity.
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
