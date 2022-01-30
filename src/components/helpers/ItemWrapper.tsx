interface IProps {
  className?: string
  display?: string
  flexDirection?: string
  alignItems?: string
  JustifyContent?: string
  maxWidth?: string
  margin?: string
  gap?: string
}

export const ItemWrapper: React.FC<IProps> = ({ className, children }) => {
  return <div className={className}>{children}</div>
}
