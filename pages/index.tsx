import Head from 'next/head'
import Image from 'next/image'
import * as S from '@styles/index.ts'
import GithubLogo from '@public/svg/github.svg'
import ArrowDown from '@public/svg/arrow-down.svg'

export default function Home() {
  return (
    <>
      <S.Main>
        <S.ContainerText>
          <S.Title>Get pull requests from GitHub right in your Slack</S.Title>
          <S.ButtonsContainer>
            <S.ButtonGithub>
              <GithubLogo />
              Get Started
            </S.ButtonGithub>
            <S.ButtonHighlight>
              <ArrowDown />
              Learn More
            </S.ButtonHighlight>
          </S.ButtonsContainer>
        </S.ContainerText>
      </S.Main>
      <S.SlackInstallMain>
        <S.Title color="#1D1C16">How to install</S.Title>
      </S.SlackInstallMain>
    </>
  )
}
