import { Text, transformCloundinaryImage } from '@venus-funeral/ui'
import styled from 'styled-components'
import React from 'react'
import { attributes } from '../../../content/specialServices.md'

const { services } = attributes

const isVideoUrl = (url: string) =>
  /\.mp4($|\?)/i.test(url) || url.includes('/video/upload/')

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
`;

const ServiceWrapper = styled.div`
  margin-bottom: 32px;

  & h3 {
    margin-bottom: 8px;
  }
`

const Image = styled.img`
  border-radius: 12px;
  margin: 24px 0 40px;
  width: 100%;
`

const Video = styled.video`
  border-radius: 12px;
  margin: 24px auto 40px;
  width: 100%;
  max-width: 560px;
  display: block;
  background: #000;
`

const SpecialServicesSection: React.FC = () => {
  return (
    <>
      <Text component="h2" fontSize="h3">
        特式服務
      </Text>
      <Wrapper>
        {
          services && services.map(({ serviceName, serviceDescription, thumbnail }, idx) => (
            <ServiceWrapper key={idx}>
              <Text component="h3" fontSize="h5">
                {serviceName}
              </Text>
              {
                serviceDescription && (
                  <Text component="p">
                    {serviceDescription}
                  </Text>
                )
              }
              {isVideoUrl(thumbnail) ? (
                <Video
                  src={thumbnail}
                  controls
                  playsInline
                  preload="metadata"
                  aria-label={`${serviceName}服務影片`}
                />
              ) : (
                <Image
                  src={transformCloundinaryImage(thumbnail, 1200)}
                  alt={`${serviceName}服務圖片`}
                />
              )}
            </ServiceWrapper>
          ))
        }
      </Wrapper>
    </>
  )
}

export default SpecialServicesSection
