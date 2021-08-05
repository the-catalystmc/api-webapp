/**
 * @jest-environment jsdom
 */

import counter from './counter';

test('Should count the items in a given array', () => {
  // Arrange
  const myArr = [
    {
      username: 'Rhyine',
      comment: 'This is awesome',
      creation_date: '2021-08-05',
    },
    {
      username: 'Janet',
      comment: "I don't know where to start, soft, delicious and so enjoyable.",
      creation_date: '2021-08-05',
    },
    {
      comment: 'This was indeed a great dish',
      creation_date: '2021-08-05',
      username: 'Aston',
    },
    {
      comment: 'Aweome, delicious, there are not enough words to describe this meal',
      creation_date: '2021-08-05',
      username: 'June',
    },
  ];

  // Act
  const result = counter.commentCounter(myArr);

  // Assert
  expect(result).toBe(4);
});