import { PageLayout, Header, Container, Text } from "@venus-funeral/ui";
import { NextPage } from "next";
import styled from "styled-components";
import { attributes, react as Content } from '../../../../content/processes.md'

// console.log(attributes)
const { processes } = attributes

const StepsWrapper = styled.ul`
  list-style: none;
  position: relative;
  padding: 0;
`

const StepWrapper = styled.li<{ step: number }>`
  align-items: center;
  display: flex;
  min-height: 42px;
  padding-left: 54px;
  position: relative;
  transition: 200ms ease;

  &:hover:before {
    background-color: ${({ theme }) => theme.colors.gold};
    color: white;
    transition: 200ms ease;
  }

  &:not(:last-child) {
    margin-bottom: 32px;
  }

  &:before {
    align-items: center;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.colors.gold};
    content: ${({ step }) => `"${step}"`};
    display: flex;
    justify-content: center;
    height: 42px;
    top: 0;
    left: 0;
    position: absolute;
    width: 42px;
    color: ${({theme}) => theme.colors.default};
  }

  &:not(:last-child):after {
    content: "";
    width: 1px;
    height: calc(100% - 10px);
    background-color: ${({theme}) => theme.colors.gold};
    top: 42px;
    left: 21px;
    position: absolute;
  }
`

const ProcessesPage: NextPage = () => {
  return (
    <PageLayout
      title="服務流程"
      seoTitle="香港殯儀服務流程 | 文件代辦及喪禮安排步驟"
      description="了解金星殯儀完整服務流程，由初步聯絡諮詢、領取及代辦文件、喪禮儀式安排以至出殯及骨灰善後，專人逐步協助家屬妥善處理，減少繁瑣手續與不安情緒。"
    >
      <Container>
        <Header>服務流程</Header>
        <StepsWrapper>
          {
            processes && processes.map(({ step }, idx) => (
              <StepWrapper key={idx} step={idx + 1}>
                <Text fontSize="h6">
                  {step}
                </Text>
              </StepWrapper>
            ))
          }
        </StepsWrapper>
      </Container>
    </PageLayout>
  )
}

export default ProcessesPage