import { render } from '@testing-library/react';

import MediaReportCarousel from './media-report-carousel';

describe('MediaReportCarousel', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MediaReportCarousel />);
    expect(baseElement).toBeTruthy();
  });
});
