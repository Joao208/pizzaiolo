import { BoldTextProps } from 'interfaces/bold-text'
import React from 'react'

export const BoldText: React.FC<BoldTextProps> = ({ text, children }) => {
  return <span className="bold">{text || children}</span>
}
