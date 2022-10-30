import styled, { css } from 'styled-components'
import { CardStepDetailProps, TitleProps } from '../interfaces'

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
    #fffbff;
`

export const Main = styled.div`
  background: #1d1c16;

  height: 90vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
`

export const ContainerText = styled.div``

export const Title = styled.p<TitleProps>`
  font-family: 'Rufina';
  font-style: normal;
  font-weight: 400;
  font-size: 45px;
  line-height: 52px;

  text-align: center;

  color: #ffffff;

  flex: none;
  order: 0;
  flex-grow: 0;

  width: 744px;
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

export const ButtonGithub = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  gap: 8px;

  padding: 5px;
  width: 120px;
  height: 40px;

  background: #d4ca51;
  border-radius: 100px;

  font-family: 'Oxygen';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #353100;

  cursor: pointer;
`

export const ButtonHighlight = styled.div`
  font-family: 'Oxygen';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;

  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  letter-spacing: 0.1px;

  color: #d4ca51;

  flex: none;
  order: 1;
  flex-grow: 0;

  gap: 8px;

  cursor: pointer;

  height: 40px;
`

export const ButtonsContainer = styled.div`
  display: flex;

  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
`

export const SlackInstallMain = styled.div`
  background: #d9d9d9;

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
  font-family: 'Rufina';
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 36px;
  color: #1d1c16;

  flex: none;

  margin: 0;

  span {
    font-family: 'Gideon Roman';
    font-style: normal;
    font-weight: 400;
    font-size: 64px;
    line-height: 83px;

    text-align: right;

    color: #676000;

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
    #fffbff;

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

  ${({ reverse }) =>
    reverse &&
    css`
      flex-direction: row-reverse;
    `}
`

export const StepDetailTitle = styled.p`
  font-family: 'Rufina';
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 28px;

  color: #1d1c16;

  flex: none;
`

export const StepDetailDescription = styled.p`
  font-family: 'Oxygen';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;

  letter-spacing: 0.4px;

  color: #484740;

  flex: none;

  max-width: 540px;
  overflow: hidden;

  .code {
    background: #e9e4be;
    border-radius: 4px;

    color: #1e1c05;

    padding: 2px 4px;
  }

  .bold {
    font-family: 'Oxygen';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;

    letter-spacing: 0.4px;

    color: #484740;
  }

  a {
  }
`

export const CodeBlock = styled.div`
  background: #e9e4be;
  border-radius: 4px;

  padding: 16px;
  margin-top: 6px;

  display: flex;
  flex-direction: column;
  gap: 8px;

  p {
    margin: 0;

    font-family: 'Oxygen';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;

    letter-spacing: 0.4px;

    color: #1e1c05;
  }
`

export const Footer = styled.div`
  background: linear-gradient(
      0deg,
      rgba(103, 96, 0, 0.05),
      rgba(103, 96, 0, 0.05)
    ),
    #fffbff;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 30px 0;
  gap: 60px;

  width: 100%;
`

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const FooterTitle = styled.p`
  font-family: 'Rufina';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  letter-spacing: 0.15px;

  color: #32302b;
`

export const FooterText = styled.p`
  font-family: 'Oxygen';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;

  letter-spacing: 0.4px;

  color: #605e57;
  margin: 8px 0;
`

export const FooterLine = styled.hr`
  width: 80%;
  margin: 0;
`
