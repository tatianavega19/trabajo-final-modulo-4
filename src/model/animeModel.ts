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

const getNickNamesById = async (id: number) => {
    try {
        const data = await getAllData();

        if (data instanceof Error) {
            throw data
        };

        const character = data.find((character) => character.mal_id === id);

        if (!character) {
            throw new Error(`Character with ID ${id} not found`);;
        };

        const nicknames = character.nicknames;

        const nicknamesString = nicknames.join(', ');

        return (`The nicknames of the character "${character.name}" are: ${nicknamesString}`);
    } catch (error) {
        return error
    };
};

const getUrlImages = async (id: number, type: "jpg" | "webp") => {
    try {
        const data = await getAllData();

        if (data instanceof Error) {
            throw data
        };

        const character = data.find((character) => character.mal_id === id);

        if (!character) {
            throw new Error(`Character with ID ${id} not found`);
        };

        let imageUrl;
        if (type === "jpg") {
            imageUrl = character.images.jpg.image_url;
        } else if (type === "webp") {
            imageUrl = character.images.webp.image_url;
        } else {
            throw new Error(`Invalid image type: ${type}`);
        }

        if (!imageUrl) {
            throw new Error(`Image with ${type} format not found for the character with ID ${id}`);
        };

        return (`The url of the image of the requested character is the following: "${imageUrl}" `)
    } catch (error) {
        return error
    };
};

const getOrderList = async () => {
    try {
        const data = await getAllData();

        if (data instanceof Error) {
            throw data;
        };

        const orderedList = data.sort((a, b) => a.mal_id - b.mal_id);

        const simplifiedList = orderedList.map(character => ({ id: character.mal_id, name: character.name }));

        return simplifiedList;
    } catch (error) {
        return error;
    };
};

export { getAllData, getUrlById, getNickNamesById, getUrlImages, getOrderList }