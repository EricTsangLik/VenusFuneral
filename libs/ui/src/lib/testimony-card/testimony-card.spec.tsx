import { render } from '@testing-library/react';

import TestimonyCard from './testimony-card';

describe('TestimonyCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TestimonyCard />);
    expect(baseElement).toBeTruthy();
  });
});
