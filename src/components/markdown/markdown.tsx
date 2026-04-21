import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type MarkdownProps = {
  content: string
}

export const Markdown = ({ content }: MarkdownProps) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ children }) => (
          <h1 className="text-gray-100 text-heading-md md:text-heading-xl mb-4">
            {children}
          </h1>
        ),
        h2: ({ children }) => (
          <h2 className="text-gray-100 text-heading-sm md:text-heading-lg mt-8 mb-4">
            {children}
          </h2>
        ),
        a: ({ href, children }) => (
          <a href={href} className="text-blue-200 hover:underline">
            {children}
          </a>
        ),
        p: ({ children }) => (
          <p className="text-gray-200 text-body-md leading-relaxed mb-6">
            {children}
          </p>
        ),
        strong: ({ children }) => (
          <strong className="text-gray-100 text-body-md font-extrabold">
            {children}
          </strong>
        )
      }}
    >
      {content}
    </ReactMarkdown>
  )
}