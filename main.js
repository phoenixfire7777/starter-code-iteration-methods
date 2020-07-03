// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
console.log(users)

// Append the katas to this element:
const main = document.querySelector('main')

function printKata(kataNumber, object) {
    // For the usage of the DETAILS and SUMMARY tags
    // in HTML, see: http://mdn.io/details-element
    const detailsElement = document.createElement('details')
    main.append(detailsElement)
    //
    const summaryElement = document.createElement('summary')
    summaryElement.append("KATA " + kataNumber)
    detailsElement.append(summaryElement)
    //
    // http://mdn.io/json.stringify
    const stringifiedObject = JSON.stringify(object)
    detailsElement.append(stringifiedObject)
}
// kata0
// Filter the users array to show only the users with an eyeColor property of "green".
const greenEyes1 = users.filter(user => user.eyeColor === "green")
// OR...
const greenEyes2 = users.filter(function (user) {
    return user.eyeColor === "green"
})
printKata(0, greenEyes1)   // If you don't have this function already, see the "Set up" section above.
// Kata 1: Use the .filter() method
// Filter the users array to show only the users with an isActive property of true.
kata1 = users.filter(user => user.isActive)
console.log(kata1)
printKata(1, kata1)
// Kata 2: Use the .map() method
// Map over the users array to show only the email addresses of the users.
kata2 = users.map(user => user.email)
console.log(kata2)
printKata(2, kata2)
// Kata 3: Use the .some() method
// Check whether at least one user in the users array has a company property of "OVATION".
kata3 = users.some(user => user.company === "OVATION")
console.log(kata3)
printKata(3, kata3)

// Kata 4: Use the .find() method
// Find the first user in the array over the age of 38.
kata4 = users.find(user => user.age > 38)
console.log(kata4)
printKata(4, kata4)
// Kata 5: Use the .filter() and .find() methods
// Find the first user in the array over the age of 38 who is active.
kata5 = users
    .filter(user => user.age > 38)
    .find(user => user.isActive)
console.log(kata5)
printKata(5, kata5)

// Kata 6: Use the .filter() and .map() methods
// Show the balance of every user in the array from the "ZENCO" company.
kata6 = users
    .filter(user => user.company === "ZENCO")
    .map(user => user.balance)
console.log(kata6)
printKata(6, kata6)

// Kata 7: Use the .filter() method with .includes() and the .map() method
// Show the age of every user with the "fugiat" tag.
kata7 = users
    .filter(user => user.tags.includes("fugiat"))
    .map(user => user.age)
console.log(kata7)
printKata(7, kata7)