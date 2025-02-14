const findTheOldest = function(people) {
    return people.reduce((lastPerson, person) => {
        let lastPersonAge = (checkDead(lastPerson) - lastPerson.yearOfBirth)
        let currentPersonAge = (checkDead(person) - person.yearOfBirth)
        return lastPersonAge < currentPersonAge ? person : lastPerson
    })
};

const checkDead = function(person) {
    currentYear = new Date().getFullYear()
    return person.yearOfDeath ? person.yearOfDeath : currentYear
}

// Do not edit below this line
module.exports = findTheOldest;
