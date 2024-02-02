import { AnimeCharacter } from "../interface/mangaInterface";
import dotenv from "dotenv";
dotenv.config();

const urlApi = process.env.ANIME_BASE_API!;
const api = new URL(urlApi);

const getAllData = async (): Promise<AnimeCharacter[] | Error> => {
    try {
        const response = await fetch(api);
        if (response.status === 404) {
            throw new Error("Resource not found");
        }
        const responseData = await response.json();
        const usefulinformation = responseData.data;

        return usefulinformation
    } catch (error: any) {
        return error
    };
};

const getUrlById = async (id: number) => {
    try {
        const data = await getAllData()

        if (data instanceof Error) {
            throw data
        }

        const character = data.find((character) => character.mal_id === id);

        if (!character) {
            throw new Error(`Character with ID ${id} not found`);
        }

        const characterInfo = {
            anime: character.name,
            url: character.url,
        };

        const animeString =
            `  Character's name: ${characterInfo.anime}, 
    URL: ${characterInfo.url}`;

        return animeString;
    } catch (error) {
        return error
    }
};


const main = async () => {
    const data = await getUrlById(417);
    console.log(data)
};

main()

export {getAllData}