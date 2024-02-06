import { AnimeCharacter } from "../interface/mangaInterface";
import dotenv from "dotenv";
dotenv.config();

const urlApi = process.env.ANIME_BASE_API!;
const api = new URL(urlApi);

const getAllData = async (): Promise<AnimeCharacter[] | Error> => {
    try {
        const response = await fetch(api);
        if (!response.ok) {
            throw new Error("Failed to fetch data.");
        }

        const responseData = await response.json();
        const usefulinformation = responseData.data;

        return usefulinformation
    } catch (error: any) {
        return error
    };
};

const getUrlById = async (id: number): Promise<string | Error> => {
    try {
        const data = await getAllData()

        if (data instanceof Error) {
            throw new Error("Error fetching data");
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
    } catch (error: any) {
        return error
    }
};

const getNickNamesById = async (id: number): Promise<string | Error> => {
    try {
        const data = await getAllData();

        if (data instanceof Error) {
            throw new Error("Error fetching data");
        };

        const character = data.find((character) => character.mal_id === id);

        if (!character) {
            throw new Error(`Character with ID ${id} not found`);;
        };

        const nicknames = character.nicknames;

        const nicknamesString = nicknames.join(', ');

        return (`The nicknames of the character "${character.name}" are: ${nicknamesString}`);
    } catch (error: any) {
        return error
    };
};

const getUrlImages = async (id: number, type: "jpg" | "webp"): Promise<string | Error> => {
    try {
        const data = await getAllData();

        if (data instanceof Error) {
            throw new Error("Error fetching data");
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

        return (`The url of the image of the requested character is the following: "${imageUrl}" `);
    } catch (error: any) {
        return error
    };
};

const getOrderList = async (): Promise<Array<{ id: number; name: string }> | Error> => {
    try {
        const data = await getAllData();

        if (data instanceof Error) {
            throw new Error("Error fetching data");
        };

        const orderedList = data.sort((a, b) => a.mal_id - b.mal_id);

        const simplifiedList = orderedList.map(character => ({ id: character.mal_id, name: character.name }));

        return simplifiedList;
    } catch (error: any) {
        return error;
    };
};

export {
    getAllData,
    getUrlById,
    getNickNamesById,
    getUrlImages,
    getOrderList
};