import { CodeLineProps } from 'interfaces/code-line'
import React from 'react'

export const CodeLine: React.FC<CodeLineProps> = ({ text, children }) => {
  return <span className="code">{text || children}</span>
}
