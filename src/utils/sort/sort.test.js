import sortArray from './sort';
import testData from '../../../db.json';
import sortedTestData from './sortedTestData';

describe('tests the array sorter', () => {
  it('tests the array sorter on the unsorted cars array by a key in the array', () => {
    const arrayKey = 'make';
    expect(sortArray(arrayKey, testData.cars)).toEqual(sortedTestData);
  });
});
