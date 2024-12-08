function findMatching (drivers, search){
 return drivers.filter(driver => driver.toLowerCase() === search.toLowerCase() )
}

function fuzzyMatch (drivers, search) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(search.toLowerCase()))
}

function matchName (drivers, search) {
    return drivers.filter(driver => driver.name.toLowerCase()=== search.toLowerCase())
}