import { API_HOST } from "@env";

export const getPokemonList = (url) => {
    return new Promise((resolve, reject) => {
        try {
            const urlRequest = url || `${API_HOST}/pokemon?limit=20&offset=0`;
            const request = new Request(urlRequest, {
                method: 'GET',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                    'Accept-Encoding': 'gzip',
                },
                mode: "cors"
            });
            fetch(request)
                .then(async response => {
                    if (!response) return reject('No found pokemons');
                    const result = await response.json();
                    resolve(result);
                })
                .catch(error => reject(error));
        } catch (error) {
            reject(error);
        }
    });
}


export const getPokemonByUrl = (url) => {
    return new Promise((resolve, reject) => {
        try {
            const request = new Request(url, {
                method: 'GET',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                    'Accept-Encoding': 'gzip',
                },
                mode: "cors"
            });
            fetch(request)
                .then(async response => {
                    if (!response) return reject('No found pokemons');
                    const result = await response.json();
                    resolve(result);
                })
                .catch(error => reject(error));
        } catch (error) {
            reject(error);
        }
    });
}