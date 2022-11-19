import Link from 'next/link'
import styled, { css, keyframes } from 'styled-components'

import { colors } from 'utils/colors'
import { fonts } from 'utils/fonts'

import { CardStepDetailProps, TitleProps } from '../interfaces'

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }

  40% {
    transform: translateY(-10px);
  }
  
  60% {
    transform: translateY(-10px);
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: linear-gradient(
      0deg,
      rgba(103, 96, 0, 0.05),
      rgba(103, 96, 0, 0.05)
    ),
    ${colors.primary};
`

export const Main = styled.div`
  background: ${colors.secondary};

  height: 90vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
`

export const ContainerText = styled.div``

export const Title = styled.p<TitleProps>`
  font-family: ${fonts.secondary};
  font-style: normal;
  font-weight: 400;
  font-size: 45px;
  line-height: 52px;

  text-align: center;

  color: ${colors.white};

  flex: none;
  order: 0;
  flex-grow: 0;

  max-width: 744px;
  height: auto;

  margin: 0;

  overflow: hidden;

  ${({ color }) =>
    color &&
    css`
      color: ${color};
    `}

  ${({ margin }) =>
    margin &&
    css`
      margin: 39px 0;
    `}
`

export const ButtonGithub = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  gap: 8px;

  padding: 5px;
  width: 120px;
  height: 40px;

  background: ${colors.third};
  border-radius: 100px;

  font-family: ${fonts.primary};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: ${colors.fourth};

  cursor: pointer;

  transition: 0.8s ease-in-out all;

  &:hover {
    border-radius: 16px;
  }
`

export const ButtonHighlight = styled(Link)`
  font-family: ${fonts.primary};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;

  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  letter-spacing: 0.1px;

  border-radius: 100px;

  color: ${colors.third};

  flex: none;
  order: 1;
  flex-grow: 0;

  gap: 8px;

  cursor: pointer;

  height: 40px;

  transition: 0.2s ease-in-out background;
  transition: 0.8s ease-in-out border-radius;

  padding: 10px 16px 10px 12px;

  svg {
    animation: ${bounce} 3s infinite;
  }

  &:hover {
    border-radius: 16px;
    background: rgba(230, 225, 229, 0.08);
  }
`

export const ButtonsContainer = styled.div`
  display: flex;

  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
`

export const SlackInstallMain = styled.div`
  background: linear-gradient(
      0deg,
      rgba(103, 96, 0, 0.05),
      rgba(103, 96, 0, 0.05)
    ),
    ${colors.primary};

  height: fit-content;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 96px;

  padding: 96px 0;

  width: 100%;
`

export const EndInstallMain = styled(SlackInstallMain)``

export const StepNumberTitle = styled.p`
  font-family: ${fonts.secondary};
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 36px;
  color: ${colors.secondary};

  flex: none;

  margin: 0;
  max-width: 90%;

  span {
    font-family: ${fonts.third};
    font-style: normal;
    font-weight: 400;
    font-size: 64px;
    line-height: 83px;

    text-align: right;

    color: ${colors.eighth};

    flex: none;
    order: 0;
    flex-grow: 0;
  }
`

export const GithubInstallMain = styled.div`
  background: linear-gradient(
      0deg,
      rgba(103, 96, 0, 0.11),
      rgba(103, 96, 0, 0.11)
    ),
    ${colors.primary};

  height: fit-content;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 96px;

  padding: 96px 0;

  width: 100%;
`

export const CardStepDetail = styled.div<CardStepDetailProps>`
  display: flex;

  align-items: center;
  justify-content: space-between;

  width: 80%;
  gap: 10px;

  ${({ reverse }) =>
    reverse &&
    css`
      flex-direction: row-reverse;
    `}

  @media (max-width: 750px) {
    flex-direction: column-reverse;
    width: 90%;

    div:nth-child(1) {
      width: 540px;
      align-items: flex-start;
    }
  }

  @media (max-width: 640px) {
    div:nth-child(1) {
      width: 100%;
    }
  }
`

export const StepDetailTitle = styled.p`
  font-family: ${fonts.secondary};
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 28px;

  color: ${colors.secondary};

  flex: none;
`

export const StepDetailDescription = styled.p`
  font-family: ${fonts.primary};
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;

  letter-spacing: 0.4px;
  color: ${colors.sixth};

  flex: none;

  max-width: 540px;
  overflow: hidden;

  margin: 0;

  line-break: anywhere;

  .code {
    background: ${colors.seventh};
    border-radius: 4px;

    color: ${colors.ninth};

    padding: 2px 4px;

    font-size: 10px;
  }

  .bold {
    font-weight: 700;
  }

  a {
    color: ${colors.eighth};
  }
`

export const CodeBlock = styled.div`
  background: ${colors.seventh};
  border-radius: 4px;

  padding: 16px;
  margin-top: 6px;

  display: flex;
  flex-direction: column;
  gap: 8px;

  p {
    margin: 0;

    font-family: ${fonts.primary};
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;

    letter-spacing: 0.4px;

    color: ${colors.ninth};
  }
`

export const Footer = styled.div`
  background: linear-gradient(
      0deg,
      rgba(103, 96, 0, 0.05),
      rgba(103, 96, 0, 0.05)
    ),
    ${colors.primary};

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 30px 0;
  gap: 60px;

  width: 100%;

  @media (max-width: 408px) {
    flex-direction: column;
  }
`

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;

  height: 96px;

  @media (max-width: 408px) {
    height: fit-content;

    width: 90%;
    align-items: center;
  }

  @media (max-width: 380px) {
    align-items: flex-start;
  }
`

export const FooterTitle = styled.p`
  font-family: ${fonts.secondary};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  letter-spacing: 0.15px;

  color: ${colors.tenth};
  margin: 0;
`

export const FooterTextTitle = styled.p`
  font-family: ${fonts.primary};
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;

  letter-spacing: 0.4px;

  color: ${colors.tenth};

  margin: 8px 0;
`

export const FooterText = styled(Link)`
  font-family: ${fonts.primary};
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;

  letter-spacing: 0.4px;

  color: ${colors.eleventh};
  margin: 8px 0;
`

export const FooterLine = styled.hr`
  width: 80%;
  margin: 0;

  @media (max-width: 1358px) {
    width: 90%;
  }
`

export const ImageContainer = styled.div`
  max-width: 540px;
  width: 100%;
  height: 280px;
  position: relative;
`
