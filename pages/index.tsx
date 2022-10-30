import * as S from '@styles/index'

import GithubLogo from '@public/svg/github.svg'
import ArrowDown from '@public/svg/arrow-down.svg'
import SlackStepOne from '@public/svg/slack-step-one.svg'
import SlackStepTwo from '@public/svg/slack-step-two.svg'
import SlackStepThree from '@public/svg/slack-step-three.svg'
import SlackStepFour from '@public/svg/slack-step-four.svg'
import GithubStepOne from '@public/svg/github-step-one.svg'
import EndStepOne from '@public/svg/end-step-one.svg'

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

          <S.StepNumberTitle>
            <span>1</span> Configure your Slack
          </S.StepNumberTitle>

          <S.CardStepDetail>
            <div>
              <S.StepDetailTitle>Create the bot in Slack</S.StepDetailTitle>
              <S.StepDetailDescription>
                In <a>Slack Apps Dashboard</a> create a new app in Button
                &quot;New App&quot; <br />
                <br />
                Select &quot;From an app manifest&quot; option, and past the
                json{' '}
                <span className="code">json app_manifest_example.json</span> of
                this root of this project. And change the{' '}
                <span className="code">{"<Your bot's display name>"}</span>{' '}
                string, by your but name, and can do anything. <br />
                <br />
                Then, click in create.
              </S.StepDetailDescription>
            </div>
            <SlackStepOne />
          </S.CardStepDetail>

          <S.CardStepDetail reverse>
            <div>
              <S.StepDetailTitle>Add the bot to workspace</S.StepDetailTitle>
              <S.StepDetailDescription>
                In <span className="bold">Install your app</span> click in the
                button with the label &quot;Install to Workspace&quot; and on
                the screen click in the button with the label &quot;Install to
                Workspace&quot; and on the screen
              </S.StepDetailDescription>
            </div>
            <SlackStepTwo />
          </S.CardStepDetail>

          <S.CardStepDetail>
            <div>
              <S.StepDetailTitle>Get the token</S.StepDetailTitle>
              <S.StepDetailDescription>
                Go to <span className="bold">OAuth & Permissions</span> screens
                and copy <span className="bold">Bot User OAuth Token.</span>
                <br /> <br />
                Then this, you can past the token in{' '}
                <span className="code">SLACK_TOKEN</span>environment variables
                file.
              </S.StepDetailDescription>
            </div>
            <SlackStepThree />
          </S.CardStepDetail>

          <S.CardStepDetail reverse>
            <div>
              <S.StepDetailTitle>
                Add your bot in channel and copy the channel ID
              </S.StepDetailTitle>
              <S.StepDetailDescription>
                The last thing to do. Please, go to the channel you want to add
                the bot, and add her in &quot;Integrations&quot; path. <br />
                <br /> For copy the channel bot, just copy the link of url, or
                in desktop, click in copy, then copy link, in your channel.{' '}
                <br />
                <br /> The link is looks like:{' '}
                <span className="code">
                  https://app.slack.com/client/SLACK_WORKSPACE_ID/CHANNEL_ID
                </span>{' '}
                <br />
                <br />
                Your channel is the last id, and copy her, and past in{' '}
                <span className="code">SLACK_CHANNEL</span> environment
                variables file.
              </S.StepDetailDescription>
            </div>
            <SlackStepFour />
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
                <br />
                <br />
                Then, go to{' '}
                <span className="bold">
                  Code, planning, and automation
                </span>{' '}
                session, and click in <span className="bold">Webhooks</span>{' '}
                application (for do this step, you need already upped your
                pizzaiolo machine). <br />
                <br />
                In Webhooks Page, click in{' '}
                <span className="bold">Add Webhook</span> button, in Payload
                URL, put the url of uploaded
                <br />
                <br />
                In Content type select{' '}
                <span className="bold">application/json</span> and in Secret put
                the same secret of you put in your{' '}
                <span className="bold">GITHUB_WEBHOOK_SECRET</span>
                environment variables file. <br />
                <br />
                Select <span className="bold">Send me everything</span> in{' '}
                <span className="bold">
                  Which events would you like to trigger this webhook?
                </span>{' '}
                session, and finally click in{' '}
                <span className="bold">Add webhook.</span>
                <br />
                <br />
                If the <span className="bold">active</span> is not selected by
                default, select it.
              </S.StepDetailDescription>
            </div>
            <GithubStepOne />
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
            <EndStepOne />
          </S.CardStepDetail>
        </S.EndInstallMain>

        <S.FooterLine />

        <S.Footer>
          <S.FooterContainer>
            <S.FooterTitle>Pizzaiolo</S.FooterTitle>
          </S.FooterContainer>

          <S.FooterContainer>
            <S.FooterText>Navigation</S.FooterText>
            <S.FooterText>GitHub</S.FooterText>
            <S.FooterText>How install</S.FooterText>
          </S.FooterContainer>

          <S.FooterContainer>
            <S.FooterText>Community</S.FooterText>
            <S.FooterText>Contribute</S.FooterText>
            <S.FooterText>Doubts and suggestions</S.FooterText>
          </S.FooterContainer>
        </S.Footer>
      </S.Container>
    </>
  )
}
