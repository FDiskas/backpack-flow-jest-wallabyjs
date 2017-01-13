// @flow

import {thingProvider} from './index';

it('should be able to get thing', async () => {
  let result = await thingProvider();

  expect(result).toEqual({one: 'two'});
});
