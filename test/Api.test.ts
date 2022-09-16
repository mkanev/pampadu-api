import {Api} from '../src';

test('init', () => {
  expect(new Api().baseUrl).toBeDefined()
})


