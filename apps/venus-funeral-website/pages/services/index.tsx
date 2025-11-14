import { Container, Header, PageLayout } from '@venus-funeral/ui';
import ServiceOverviews from '../../components/ServiceOverviews';
import SpecialServicesSection from '../../components/SpecialServicesSection';

const ServicesPage = () => {
  return (
    <PageLayout title="服務概覽">
      <Container>
        <Header>服務概覽</Header>
        <ServiceOverviews />
        <SpecialServicesSection />
      </Container>
    </PageLayout>
  );
};

export default ServicesPage;
