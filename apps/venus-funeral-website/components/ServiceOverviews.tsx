import { ServicePreviewCard } from '@venus-funeral/ui'
import React from 'react'
import styled from 'styled-components'
import { attributes } from '../../../content/serviceOverviews.md'

const { services } = attributes

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  margin-bottom: 140px;

  ${({ theme }) => theme.breakPoints.tablet} {
    grid-template-columns: repeat(3, 1fr);

    & > *:first-child {
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 1;
      grid-row-end: 1;
    }
  }

  ${({ theme }) => theme.breakPoints.desktop} {
    grid-template-columns: repeat(4, 1fr);

    & > *:first-child {
      grid-column-start: 1;
      grid-column-end: 3;
      grid-row-start: 1;
      grid-row-end: 1;
      
      div {
        height: 300px;
      }
    }

    & > *:nth-child(2) {
      grid-column-start: 3;
      grid-column-end: 5;
      grid-row-start: 1;
      grid-row-end: 1;

      div {
        height: 300px;
      }
    }
  }
`

const ServiceOverviews: React.FC = () => (
  <CardWrapper>
    {services &&
      services.map((service, idx) => (
        <ServicePreviewCard key={idx} {...service} />
      ))}
  </CardWrapper>
)

export default ServiceOverviews
