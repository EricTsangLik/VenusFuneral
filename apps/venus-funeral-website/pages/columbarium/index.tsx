/* eslint-disable @next/next/no-img-element */
import { Container, Header, PageLayout, Text } from '@venus-funeral/ui';
import styled from 'styled-components';
import { FaWhatsapp } from 'react-icons/fa';

const ColumbariumPage = () => {
  const whatsappNumber = '+85293810003';
  const whatsappMessage = encodeURIComponent('想了解骨灰罈位買賣服務');
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[+\s]/g, '')}?text=${whatsappMessage}`;

  // Gallery images
  const galleryImages = [
    {
      src: '/columbarium1.jpeg',
      alt: '骨灰罈位展示 1'
    },
    {
      src: '/columbarium2.jpeg',
      alt: '骨灰罈位展示 2'
    },
    {
      src: '/columbarium3.jpeg',
      alt: '骨灰罈位展示 3'
    }
  ];

  return (
    <PageLayout title="骨灰罈位買賣">
      <Container>
        {/* Hero Section */}
        <HeroSection>
          <HeroContent>
            <Header>骨灰罈位買賣</Header>
            <Text fontSize="h5" component="p">
              私人骨灰龕位買賣代理服務
            </Text>
            
            <LocationInfo>
              <LocationGroup>
                <LocationTitle fontSize="body1">骨灰龕位：</LocationTitle>
                <Text fontSize="body1">沙田寶福山、屯門善緣 / 善果 / 善心</Text>
              </LocationGroup>
              <LocationGroup>
                <LocationTitle fontSize="body1">神主牌位：</LocationTitle>
                <Text fontSize="body1">沙田-西林寺、沙田-道榮園、紅磡-敬祖堂、澳門永念亭私人骨灰龕</Text>
              </LocationGroup>
            </LocationInfo>

            <DescriptionList>
              <DescriptionItem>
                <Bullet />
                <Text fontSize="body1">包括全新買，二手買</Text>
              </DescriptionItem>
              <DescriptionItem>
                <Bullet />
                <Text fontSize="body1">全新賣，二手賣</Text>
              </DescriptionItem>
            </DescriptionList>
          </HeroContent>
          <HeroImageWrapper>
            <HeroImage src="/columbarium4.jpeg" alt="私人骨灰龕位買賣" />
          </HeroImageWrapper>
        </HeroSection>

        {/* Services Details Section */}
        <ServicesSection>
          <SectionTitle component="h2" fontSize="h3">
            服務詳情
          </SectionTitle>
          <ServicesGrid>
            <ServiceCard>
              <ServiceCardHeader>
                <ServiceTitle component="h3" fontSize="h5">
                  買賣服務
                </ServiceTitle>
                <ServiceSubtitle component="p" fontSize="body2">
                  一站式代理
                </ServiceSubtitle>
              </ServiceCardHeader>
              <ServiceCardBody>
                <ServiceFeature>
                  <FeatureBullet />
                  <Text component="p" fontSize="body1">
                    <strong>全新位買賣</strong> - 代理各區私營骨灰龕場全新龕位，提供專業意見及實地考察
                  </Text>
                </ServiceFeature>
                <ServiceFeature>
                  <FeatureBullet />
                  <Text component="p" fontSize="body1">
                    <strong>二手位轉讓</strong> - 協助處理二手龕位買賣轉讓手續，確保交易安全暢順
                  </Text>
                </ServiceFeature>
                <ServiceFeature>
                  <FeatureBullet />
                  <Text component="p" fontSize="body1">
                    <strong>免費估價</strong> - 提供市場價格參考及免費估價服務
                  </Text>
                </ServiceFeature>
              </ServiceCardBody>
            </ServiceCard>

            <ServiceCard>
              <ServiceCardHeader>
                <ServiceTitle component="h3" fontSize="h5">
                  專業代辦
                </ServiceTitle>
                <ServiceSubtitle component="p" fontSize="body2">
                  手續繁複 我們代勞
                </ServiceSubtitle>
              </ServiceCardHeader>
              <ServiceCardBody>
                <ServiceFeature>
                  <FeatureBullet />
                  <Text component="p" fontSize="body1">
                    <strong>律師轉名</strong> - 安排律師處理轉名手續，保障買賣雙方權益
                  </Text>
                </ServiceFeature>
                <ServiceFeature>
                  <FeatureBullet />
                  <Text component="p" fontSize="body1">
                    <strong>龕場手續</strong> - 代辦各龕場之相關文件及手續
                  </Text>
                </ServiceFeature>
                <ServiceFeature>
                  <FeatureBullet />
                  <Text component="p" fontSize="body1">
                    <strong>上位安灰</strong> - 提供擇日上位及安灰服務，一條龍貼心安排
                  </Text>
                </ServiceFeature>
              </ServiceCardBody>
            </ServiceCard>
          </ServicesGrid>
        </ServicesSection>

        {/* Gallery Section */}
        <GallerySection>
          <SectionTitle component="h2" fontSize="h3">
            環境展示
          </SectionTitle>
          <GalleryGrid>
            {galleryImages.map((image, index) => (
              <GalleryItem key={index}>
                <GalleryImage src={image.src} alt={image.alt} />
              </GalleryItem>
            ))}
          </GalleryGrid>
        </GallerySection>

        {/* Contact Section */}
        <ContactSection>
          <ContactCard>
            <ContactTitle component="h3" fontSize="h3" color="white">
              立即查詢
            </ContactTitle>
            <ContactSubtitle component="p" fontSize="h6" color="white">
              歡迎透過 WhatsApp 聯絡我們，我們會盡快回覆並提供詳細資料
            </ContactSubtitle>
            <WhatsAppButton href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <FaWhatsapp style={{ fontSize: '24px', marginRight: '12px' }} />
              WhatsApp 查詢
            </WhatsAppButton>
            <ContactInfo>
              <ContactInfoText component="p" fontSize="body1" color="white">
                聯絡電話：+852 9831 0003
              </ContactInfoText>
            </ContactInfo>
          </ContactCard>
        </ContactSection>
      </Container>
    </PageLayout>
  );
};

// Styled Components

const SectionTitle = styled(Text)`
  margin-bottom: 48px;
`;

const ServiceTitle = styled(Text)`
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.default};
`;

const ServiceSubtitle = styled(Text)`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gold};
  font-style: italic;
`;

const ContactTitle = styled(Text)`
  margin-bottom: 24px;
`;

const ContactSubtitle = styled(Text)`
  margin-bottom: 32px;
`;

const ContactInfoText = styled(Text)`
  margin-top: 24px;
`;

// Section Components
const HeroSection = styled.section`
  margin-bottom: 80px;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  gap: 32px;

  ${({ theme }) => theme.breakPoints.tablet} {
    margin-bottom: 120px;
    padding: 60px 0;
    flex-direction: row;
    align-items: center;
    gap: 60px;
  }
`;

const HeroContent = styled.div`
  flex: 1;
  
  & p {
    color: ${({ theme }) => theme.colors.default};
    line-height: 1.6;
  }
  
  /* Space after main description */
  & > p:first-of-type {
    margin-top: 24px;
    margin-bottom: 32px;
  }
`;

const LocationInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;
  background: rgba(180, 134, 80, 0.1);
  padding: 24px;
  border-radius: 12px;
  border-left: 4px solid ${({ theme }) => theme.colors.gold};
`;

const LocationGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const LocationTitle = styled(Text)`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gold};
`;

const DescriptionList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const DescriptionItem = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Bullet = styled.div`
  width: 8px;
  height: 8px;
  background: ${({ theme }) => theme.colors.gold};
  border-radius: 50%;
`;

const HeroImageWrapper = styled.div`
  flex: 1;
  width: 100%;
  max-width: 100%;

  ${({ theme }) => theme.breakPoints.tablet} {
    max-width: 50%;
  }
`;

const HeroImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 12px;
  object-fit: cover;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
`;

const ServicesSection = styled.section`
  margin-bottom: 80px;

  ${({ theme }) => theme.breakPoints.tablet} {
    margin-bottom: 120px;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;

  ${({ theme }) => theme.breakPoints.tablet} {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }
`;

const ServiceCard = styled.div`
  background: white;
  border: 2px solid ${({ theme }) => theme.colors.lightgray};
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 32px rgba(180, 134, 80, 0.2);
    border-color: ${({ theme }) => theme.colors.gold};
  }

  & p {
    color: ${({ theme }) => theme.colors.default};
    line-height: 1.8;
  }

  & strong {
    color: ${({ theme }) => theme.colors.gold};
    font-weight: 600;
  }
`;

const ServiceCardHeader = styled.div`
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.lightkhaki} 0%, ${({ theme }) => theme.colors.lightgray} 100%);
  padding: 32px 28px 24px;
  text-align: center;
  border-bottom: 2px solid ${({ theme }) => theme.colors.gold};
`;

const ServiceCardBody = styled.div`
  padding: 32px 28px;
`;

const ServiceFeature = styled.div`
  display: flex;
  gap: 16px;
  align-items: flex-start;
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const FeatureBullet = styled.div`
  width: 8px;
  height: 8px;
  background: ${({ theme }) => theme.colors.gold};
  border-radius: 50%;
  margin-top: 8px;
  flex-shrink: 0;
`;

// Gallery Styles
const GallerySection = styled.section`
  margin-bottom: 80px;

  ${({ theme }) => theme.breakPoints.tablet} {
    margin-bottom: 120px;
  }
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  ${({ theme }) => theme.breakPoints.tablet} {
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
  }
`;

const GalleryItem = styled.div`
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  height: 250px;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(180, 134, 80, 0.2);
  }
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;

  ${GalleryItem}:hover & {
    transform: scale(1.05);
  }
`;

const ContactSection = styled.section`
  margin-bottom: 80px;

  ${({ theme }) => theme.breakPoints.tablet} {
    margin-bottom: 120px;
  }
`;

const ContactCard = styled.div`
  background: ${({ theme }) => theme.colors.lightgold};
  padding: 60px 40px;
  border-radius: 12px;
  text-align: center;

  ${({ theme }) => theme.breakPoints.tablet} {
    padding: 80px 60px;
  }
`;

const WhatsAppButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #25D366;
  color: white;
  padding: 16px 48px;
  border-radius: 50px;
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;

  &:hover {
    background: #22c55e;
    transform: scale(1.05);
    box-shadow: 0 8px 24px rgba(37, 211, 102, 0.3);
  }

  &:active {
    transform: scale(0.98);
  }
`;

const ContactInfo = styled.div`
  margin-top: 24px;
`;

export default ColumbariumPage;
