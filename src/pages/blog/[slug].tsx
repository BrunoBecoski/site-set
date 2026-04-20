import { useRouter } from "next/router";
import { allPosts } from "contentlayer/generated";
import Link from "next/link";
import Image from "next/image";
import { Inbox } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";

export default function PostPage() {
  const router = useRouter()
  const slug = router.query.slug as string
  const post = allPosts.find((post) => post.slug.includes(slug))

  return (
    <main>
      {post &&
        <>
          <Breadcrumb className="">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/blog" className="text-gray-100 text-action-sm">
                    Blog
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbSeparator className=" text-gray-300" />

              <BreadcrumbItem>
                <span className="text-blue-200 text-action-sm">
                  {post.title}
                </span>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="grid grid-col-1 lg:-cols-[1fr_300px] gap-6 lg:gap-12">
            <article className="bg-gray-600 rounded-lg overflow-hidden border-2 border-gray-400">
              <figure className="relative aspect-16/10 w-full overflow-hidden rounded-lg ">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={720}
                  height={264}
                  className="object-cover"
                />
              </figure>
            </article>
          </div>
        </>
      }

      {!post &&
        <div className="container px-8 mt-20">
          <div className="flex flex-col items-center justify-center gap-8 border-2 border-dashed border-gray-300 p-8 md:p-12 rounded-lg">
            <Inbox className="size-12 text-cyan-100" />
            <h2 className="text-heading-md text-gray-200 font-sm text-center">Post não encontrado.</h2>
          </div>
        </div>
      }
    </main>
  )
}