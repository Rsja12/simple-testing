const googleSearch = require('./script')

dbMock = [
    'dog.com', 
    'cheese.com', 
    'test.com', 
    'dogsTwo.com', 
    'dogPics.com',
    'dogsThree.com'
];

it('returns an empty array when no matches are found', () => {
    expect(googleSearch('cat', dbMock))
    .toEqual([]);
});

it('returns empty array with null || undefined inputs', () => {
    expect(googleSearch(undefined, dbMock))
    .toEqual([]);
    expect(googleSearch(null, dbMock))
    .toEqual([]);
});

it('returns only the first three matches', () => {
    expect(googleSearch('dog', dbMock).length)
    .toBeLessThanOrEqual(3);
});