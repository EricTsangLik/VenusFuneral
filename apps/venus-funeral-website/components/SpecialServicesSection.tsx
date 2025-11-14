import { Container, Text, transformCloundinaryImage } from '@venus-funeral/ui'
import styled from 'styled-components'
import React from 'react'
import { attributes } from '../../../content/specialServices.md'

const { services } = attributes

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
`;

const ServiceWrapper = styled.div`
  margin-bottom: 32px;

  & h6 {
    margin-bottom: 8px;
  }
`

const Image = styled.img`
  border-radius: 12px;
  margin: 24px 0 40px;
  width: 100%;
`

const SpecialServicesSection: React.FC = () => {
  return (
    <>
      <Text component="h5" fontSize="h3">
        特式服務
      </Text>
      <Wrapper>
        {
          services && services.map(({ serviceName, serviceDescription, thumbnail }, idx) => (
            <ServiceWrapper key={idx}>
              <Text component="h6" fontSize="h5">
                {serviceName}
              </Text>
              {
                serviceDescription && (
                  <Text component="p">
                    {serviceDescription}
                  </Text>
                )
              }
              <Image src={transformCloundinaryImage(thumbnail, 1200)} alt="" />
            </ServiceWrapper>
          ))
        }
      </Wrapper>
    </>
  )
}

export default SpecialServicesSection