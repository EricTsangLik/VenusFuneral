/* eslint-disable @next/next/no-img-element */
import { Container, Header, PageLayout, Text, Button } from '@venus-funeral/ui';
import styled from 'styled-components';
import { FaWhatsapp } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useState } from 'react';

const CleaningPage = () => {
  const [showBeforeAfter, setShowBeforeAfter] = useState(false);
  
  const whatsappNumber = '+85293810003';
  const whatsappMessage = encodeURIComponent('想了解兇宅/遺宅清潔服務報價');
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[+\s]/g, '')}?text=${whatsappMessage}`;

  // Slideshow images - you can add more images here
  const heroImages = [
    {
      src: '/cleaning-hero.jpeg',
      alt: '兇宅/遺宅清潔服務'
    },
    // Add more images here as needed
    {
      src: '/cleaning-hero2.jpeg',
      alt: '專業清潔團隊'
    },
  ];

  return (
    <PageLayout title="兇宅/遺宅清潔">
      <Container>
        {/* Hero Section */}
        <HeroSection>
          <HeroContent>
            <Header>兇宅/遺宅清潔</Header>
            <Text fontSize="h5" component="p">
              專業的兇宅及遺宅清潔服務，以尊重和專業的態度，為您提供全面的清潔和消毒服務。
            </Text>
          </HeroContent>
          <HeroImageWrapper>
            <StyledSwiper
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={0}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              loop={heroImages.length > 1}
            >
              {heroImages.map((image, index) => (
                <SwiperSlide key={index}>
                  <HeroImage src={image.src} alt={image.alt} />
                </SwiperSlide>
              ))}
            </StyledSwiper>
          </HeroImageWrapper>
        </HeroSection>

        {/* Services Section */}
        <ServicesSection>
          <SectionTitle component="h2" fontSize="h3">
            我們的服務
          </SectionTitle>
          <ServicesGrid>
            <ServiceCard>
              <ServiceCardHeader>
                <ServiceTitle component="h3" fontSize="h5">
                  深層清潔
                </ServiceTitle>
                <ServiceSubtitle component="p" fontSize="body2">
                  全面清潔及消毒服務
                </ServiceSubtitle>
              </ServiceCardHeader>
              <ServiceCardBody>
                <ServiceFeature>
                  <FeatureBullet />
                  <Text component="p" fontSize="body1">
                    <strong>除味除臭</strong> - 使用專業除臭設備及藥劑，徹底去除異味，包括體液、血液等難以處理的氣味，還原清新的室內環境
                  </Text>
                </ServiceFeature>
                <ServiceFeature>
                  <FeatureBullet />
                  <Text component="p" fontSize="body1">
                    <strong>專業消毒</strong> - 採用醫療級消毒標準，使用專業消毒劑及紫外線消毒設備，全面消毒殺菌，保障您和家人的健康安全
                  </Text>
                </ServiceFeature>
                <ServiceFeature>
                  <FeatureBullet />
                  <Text component="p" fontSize="body1">
                    <strong>深層清潔</strong> - 清潔地板、牆壁、天花板、傢俬等所有表面，特別處理受污染區域，確保環境衛生
                  </Text>
                </ServiceFeature>
              </ServiceCardBody>
            </ServiceCard>

            <ServiceCard>
              <ServiceCardHeader>
                <ServiceTitle component="h3" fontSize="h5">
                  即時安排
                </ServiceTitle>
                <ServiceSubtitle component="p" fontSize="body2">
                  快速回應 專業處理
                </ServiceSubtitle>
              </ServiceCardHeader>
              <ServiceCardBody>
                <ServiceFeature>
                  <FeatureBullet />
                  <Text component="p" fontSize="body1">
                    <strong>即日上門視察</strong> - 收到查詢後即日內安排專業團隊上門視察環境，評估清潔範圍及所需服務
                  </Text>
                </ServiceFeature>
                <ServiceFeature>
                  <FeatureBullet />
                  <Text component="p" fontSize="body1">
                    <strong>72小時內完成</strong> - 確認服務後，我們承諾於72小時內完成所有清潔及消毒工作，讓您盡快處理後續事宜
                  </Text>
                </ServiceFeature>
                <ServiceFeature>
                  <FeatureBullet />
                  <Text component="p" fontSize="body1">
                    <strong>24小時查詢</strong> - 提供24小時WhatsApp查詢服務，隨時解答您的疑問
                  </Text>
                </ServiceFeature>
              </ServiceCardBody>
            </ServiceCard>

            <ServiceCard>
              <ServiceCardHeader>
                <ServiceTitle component="h3" fontSize="h5">
                  嚴謹程序
                </ServiceTitle>
                <ServiceSubtitle component="p" fontSize="body2">
                  專業團隊 尊重先人
                </ServiceSubtitle>
              </ServiceCardHeader>
              <ServiceCardBody>
                <ServiceFeature>
                  <FeatureBullet />
                  <Text component="p" fontSize="body1">
                    <strong>30年殯儀經驗</strong> - 由擁有30年以上殯儀經驗的專業團隊處理，深明殯儀禮儀及文化傳統
                  </Text>
                </ServiceFeature>
                <ServiceFeature>
                  <FeatureBullet />
                  <Text component="p" fontSize="body1">
                    <strong>殯儀手法處理</strong> - 確保所有程序跟從殯儀手法，以尊重和專業的態度處理每個細節，讓先人安心上路
                  </Text>
                </ServiceFeature>
                <ServiceFeature>
                  <FeatureBullet />
                  <Text component="p" fontSize="body1">
                    <strong>保密及私隱</strong> - 嚴格保護客戶私隱，所有資料絕對保密，讓您安心託付
                  </Text>
                </ServiceFeature>
              </ServiceCardBody>
            </ServiceCard>
          </ServicesGrid>
        </ServicesSection>

        {/* Service Workflow Section */}
        <WorkflowSection>
          <SectionTitle component="h2" fontSize="h3">
            服務流程
          </SectionTitle>
          <WorkflowGrid>
            <WorkflowCard>
              <WorkflowNumber>1</WorkflowNumber>
              <WorkflowTitle component="h3" fontSize="h5">
                獲取報價
              </WorkflowTitle>
              <Text component="p">
                聯絡我們提供單位詳情，專業團隊評估後提供初步報價，可預約上門視察以獲得更精確報價
              </Text>
            </WorkflowCard>

            <WorkflowCard>
              <WorkflowNumber>2</WorkflowNumber>
              <WorkflowTitle component="h3" fontSize="h5">
                確認付款
              </WorkflowTitle>
              <Text component="p">
                確認服務內容及報價後，支付費用並安排服務時間
              </Text>
            </WorkflowCard>

            <WorkflowCard>
              <WorkflowNumber>3</WorkflowNumber>
              <WorkflowTitle component="h3" fontSize="h5">
                30小時內開始清潔
              </WorkflowTitle>
              <Text component="p">
                專業清潔團隊將於30小時內到達現場，進行全面清潔及消毒服務
              </Text>
            </WorkflowCard>

            <WorkflowCard>
              <WorkflowNumber>4</WorkflowNumber>
              <WorkflowTitle component="h3" fontSize="h5">
                完工照片確認
              </WorkflowTitle>
              <Text component="p">
                清潔完成後拍攝照片，發送給客戶確認清潔成果，確保服務質量
              </Text>
            </WorkflowCard>
          </WorkflowGrid>
        </WorkflowSection>

        {/* Before & After Section */}
        <BeforeAfterSection>
          <SectionTitle component="h2" fontSize="h3">
            清潔成果展示
          </SectionTitle>
          
          {!showBeforeAfter ? (
            <DisclaimerBox>
              <DisclaimerIcon>⚠️</DisclaimerIcon>
              <DisclaimerTitle component="h3" fontSize="h5">
                內容警告 / Content Warning
              </DisclaimerTitle>
              <DisclaimerText component="p" fontSize="body1">
                以下圖片包含血跡及現場清潔前的真實情況，內容可能令人感到不適。
                <br />
                <br />
                The following images contain blood and actual scenes before cleaning, which may be disturbing to some viewers.
              </DisclaimerText>
              <DisclaimerCheckbox>
                <input 
                  type="checkbox" 
                  id="consent" 
                  onChange={(e) => setShowBeforeAfter(e.target.checked)}
                />
                <label htmlFor="consent">
                  我已閱讀並理解以上警告，同意查看相關圖片
                  <br />
                  I have read and understand the warning above and consent to view the images
                </label>
              </DisclaimerCheckbox>
            </DisclaimerBox>
          ) : (
            <BeforeAfterContainer>
              <ComparisonWrapper>
                <ImageBox>
                  <ImageLabel component="h4" fontSize="h6">
                    清潔前 Before
                  </ImageLabel>
                  <ComparisonImage 
                    src="/cleaning-before.jpeg" 
                    alt="清潔前" 
                  />
                </ImageBox>
                <ImageBox>
                  <ImageLabel component="h4" fontSize="h6">
                    清潔後 After
                  </ImageLabel>
                  <ComparisonImage 
                    src="/cleaning-after.jpeg" 
                    alt="清潔後" 
                  />
                </ImageBox>
              </ComparisonWrapper>
              <BeforeAfterNote component="p" fontSize="body2">
                * 以上為實際清潔案例，效果因應個別情況而有所不同
                <br />
                * Actual cleaning case results may vary depending on individual circumstances
              </BeforeAfterNote>
            </BeforeAfterContainer>
          )}
        </BeforeAfterSection>

        {/* Quotation Details Section */}
        <QuotationSection>
          <SectionTitle component="h2" fontSize="h3">
            報價詳情
          </SectionTitle>
          
          <PriceCard>
            <PriceHeader>
              <PriceHeaderContent>
                <PriceCardTitle component="h3" fontSize="h4" color="gold">
                  基本收費
                </PriceCardTitle>
                <PriceAmount>
                  <PriceText component="span" fontSize="h2" color="gold">
                    $4,888
                  </PriceText>
                  <PriceSubText component="span" fontSize="h5" color="gold">
                    HKD 起
                  </PriceSubText>
                </PriceAmount>
                <OnSiteNote component="p" fontSize="body2" color="default">
                  * 可預約上門視察以獲得更精確報價
                </OnSiteNote>
              </PriceHeaderContent>
            </PriceHeader>

            <PricingLayout>
              {/* Main Factors */}
              <PricingColumn>
                <ColumnHeader component="h4" fontSize="h6" color="gold">
                  影響報價因素
                </ColumnHeader>
                <PriceFactorsList>
                  <PriceFactor>
                    <FactorContent>
                      <FactorTitle component="h5" fontSize="h6">
                        單位面積
                      </FactorTitle>
                      <Text component="p" fontSize="body2">
                        清潔面積越大，所需時間和人手越多，費用相應增加。我們會根據實際平方呎計算所需清潔時間及人手安排。
                      </Text>
                    </FactorContent>
                  </PriceFactor>

                  <PriceFactor>
                    <FactorContent>
                      <FactorTitle component="h5" fontSize="h6">
                        污染程度
                      </FactorTitle>
                      <Text component="p" fontSize="body2">
                        污染越嚴重，需要更深層的清潔和多次消毒處理。嚴重個案可能需要特殊清潔劑及額外處理時間。
                      </Text>
                    </FactorContent>
                  </PriceFactor>

                  <PriceFactor>
                    <FactorContent>
                      <FactorTitle component="h5" fontSize="h6">
                        特殊處理程序
                      </FactorTitle>
                      <Text component="p" fontSize="body2">
                        如需使用特殊消毒設備、化學處理或專業除臭技術，將按實際使用的器材及藥劑收費。
                      </Text>
                    </FactorContent>
                  </PriceFactor>

                  <PriceFactor>
                    <FactorContent>
                      <FactorTitle component="h5" fontSize="h6">
                        死亡方式
                      </FactorTitle>
                      <Text component="p" fontSize="body2">
                        不同的死亡方式會影響清潔的複雜程度及所需的專業處理方法，我們會以專業及尊重的態度處理每個個案。
                      </Text>
                    </FactorContent>
                  </PriceFactor>

                  <PriceFactor>
                    <FactorContent>
                      <FactorTitle component="h5" fontSize="h6">
                        緊急程度
                      </FactorTitle>
                      <Text component="p" fontSize="body2">
                        如需即時或緊急服務，我們會優先安排團隊處理，但可能涉及額外的緊急服務費用。
                      </Text>
                    </FactorContent>
                  </PriceFactor>
                </PriceFactorsList>
              </PricingColumn>

              {/* Add-on Services */}
              <PricingColumn>
                <ColumnHeader component="h4" fontSize="h6" color="gold">
                  附加服務
                </ColumnHeader>
                <AddOnServicesList>
                  <AddOnService>
                    <AddOnContent>
                      <AddOnTitle component="h5" fontSize="h6">
                        傢俬清拆
                      </AddOnTitle>
                      <Text component="p" fontSize="body2">
                        提供專業傢俬拆卸服務，包括床架、衣櫃、梳化等大型傢俬的拆卸及搬運。
                      </Text>
                    </AddOnContent>
                  </AddOnService>

                  <AddOnService>
                    <AddOnContent>
                      <AddOnTitle component="h5" fontSize="h6">
                        遺物處理
                      </AddOnTitle>
                      <Text component="p" fontSize="body2">
                        協助整理及處理逝者遺物，以尊重和謹慎的態度處理每一件物品。
                      </Text>
                    </AddOnContent>
                  </AddOnService>

                  <AddOnService>
                    <AddOnContent>
                      <AddOnTitle component="h5" fontSize="h6">
                        單位還原
                      </AddOnTitle>
                      <Text component="p" fontSize="body2">
                        提供單位還原服務，包括油漆、修補及基本裝修，讓單位回復原貌。
                      </Text>
                    </AddOnContent>
                  </AddOnService>

                  <AddOnService>
                    <AddOnContent>
                      <AddOnTitle component="h5" fontSize="h6">
                        法事儀式
                      </AddOnTitle>
                      <Text component="p" fontSize="body2">
                        可安排專業法師進行淨宅儀式，為單位進行宗教儀式以安撫心靈。
                      </Text>
                    </AddOnContent>
                  </AddOnService>
                </AddOnServicesList>
              </PricingColumn>
            </PricingLayout>
          </PriceCard>
        </QuotationSection>

        {/* Contact Section */}
        <ContactSection>
          <ContactCard>
            <ContactTitle component="h3" fontSize="h3" color="white">
              立即查詢
            </ContactTitle>
            <ContactSubtitle component="p" fontSize="h6" color="white">
              歡迎透過 WhatsApp 聯絡我們，我們會盡快回覆並提供詳細報價
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

// Text Components
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

const WorkflowTitle = styled(Text)`
  margin-bottom: 12px;
`;

const PriceCardTitle = styled(Text)``;

const PriceText = styled(Text)``;

const PriceSubText = styled(Text)`
  margin-left: 8px;
`;

const PriceDetailsTitle = styled(Text)`
  margin-bottom: 24px;
`;

const FactorTitle = styled(Text)`
  margin-bottom: 8px;
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

const OnSiteNote = styled(Text)`
  margin-top: 16px;
  font-style: italic;
`;

const ColumnHeader = styled(Text)`
  margin-bottom: 24px;
  padding-bottom: 12px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.gold};
`;

const AddOnTitle = styled(Text)``;

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
    margin-top: 24px;
  }
`;

const HeroImageWrapper = styled.div`
  flex: 1;
  width: 100%;
  max-width: 100%;

  ${({ theme }) => theme.breakPoints.tablet} {
    max-width: 50%;
  }
`;

const StyledSwiper = styled(Swiper)`
  width: 65%;
  height: 100%;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);

  .swiper-button-next,
  .swiper-button-prev {
    color: ${({ theme }) => theme.colors.gold};
    background: rgba(255, 255, 255, 0.9);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    
    &::after {
      font-size: 20px;
      font-weight: bold;
    }
  }

  .swiper-button-next:hover,
  .swiper-button-prev:hover {
    background: white;
  }

  .swiper-pagination-bullet {
    background: ${({ theme }) => theme.colors.gold};
    opacity: 0.5;
    width: 12px;
    height: 12px;
  }

  .swiper-pagination-bullet-active {
    opacity: 1;
    background: ${({ theme }) => theme.colors.gold};
  }
`;

const HeroImage = styled.img`
  width: 100%;
  height: Auto;
  border-radius: 12px;
  object-fit: cover;
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
    grid-template-columns: repeat(3, 1fr);
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

const WorkflowSection = styled.section`
  margin-bottom: 80px;

  ${({ theme }) => theme.breakPoints.tablet} {
    margin-bottom: 120px;
  }
`;

const WorkflowGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  ${({ theme }) => theme.breakPoints.tablet} {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }

  ${({ theme }) => theme.breakPoints.desktop} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const WorkflowCard = styled.div`
  background: white;
  border: 2px solid ${({ theme }) => theme.colors.lightgray};
  padding: 32px 24px;
  border-radius: 12px;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    border-color: ${({ theme }) => theme.colors.gold};
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(180, 134, 80, 0.2);
  }

  & p {
    color: ${({ theme }) => theme.colors.default};
    line-height: 1.6;
  }
`;

const WorkflowNumber = styled.div`
  position: absolute;
  top: -16px;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 40px;
  background: ${({ theme }) => theme.colors.gold};
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  box-shadow: 0 4px 12px rgba(180, 134, 80, 0.3);
`;

const QuotationSection = styled.section`
  margin-bottom: 80px;

  ${({ theme }) => theme.breakPoints.tablet} {
    margin-bottom: 120px;
  }
`;

const PriceCard = styled.div`
  background: ${({ theme }) => theme.colors.lightkhaki};
  border: 3px solid ${({ theme }) => theme.colors.gold};
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 8px 32px rgba(180, 134, 80, 0.15);

  ${({ theme }) => theme.breakPoints.tablet} {
    padding: 60px;
  }
`;

const PriceHeader = styled.div`
  background: white;
  border-radius: 12px;
  padding: 32px;
  margin-bottom: 48px;
  text-align: center;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
`;

const PriceHeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const PriceAmount = styled.div`
  display: flex;
  align-items: baseline;
  gap: 8px;
`;

const PricingLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;

  ${({ theme }) => theme.breakPoints.tablet} {
    grid-template-columns: repeat(2, 1fr);
    gap: 48px;
  }
`;

const PricingColumn = styled.div`
  background: white;
  border-radius: 12px;
  padding: 32px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
`;

const PriceFactorsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const PriceFactor = styled.div`
  display: flex;
  gap: 16px;
  align-items: flex-start;
  padding: 16px;
  background: ${({ theme }) => theme.colors.lightgray};
  border-radius: 8px;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.lightkhaki};
    transform: translateX(4px);
  }
`;

const FactorContent = styled.div`
  flex: 1;

  & p {
    color: ${({ theme }) => theme.colors.default};
    line-height: 1.6;
  }
`;

const AddOnServicesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const AddOnService = styled.div`
  display: flex;
  gap: 16px;
  align-items: flex-start;
  padding: 16px;
  background: ${({ theme }) => theme.colors.lightgray};
  border-radius: 8px;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.lightkhaki};
    transform: translateX(4px);
  }
`;

const AddOnContent = styled.div`
  flex: 1;
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

// Before & After Section Styles
const BeforeAfterSection = styled.section`
  margin-bottom: 80px;

  ${({ theme }) => theme.breakPoints.tablet} {
    margin-bottom: 120px;
  }
`;

const DisclaimerBox = styled.div`
  background: #fff3cd;
  border: 3px solid #ffc107;
  border-radius: 16px;
  padding: 40px;
  text-align: center;
  box-shadow: 0 4px 16px rgba(255, 193, 7, 0.2);
  max-width: 800px;
  margin: 0 auto;

  ${({ theme }) => theme.breakPoints.tablet} {
    padding: 60px;
  }
`;

const DisclaimerIcon = styled.div`
  font-size: 64px;
  margin-bottom: 24px;
`;

const DisclaimerTitle = styled(Text)`
  margin-bottom: 24px;
  color: #856404;
  font-weight: 700;
`;

const DisclaimerText = styled(Text)`
  color: #856404;
  line-height: 1.8;
  margin-bottom: 32px;
`;

const DisclaimerCheckbox = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 12px;
  margin-top: 32px;

  input[type="checkbox"] {
    margin-top: 4px;
    width: 20px;
    height: 20px;
    cursor: pointer;
    flex-shrink: 0;
  }

  label {
    text-align: left;
    color: #856404;
    font-size: 16px;
    line-height: 1.6;
    cursor: pointer;
    user-select: none;
  }
`;

const BeforeAfterContainer = styled.div`
  background: white;
  border: 2px solid ${({ theme }) => theme.colors.lightgray};
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);

  ${({ theme }) => theme.breakPoints.tablet} {
    padding: 60px;
  }
`;

const ComparisonWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  margin-bottom: 32px;

  ${({ theme }) => theme.breakPoints.tablet} {
    grid-template-columns: repeat(2, 1fr);
    gap: 48px;
  }
`;

const ImageBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ImageLabel = styled(Text)`
  text-align: center;
  color: ${({ theme }) => theme.colors.gold};
  font-weight: 700;
  padding: 12px;
  background: ${({ theme }) => theme.colors.lightkhaki};
  border-radius: 8px;
`;

const ComparisonImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  object-fit: cover;
  aspect-ratio: 4/3;
`;

const BeforeAfterNote = styled(Text)`
  text-align: center;
  color: ${({ theme }) => theme.colors.default};
  font-style: italic;
  padding-top: 24px;
  border-top: 1px solid ${({ theme }) => theme.colors.lightgray};
`;

export default CleaningPage;

