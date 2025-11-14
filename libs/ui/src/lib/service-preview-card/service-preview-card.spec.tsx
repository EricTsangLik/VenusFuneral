import { render } from '@testing-library/react';

import ServicePreviewCard from './service-preview-card';

describe('ServicePreviewCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ServicePreviewCard />);
    expect(baseElement).toBeTruthy();
  });
});
