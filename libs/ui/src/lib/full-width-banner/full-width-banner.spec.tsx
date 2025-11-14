import { render } from '@testing-library/react';

import FullWidthBanner from './full-width-banner';

describe('FullWidthBanner', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FullWidthBanner />);
    expect(baseElement).toBeTruthy();
  });
});
