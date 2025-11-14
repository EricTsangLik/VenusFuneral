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
import { ReactComponent as AvatarIcon } from '../../public/avatar1.svg'
import ContactForm from '../../components/ContactForm'
import { attributes } from '../../../../content/contactus.md'

const { phoneNumber, email, facebookLink, description } = attributes
console.log('attributes', attributes)

const ContactContainer = styled(Container)`
  position: relative;
  
  ${({ theme }) => theme.breakPoints.desktop} {
    margin-bottom: 120px;
    height: 600px;
  }
`

const ContactBgImage = styled.img`
  height: 100%;
  width: 50%;
  background-size: cover;
  background-position: left;
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
  border-radius: 12px;
  display: none;

  ${({ theme }) => theme.breakPoints.desktop} {
    display: block;
  }
`

const ContactDetail = styled.div`
  height: 100%;
  z-index: 2;
`

const ContactDetailsCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  ${({ theme }) => theme.breakPoints.desktop} {
    flex-direction: row;
  }
`

const ContactDetailsCard = styled.div`
  box-shadow: 0 6px 20px rgb(0 0 0 / 20%);
  background-color: white;
  padding: 24px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 12px;

  ${({ theme }) => theme.breakPoints.desktop} {
    width: 40%;
    min-width: 300px;
    padding: 24px 48px;
  }
`

const StyledAvastar = styled(AvatarIcon)`
  margin-bottom: 28px;
  border-radius: 50%;
  align-self: center;
  svg {
    width: 100%;
    height: 36px;
  }
`

const ContactTextContainer = styled.div`
  padding: 4px;
  margin-bottom: 4px;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.gold};
  font-size: 36px;
  gap: 12px;

  & a {
    display: flex;
    align-items: center;
  }

  & span,
  a {
    word-break: break-all;
  }
`

export function Contact() {
  return (
    <PageLayout title="聯絡我們" description={description} disableCta>
      <ContactContainer>
        <ContactDetail>
          <Header>聯絡我們</Header>
          <ContactDetailsCardContainer>
            <ContactDetailsCard>
              {/* <StyledAvastar /> */}
              <ContactTextContainer>
                <MdOutlineEmail />
                <Text fontSize="subtitle" color="gold">
                  {email}
                </Text>
              </ContactTextContainer>
              <ContactTextContainer>
                <MdOutlinePhoneAndroid />
                <Text fontSize="subtitle" color="gold">
                  {phoneNumber}
                </Text>
              </ContactTextContainer>
              <ContactTextContainer>
                <MdOutlineFacebook />
                <a href={facebookLink}>
                  <Text fontSize="subtitle" color="gold" component="span">
                    金星殯儀服務
                  </Text>
                </a>
              </ContactTextContainer>
            </ContactDetailsCard>
            <ContactDetailsCard>
              <ContactForm />
            </ContactDetailsCard>
          </ContactDetailsCardContainer>
        </ContactDetail>
        <ContactBgImage src="/contact.jpg" />
      </ContactContainer>
    </PageLayout>
  )
}

export default Contact
