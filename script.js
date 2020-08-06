const googleDataBase = [
    'cats.com',
    'souprecipes.com',
    'flowers.com',
    'animals.com',
    'catpictures.com',
    'myfavoritecats.com'
];

const googleSearch = searchInputs => {
    const matches = googleDataBase.filter(website => {
        return website.includes(searchInputs)
    })

    return matches.length > 3 ? matches.slice(0, 3) : matches
}