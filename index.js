// Write your solution in this file!
const driver = {name: 'Sam'}

const updateDriverWithKeyAndValue = (driver, key, value) => {
    return Object.assign({}, driver, {[key]: value});
}

const address = updateDriverWithKeyAndValue(driver, 'address', '11 Broadway')

const destructivelyUpdateDriverWithKeyAndValue = (driver, key, value) => {
    driver[key] = value;
    return driver
}

const deleteFromDriverByKey = (driver, key) => {
    let newDriver = {...driver}

    newDriver[key] = undefined

    return newDriver
}

const destructivelyDeleteFromDriverByKey = (driver, key) => {
    driver[key] = undefined

    return driver
}