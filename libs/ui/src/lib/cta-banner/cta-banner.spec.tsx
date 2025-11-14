import { render } from '@testing-library/react';

import CtaBanner from './cta-banner';

describe('CtaBanner', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CtaBanner />);
    expect(baseElement).toBeTruthy();
  });
});
