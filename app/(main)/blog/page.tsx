import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { blogPosts } from "@/data/blog-posts"
import { BlogPagination } from "@/components/blog-pagination"

export const metadata: Metadata = {
  title: "Wadi Rum Desert Blog | Travel Tips, Guides & Stories",
  description:
    "Explore our collection of articles about Wadi Rum desert adventures, Bedouin culture, travel tips, and stunning photography from Jordan's red desert.",
  keywords:
    "Wadi Rum blog, desert travel, Jordan travel blog, Bedouin culture, desert photography, Wadi Rum travel tips, Wadi Rum Jeep tours",
  alternates: {
    canonical: "https://wadirum.org/blog",
  },
}

export default function BlogPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const page = typeof searchParams.page === "string" ? Number.parseInt(searchParams.page) : 1
  const postsPerPage = 9
  const totalPages = Math.ceil(blogPosts.length / postsPerPage)

  // Ensure page is within valid range
  const currentPage = page < 1 ? 1 : page > totalPages ? totalPages : page

  // Get posts for current page
  const startIndex = (currentPage - 1) * postsPerPage
  const endIndex = startIndex + postsPerPage
  const currentPosts = blogPosts.slice(startIndex, endIndex)

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Wadi Rum Desert Blog</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Explore our collection of articles about Wadi Rum desert adventures, Bedouin culture, travel tips, and
          stunning photography from Jordan's red desert.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentPosts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.id} className="group">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="relative h-64 w-full">
                <Image
                  src={post.image || "/images/stargazing-arch.png"}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  priority={Number.parseInt(post.id) <= 3}
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-blue-600 mb-2">
                  {post.category} • {post.date}
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600">{post.excerpt}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="mt-12">
          <BlogPagination currentPage={currentPage} totalPages={totalPages} />
        </div>
      )}
    </div>
  )
}
