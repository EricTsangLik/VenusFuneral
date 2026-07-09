import { Container, Header, PageLayout } from '@venus-funeral/ui';
import ServiceOverviews from '../../components/ServiceOverviews';
import SpecialServicesSection from '../../components/SpecialServicesSection';

const ServicesPage = () => {
  return (
    <PageLayout
      title="服務概覽"
      seoTitle="香港殯儀服務概覽 | 宗教喪禮、火化、土葬安排"
      description="了解金星殯儀的主要服務範圍，包括各宗教喪禮、醫院出殯、土葬、綠色殯儀、骨灰善後及其他殯葬安排，協助家屬按需要選擇合適、收費透明清晰的服務方案。"
    >
      <Container>
        <Header>服務概覽</Header>
        <ServiceOverviews />
        <SpecialServicesSection />
      </Container>
    </PageLayout>
  );
};

export default ServicesPage;
