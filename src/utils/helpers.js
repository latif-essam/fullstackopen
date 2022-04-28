
export const getId = () => Math.floor(Math.random() * Date.now());

export const checkUniqueness = (list, note) => list.some(e => e.content === note);