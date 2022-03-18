import axios from 'axios'
import {fetchPeople, fetchPerson, fetchPersonBySearch} from './people';

jest.mock('axios')
const baseUrl = 'https://swapi.dev/api/people';
const consoleSpy = jest.spyOn(console, 'error').mockImplementation()

const mockPeople = [
    {
        id: 1,
        name: 'Luke'
    },
    {
        id: 2,
        name: 'Han'
    }
];
const mockPerson = {
    id: 1, 
    name: 'Luke'
}
const searchTerm = 'Neil'

describe('people service', () => {
    beforeEach(() => {
        jest.clearAllMocks()
        consoleSpy.mockClear()
    })

    describe('fetchPeople', () => {
        it('should return an array of people', async () => {
            axios.get.mockResolvedValueOnce({ results: mockPeople});
    
            const result = await fetchPeople();
    
            expect(axios.get).toHaveBeenNthCalledWith(1, baseUrl);
            expect(result).toEqual(mockPeople);
            expect(console.error).not.toHaveBeenCalled();
        });
        it('should log an error and return undefined if it fails', async () => {
            const message = 'Network error'
            axios.get.mockRejectedValueOnce(new Error(message))
            
            const result = await fetchPeople();
    
            expect(axios.get).toHaveBeenNthCalledWith(1, baseUrl);
            expect(result).toBeUndefined();
            expect(console.error).toHaveBeenCalledTimes(1);
        })
    })

    describe('fetchPerson', () => {
        it('should fetch a person', async () => {
            axios.get.mockResolvedValueOnce(mockPerson);
    
            const result = await fetchPerson(1);
    
            expect(axios.get).toHaveBeenNthCalledWith(1, `${baseUrl}/1`);
            expect(result).toEqual(mockPerson)
            expect(console.error).not.toHaveBeenCalled();
        })
        it('should return undefined and log an error when it fails', async () => {
            const message = 'Network error'
            axios.get.mockRejectedValueOnce(new Error(message))

            const result = await fetchPerson(1)
            
            expect(axios.get).toHaveBeenNthCalledWith(1, `${baseUrl}/1`);
            expect(result).toBeUndefined();
            expect(console.error).toHaveBeenCalledTimes(1)
        })
    })

    describe('fetchPersonBySearch', () => {
        it('should return undefined and log an error when it fails', async () => {
            const message = 'Network error'
            axios.get.mockRejectedValueOnce(mockPeople)

            const result = await fetchPersonBySearch(searchTerm)

            expect(axios.get).toHaveBeenNthCalledWith(1, `${baseUrl}/?search=${searchTerm}`)
            expect(result).toBeUndefined();
            expect(console.error).toHaveBeenCalledTimes(1);
        })
    })

});