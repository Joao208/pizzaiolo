import styled, { css } from 'styled-components'

export const Main = styled.div`
  background: #1d1c16;

  height: 90vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ContainerText = styled.div``

export const Title = styled.p`
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

  margin: 32px 0;

  overflow: hidden;

  ${({ color }) =>
    color &&
    css`
      color: ${color};
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
`
