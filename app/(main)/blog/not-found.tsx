import Link from "next/link"
import Image from "next/image"

export default function BlogNotFound() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto text-center">
        <div className="relative h-64 w-full mb-8">
          <Image
            src="/images/stargazing-arch.png"
            alt="Wadi Rum Desert"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 1200px, 1200px"
            className="object-cover rounded-lg"
            priority
          />
        </div>

        <div className="bg-amber-50 p-8 rounded-lg border border-amber-200">
          <h1 className="text-3xl font-bold text-amber-800 mb-4">Blog Post Not Found</h1>
          <p className="text-lg text-gray-700 mb-6">
            We couldn't find the blog post you're looking for. It may have been moved, deleted, or never existed.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
          >
            Return to Blog
          </Link>
        </div>
      </div>
    </div>
  )
}
