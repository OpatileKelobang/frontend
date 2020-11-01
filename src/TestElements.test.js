import React from 'react';
import { render, cleanup } from '@testing-library/react';
import TestElements from "./components/Tests/TestElements";

afterEach(cleanup);

it('should equal to 0', () => {
    const { getByTestId } = render(<TestElements />);
    expect(getByTestId('counter')).toHaveTextContent(0)
});