import axios from 'axios';

const baseUrl = 'https://swapi.dev/api/people'

const fetchPeople = async () => {
    try {
        const data = await axios.get(baseUrl);
        return data.results
    } catch(error) {
        console.error(error)
        return undefined
    }
}


const fetchPerson = async (id) => {
    try {
        const data = await axios.get(`${baseUrl}/${id}`);
        return data
    } catch (error) {
        console.error(error)
        return undefined
    }
}

const fetchPersonBySearch = async (searchTerm) => {
    try {
        const data = await axios.get(`${baseUrl}/?search=${searchTerm}`)
        return data.results
    } catch(error) {
        console.error(error)
        return undefined
    }
}

export {
    fetchPeople,
    fetchPerson,
    fetchPersonBySearch
}