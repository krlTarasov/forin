import orderByProps from '../orderByProps';

test('orderByProps', () => {
  expect(orderByProps({
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  }, ['name', 'level'])).toBe([
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ]);
  // expect(orderByProps()).toBe();
  // expect(orderByProps()).toBe();
});
