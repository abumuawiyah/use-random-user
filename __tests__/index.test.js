import { useState } from 'react';
import 'jest-dom/extend-expect';

import * as useRandomUser from '../src/useRandomUser';

describe('useRandomUser', () => {
  test('import {useRandomUser} from "use-random-user"', () => {
    expect(typeof useRandomUser).toBe('function');
  });
  test('returns users & status with total 10 records', () => {
    expect(useRandomUser('total', 10)).toBe(useState);
  });
});
