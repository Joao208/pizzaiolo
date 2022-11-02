import Link from 'next/link'
import Image from 'next/image'

import * as S from '@styles/index'

import GithubLogo from '@public/svg/github.svg'
import ArrowDown from '@public/svg/arrow-down.svg'

import { BrokenLine } from '@components/BrokenLine'
import { CodeLine } from '@components/CodeLine'
import { BoldText } from '@components/BoldText'

import { characters } from 'utils/characters'
import { colors } from 'utils/colors'

export default function Home() {
  return (
    <>
      <S.Container>
        <S.Main>
          <S.ContainerText>
            <S.Title margin>
              Get pull requests from GitHub right in your Slack
            </S.Title>

            <S.ButtonsContainer>
              <S.ButtonGithub href="https://github.com/diogocezar/pizzaiolo">
                <GithubLogo />
                Get Started
              </S.ButtonGithub>

              <S.ButtonHighlight scroll={false} href="#how-to-install">
                <ArrowDown />
                Learn More
              </S.ButtonHighlight>
            </S.ButtonsContainer>
          </S.ContainerText>
        </S.Main>
        <S.SlackInstallMain>
          <S.Title id="how-to-install" color={colors.secondary}>
            How to install
          </S.Title>

          <S.StepNumberTitle>
            <span>1</span> Configure your Slack
          </S.StepNumberTitle>

          <S.CardStepDetail>
            <div>
              <S.StepDetailTitle>Create the bot in Slack</S.StepDetailTitle>
              <S.StepDetailDescription>
                In{characters.space}
                <Link href="https://api.slack.com/apps">
                  Slack Apps Dashboard
                </Link>
                {characters.space}
                create a new app in Button
                {characters.doubleQuote}New App{characters.doubleQuote}
                <BrokenLine />
                Select {characters.doubleQuote}From an app manifest
                {characters.doubleQuote} option, and past the json
                {characters.space}
                <CodeLine>json app_manifest_example.json</CodeLine> of this root
                of this project. And change the{characters.space}
                <CodeLine>{"<Your bot's display name>"}</CodeLine> string, by
                your but name, and can do anything. <BrokenLine />
                Then, click in create.
              </S.StepDetailDescription>
            </div>
            <S.ImageContainer>
              <Image src="/svg/slack-step-one.svg" alt="Step 1 Slack" fill />
            </S.ImageContainer>
          </S.CardStepDetail>

          <S.CardStepDetail reverse>
            <div>
              <S.StepDetailTitle>Add the bot to workspace</S.StepDetailTitle>
              <S.StepDetailDescription>
                In <BoldText>Install your app</BoldText> click in the button
                with the label {characters.doubleQuote}Install to Workspace
                {characters.doubleQuote} and on the screen click in the button
                with the label {characters.doubleQuote}Install to Workspace
                {characters.doubleQuote} and on the screen
              </S.StepDetailDescription>
            </div>
            <S.ImageContainer>
              <Image src="/svg/slack-step-two.svg" alt="Step 2 Slack" fill />
            </S.ImageContainer>
          </S.CardStepDetail>

          <S.CardStepDetail>
            <div>
              <S.StepDetailTitle>Get the token</S.StepDetailTitle>
              <S.StepDetailDescription>
                Go to <BoldText>OAuth & Permissions</BoldText> screens and copy
                {characters.space}
                <BoldText>Bot User OAuth Token.</BoldText>
                <BrokenLine />
                Then this, you can past the token in{characters.space}
                <CodeLine>SLACK_TOKEN</CodeLine>environment variables file.
              </S.StepDetailDescription>
            </div>
            <S.ImageContainer>
              <Image src="/svg/slack-step-three.svg" alt="Step 3 Slack" fill />
            </S.ImageContainer>
          </S.CardStepDetail>

          <S.CardStepDetail reverse>
            <div>
              <S.StepDetailTitle>
                Add your bot in channel and copy the channel ID
              </S.StepDetailTitle>
              <S.StepDetailDescription>
                The last thing to do. Please, go to the channel you want to add
                the bot, and add her in {characters.doubleQuote}Integrations
                {characters.doubleQuote} path.
                <BrokenLine />
                For copy the channel bot, just copy the link of url, or in
                desktop, click in copy, then copy link, in your channel.
                {characters.space}
                <BrokenLine />
                The link is looks like:{characters.space}
                <CodeLine>
                  https://app.slack.com/client/SLACK_WORKSPACE_ID/CHANNEL_ID
                </CodeLine>
                {characters.space}
                <BrokenLine />
                Your channel is the last id, and copy her, and past in
                {characters.space}
                <CodeLine>SLACK_CHANNEL</CodeLine> environment variables file.
              </S.StepDetailDescription>
            </div>
            <S.ImageContainer>
              <Image src="/svg/slack-step-four.svg" alt="Step 4 Slack" fill />
            </S.ImageContainer>
          </S.CardStepDetail>
        </S.SlackInstallMain>

        <S.GithubInstallMain>
          <S.StepNumberTitle>
            <span>2</span> Configure your GitHub
          </S.StepNumberTitle>

          <S.CardStepDetail>
            <div>
              <S.StepDetailTitle>Create the webhooks</S.StepDetailTitle>
              <S.StepDetailDescription>
                In your github organization page, go to settings, for example:
                “https://github.com/organizations/{'<YOUR_ORGANIZATION>'}
                /settings/profile”
                <BrokenLine />
                Then, go to <BoldText>Code, planning, and automation</BoldText>
                {characters.space}
                session, and click in <BoldText>Webhooks</BoldText> application
                (for do this step, you need already upped your pizzaiolo
                machine). <BrokenLine />
                In Webhooks Page, click in <BoldText>Add Webhook</BoldText>
                {characters.space}
                button, in Payload URL, put the url of uploaded
                <BrokenLine />
                In Content type select <BoldText>application/json</BoldText> and
                in Secret put the same secret of you put in your
                {characters.space}
                <BoldText>GITHUB_WEBHOOK_SECRET</BoldText>
                environment variables file. <BrokenLine />
                Select <BoldText>Send me everything</BoldText> in
                {characters.space}
                <BoldText>
                  Which events would you like to trigger this webhook?
                </BoldText>
                {characters.space}
                session, and finally click in <BoldText>Add webhook.</BoldText>
                <BrokenLine />
                If the <BoldText>active</BoldText> is not selected by default,
                select it.
              </S.StepDetailDescription>
            </div>
            <S.ImageContainer>
              <Image src="/svg/github-step-one.svg" alt="Step 1 Github" fill />
            </S.ImageContainer>
          </S.CardStepDetail>
        </S.GithubInstallMain>
        <S.EndInstallMain>
          <S.StepNumberTitle>
            <span>3</span> End
          </S.StepNumberTitle>

          <S.CardStepDetail reverse>
            <div>
              <S.StepDetailTitle>Installation</S.StepDetailTitle>
              <S.StepDetailDescription>
                To install this bot, you need to follow these steps in the
                terminal:
              </S.StepDetailDescription>
              <S.CodeBlock>
                <p>git clone</p>
                <p>git@github.com:diogocezar/pizzaiolo.git</p>
                <p>cd pizzaiolo</p>
                <p>yarn build </p>
                <p>yarn start</p>
              </S.CodeBlock>
            </div>
            <S.ImageContainer>
              <Image src="/svg/end-step-one.svg" alt="Step 1 End" fill />
            </S.ImageContainer>
          </S.CardStepDetail>
        </S.EndInstallMain>

        <S.FooterLine />

        <S.Footer>
          <S.FooterContainer>
            <S.FooterTitle>Pizzaiolo</S.FooterTitle>
          </S.FooterContainer>

          <S.FooterContainer>
            <S.FooterTextTitle>Navigation</S.FooterTextTitle>
            <S.FooterText href="https://github.com/diogocezar/pizzaiolo">
              GitHub
            </S.FooterText>
            <S.FooterText href="#how-to-install">How install</S.FooterText>
          </S.FooterContainer>

          <S.FooterContainer>
            <S.FooterTextTitle>Community</S.FooterTextTitle>
            <S.FooterText href="https://github.com/sponsors/diogocezar">
              Contribute
            </S.FooterText>
            <S.FooterText href="https://github.com/diogocezar/pizzaiolo/issues">
              Doubts and suggestions
            </S.FooterText>
          </S.FooterContainer>
        </S.Footer>
      </S.Container>
    </>
  )
}
