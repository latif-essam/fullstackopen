
export const getId = () => Math.floor(Math.random() * Date.now());

export const uniqueness = (list, arg, value) => list.some(c => c[arg] === value);

export const uniqueNameAndNumber = (list, contact) => uniqueness(list, 'name', contact.name) && uniqueness(list, 'phone', contact.phone);
export const uniqueNameDiffNumber = (list, contact) => uniqueness(list, 'name', contact.name) && !uniqueness(list, 'phone', contact.phone);

export const getContatcById = (list, id) => list.filter(contact => contact.id === id)[0];
export const getContatcByName = (list, name) => list.filter(contact => contact.name === name)[0];
export const getContatcByNumber = (list, phone) => list.filter(contact => contact.phone === phone)[0];



// export const updateNumber = (list, contact) => {
//     if (uniqueness(list, contact.name) &&  ) {
//         list.some(c => c.name === name);
//     }
// }