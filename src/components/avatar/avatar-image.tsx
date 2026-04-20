import Image, { ImageProps } from "next/image"

type AvatarImageProps = ImageProps;

export const AvatarImage = ({ width = 40, height = 40, ...props }: AvatarImageProps) => {
  return (
    <Image
      className="rounded-full border-2 border-blue-200"
      width={width}
      height={height}
      {...props}
    />
  )
}