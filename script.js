const googleDataBase = [
    'cats.com',
    'souprecipes.com',
    'flowers.com',
    'animals.com',
    'catpictures.com',
    'myfavoritecats.com',
    'catsTwo.com'
];

const googleSearch = (searchInputs, db) => {
    const matches = db.filter(website => {
        return website.includes(searchInputs)
    })

    return matches.length > 3 ? matches.slice(0, 3) : matches
}

module.exports = googleSearch;