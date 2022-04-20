
export const getId = () => Math.floor(Math.random() * Date.now());

export const checkUniqueness = (persons, name) => {
    let unique = false;
    persons.forEach(conatc => {
        unique = conatc.name === name ? true : false;
    });
    return unique;
}