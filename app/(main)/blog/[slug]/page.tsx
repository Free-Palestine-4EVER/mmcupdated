import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { blogPosts } from "@/data/blog-posts"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    return {
      title: "Blog Post Not Found",
      description: "The requested blog post could not be found.",
    }
  }

  return {
    title: `${post.title} | Wadi Rum Desert Blog`,
    description: post.excerpt,
    keywords: `Wadi Rum, ${post.category}, ${post.title}, Jordan travel, desert adventure`,
    alternates: {
      canonical: `https://wadirum.org/blog/${post.slug}`,
    },
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  // Simple Markdown-style parsing for the content
  const formatContent = (content: string) => {
    // Parse headers
    let formattedContent = content.replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold mt-8 mb-4">$1</h1>')
    formattedContent = formattedContent.replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold mt-6 mb-3">$1</h2>')
    formattedContent = formattedContent.replace(/^### (.*$)/gm, '<h3 class="text-xl font-bold mt-5 mb-2">$1</h3>')

    // Parse bold text
    formattedContent = formattedContent.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")

    // Parse list items
    formattedContent = formattedContent.replace(/^- (.*$)/gm, '<li class="ml-6 list-disc">$1</li>')
    formattedContent = formattedContent.replace(/^(\d+)\. (.*$)/gm, '<li class="ml-6 list-decimal">$2</li>')

    // Wrap adjacent list items in ul/ol tags
    const listItemRegex = /<li class="ml-6 list-disc">(.*?)<\/li>/g
    const listItems = formattedContent.match(listItemRegex)
    if (listItems) {
      const listItemsString = listItems.join("")
      formattedContent = formattedContent.replace(
        new RegExp(listItemsString, "g"),
        `<ul class="my-4">${listItemsString}</ul>`,
      )
    }

    // Parse paragraphs (lines that are not headers or list items)
    formattedContent = formattedContent.replace(/^(?!<h|<li|<ul|<ol)(.*$)/gm, (match) => {
      if (match.trim() === "") return match // Skip empty lines
      return `<p class="my-4">${match}</p>`
    })

    return formattedContent
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          Back to Blog
        </Link>

        <div className="bg-white rounded-lg overflow-hidden shadow-lg">
          <div className="relative h-96 w-full">
            <Image
              src={post.image || "/images/stargazing-arch.png"}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 1200px, 1200px"
              className="object-cover"
              priority
            />
          </div>

          <div className="p-8">
            <div className="text-sm text-blue-600 mb-2">
              {post.category} • {post.date}
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">{post.title}</h1>

            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
            />
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts
              .filter((relatedPost) => relatedPost.id !== post.id && relatedPost.category === post.category)
              .slice(0, 3)
              .map((relatedPost) => (
                <Link href={`/blog/${relatedPost.slug}`} key={relatedPost.id} className="group">
                  <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
                    <div className="relative h-48 w-full">
                      <Image
                        src={relatedPost.image || "/images/stargazing-arch.png"}
                        alt={relatedPost.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {relatedPost.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
