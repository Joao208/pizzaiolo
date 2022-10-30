import React from 'react'

export interface CardStepDetailProps
  extends React.HTMLAttributes<HTMLDivElement> {
  reverse?: boolean
}

export interface TitleProps extends React.HTMLAttributes<HTMLParagraphElement> {
  margin?: boolean
}
