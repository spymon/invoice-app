interface IProps {
  className?: string
  fontSize?: any
  color?: string
}

export const PageText: React.FC<IProps> = ({ className, children }) => {
  return <span className={className}>{children}</span>
}
