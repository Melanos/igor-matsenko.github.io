import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { getAllArticles } from '@/lib/articles'

function ArrowIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6.293 13.293A7 7 0 0 1 8.198 5.99m0 0a7 7 0 1 0 9.899 0m-9.9 0a7.003 7.003 0 0 1 1.606-1.893m5.904 5.904a7.003 7.003 0 0 1-1.606 1.893"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {new Date(article.date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>
        Read article
        <ArrowIcon className="h-4 w-4" />
      </Card.Cta>
    </Card>
  )
}

export const metadata = {
  title: 'Articles',
  description:
    'All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order.',
}

export default async function ArticlesIndex() {
  const articles = await getAllArticles()

  return (
    <SimpleLayout
      title="Writing on software, AI, and automation."
      intro="All of my long-form thoughts on programming, leadership, and technology insights, collected in chronological order."
    >
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          {articles.length > 0 ? (
            articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))
          ) : (
            <p className="text-zinc-600 dark:text-zinc-400">
              No articles found.
            </p>
          )}
        </div>
      </div>
    </SimpleLayout>
  )
}
