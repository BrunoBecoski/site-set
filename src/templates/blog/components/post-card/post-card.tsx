import Image from "next/image"
import Link from "next/link"

export const PostCard = () => {
  return (
    <Link
      href={`/blog/post`}
      className="w-full max-w-2xl rounded-xl border-2 border-gray-400 hover:border-blue-300 bg-gray-600 overflow-hidden transition-all duration-300"
    >
      <div className="p-2 rounded-md overflow-hidden">
        <div className="relative">
          <div className="absolute top-0 right-0">
            <span className="text-body-sm text-gray-300 bg-gray-600 p-2.5 rounded-bl-md">
              20/12/24
            </span>
          </div>

          <Image
            src="/assets/primeiro-post.png"
            alt="post"
            width={290}
            height={144}
            className="w-full object-cover object-center rounded-md"
          />

          <div className="my-4 space-y-2">
            <h3 className="text-heading-sm text-gray-100 font-sans">
              Transformando seu negócio em uma loja virtual
            </h3>

            <p className="text-body-sm text-gray-300 line-clamp-2">
              Se você está buscando uma maneira simples e eficaz de vender seus produtos online, o Site.Set é a solução perfeita para você. Criar uma loja virtual de sucesso nunca foi tão fácil. Com nossa plataforma intuitiva, você pode criar um site profissional para sua loja em minutos, sem precisar de conhecimentos técnicos.
            </p>
          </div>

          <div className="flex items-center gap-3 border-t border-gray-400 pt-3">
            <div className="relative size-8 rounded-full border-2 border-blue-200 overflow-hidden">
              <Image
                src="/customer-03.png"
                alt="Aspen Dokidis"
                width={30}
                height={30}
                className="object-cover"
              />
            </div>

            <span className="text-body-sm text-gray-300">Aspen Dokidis</span>
          </div>
        </div>
      </div>
    </Link>
  )
}