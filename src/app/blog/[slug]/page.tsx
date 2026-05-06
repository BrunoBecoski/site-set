import { PostSlug } from "@/templates/blog";
import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";

type BlogPostPageProps = {
  params: Promise<{
    slug: string
  }>
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params

  const post = allPosts.find((post) => post.slug === slug)

  if(!post) {
    notFound()
  }

  return <PostSlug post={post} />
}