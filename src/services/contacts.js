import axios from 'axios';
export const baseURL = 'http://localhost:3001/contacts';


const getAll = () => axios.get(baseURL).then(({ data }) => data);

const create = (newObj) => axios.post(baseURL, newObj).then(({ data }) => data);;

const remove = (id) => axios.delete(baseURL + '/' + id).then(({ data }) => data);
const update = (id, newObj) => axios.put(baseURL + '/' + id, newObj).then(({ data }) => data);

const contactsService = { getAll, create, remove, update };

export default contactsService;