import {
  Container,
  Header,
  PageLayout,
  Text,
} from '@venus-funeral/ui'
import styled from 'styled-components'
import {
  MdOutlineEmail,
  MdOutlinePhoneAndroid,
  MdOutlineFacebook,
} from 'react-icons/md'
import { FaWhatsapp } from 'react-icons/fa'
import ContactForm from '../../components/ContactForm'
import { attributes } from '../../../../content/contactus.md'

const { phoneNumber, email, facebookLink, description, whatsapp } = attributes

const HeroSection = styled.div`
  position: relative;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/contact.jpg');
  background-size: cover;
  background-position: center;
  margin-bottom: 60px;

  ${({ theme }) => theme.breakPoints.desktop} {
    height: 400px;
    margin-bottom: 80px;
  }
`

const HeroTitle = styled(Header)`
  color: white;
  margin: 0;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
`

const HeroSubtitle = styled(Text)`
  color: white;
  margin-top: 16px;
  text-align: center;
  max-width: 600px;
`

const MainContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 48px;
  margin-bottom: 80px;

  ${({ theme }) => theme.breakPoints.desktop} {
    flex-direction: row;
    gap: 80px;
    margin-bottom: 120px;
  }
`

const InfoSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 32px;
`

const FormSection = styled.div`
  flex: 1;
  background: white;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  border-top: 4px solid ${({ theme }) => theme.colors.gold};
  align-self: flex-start;
  width: 100%;
`

const SectionTitle = styled(Text)`
  margin-bottom: 24px;
  color: ${({ theme }) => theme.colors.default};
`

const FormSectionTitle = styled(SectionTitle)`
  margin-bottom: 32px;
`

const IntroText = styled(Text)`
  margin-bottom: 32px;
  display: block;
  line-height: 1.6;
  color: #666;
`

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 24px;
  background: ${({ theme }) => theme.colors.lightkhaki};
  border-radius: 12px;
  transition: all 0.3s ease;
  border: 1px solid transparent;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(180, 134, 80, 0.15);
    border-color: ${({ theme }) => theme.colors.gold};
  }
`

const IconWrapper = styled.div`
  background: white;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  flex-shrink: 0;

  svg {
    font-size: 28px;
    color: ${({ theme }) => theme.colors.gold};
  }
`

const ItemContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  a {
    color: ${({ theme }) => theme.colors.gold};
    text-decoration: none;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.8;
      text-decoration: underline;
    }
  }
`

const ItemTitle = styled(Text)`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.default};
`

const ItemValue = styled(Text)`
  word-break: break-word;
`

export function Contact() {
  return (
    <PageLayout title="聯絡我們" description={description} disableCta>
      <HeroSection>
        <div style={{ textAlign: 'center', padding: '0 20px' }}>
          <HeroTitle whiteColor disableUnderline>聯絡我們</HeroTitle>
          <HeroSubtitle fontSize="h6">
            我們提供24小時專業諮詢服務，隨時為您解答疑問及提供協助
          </HeroSubtitle>
        </div>
      </HeroSection>

      <MainContainer>
        <InfoSection>
          <div>
            <SectionTitle component="h2" fontSize="h3">
              聯絡方式
            </SectionTitle>
            <IntroText fontSize="body1">
              無論您需要即時支援、諮詢服務詳情或獲取報價，我們經驗豐富的團隊都準備好隨時為您服務。
            </IntroText>
          </div>

          <ContactItem>
            <IconWrapper>
              <MdOutlinePhoneAndroid />
            </IconWrapper>
            <ItemContent>
              <ItemTitle fontSize="h6">24小時服務熱線</ItemTitle>
              <ItemValue fontSize="body1">
                <a href={`tel:${phoneNumber.replace(/\\s+/g, '')}`}>{phoneNumber}</a>
              </ItemValue>
            </ItemContent>
          </ContactItem>

          <ContactItem>
            <IconWrapper>
              <FaWhatsapp />
            </IconWrapper>
            <ItemContent>
              <ItemTitle fontSize="h6">WhatsApp 查詢</ItemTitle>
              <ItemValue fontSize="body1">
                <a href={`https://wa.me/852${whatsapp || '93810003'}`} target="_blank" rel="noopener noreferrer">
                  {whatsapp || '9381 0003'}
                </a>
              </ItemValue>
            </ItemContent>
          </ContactItem>

          <ContactItem>
            <IconWrapper>
              <MdOutlineEmail />
            </IconWrapper>
            <ItemContent>
              <ItemTitle fontSize="h6">電郵地址</ItemTitle>
              <ItemValue fontSize="body1">
                <a href={`mailto:${email}`}>{email}</a>
              </ItemValue>
            </ItemContent>
          </ContactItem>

          <ContactItem>
            <IconWrapper>
              <MdOutlineFacebook />
            </IconWrapper>
            <ItemContent>
              <ItemTitle fontSize="h6">Facebook 專頁</ItemTitle>
              <ItemValue fontSize="body1">
                <a href={facebookLink} target="_blank" rel="noopener noreferrer">
                  金星殯儀服務
                </a>
              </ItemValue>
            </ItemContent>
          </ContactItem>
        </InfoSection>

        <FormSection>
          <FormSectionTitle component="h2" fontSize="h3">
            網上查詢
          </FormSectionTitle>
          <ContactForm />
        </FormSection>
      </MainContainer>
    </PageLayout>
  )
}

export default Contact
