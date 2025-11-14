import { render } from '@testing-library/react';

import TextBanner from './text-banner';

describe('TextBanner', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TextBanner />);
    expect(baseElement).toBeTruthy();
  });
});
