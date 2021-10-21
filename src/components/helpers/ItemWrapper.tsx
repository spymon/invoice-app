interface Props {
  className?: string
  display?: string
  flexDirection?: string
  alignItems?: string
  JustifyContent?: string
  maxWidth?: string
  margin?: string
}

export const ItemWrapper: React.FC<Props> = ({ className, children }) => {
  return <div className={className}>{children}</div>
}
