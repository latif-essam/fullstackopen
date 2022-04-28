import axios from "axios";

import { baseUrl } from '../constants';

const getAll = () => axios.get(baseUrl);
const create = (newObj) => axios.post(baseUrl, newObj);
const update = (id, newObj) => axios.put(`${baseUrl}/${id}`, newObj);

const noteServices = {
    getAll,
    create,
    update,
};

export default noteServices;