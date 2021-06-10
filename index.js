// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, name) {
    let results = drivers.filter(element => element.toLowerCase() === name.toLowerCase())
    
    if (results) {
        return results
    }
    
}

function fuzzyMatch(drivers, string) {
    let match = drivers.filter(e => e.startsWith(string))
    if (match) {
        return match
    }
}

function matchName(drivers, name) {
    let nameArr = drivers.filter(e => e.name === name)
    return nameArr
}