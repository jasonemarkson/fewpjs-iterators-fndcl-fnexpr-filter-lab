// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, name) {
    let results = drivers.filter(element => element.toLowerCase() === name.toLowerCase())
    
    if (results) {
        return results
    }
    
}

function fuzzyMatch(drivers, string) {
    // let match = drivers.filter(element => element.includes(string) && string[0..(string.length - 1)] == element[0..(string.length - 1)])
    let match = drivers.filter(element => element.includes(string))

    if (match) {
        console.log(match)
        // return match
    }
}