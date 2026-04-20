type AvatarTitleProps = {
  children: React.ReactNode
}

export const AvatarTitle = ({ children }: AvatarTitleProps) => {
  return (
    <div className="text-gray-200 text-body-sm">
      {children}
    </div>
  )
}