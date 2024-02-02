import dotenv from "dotenv";
dotenv.config();

const urlApi = process.env.ANIME_BASE_API!;
const api = new URL(urlApi);

const getAllData = async () => {
    try {
        const response = await fetch(api);
        if (response.status === 404) {
            throw new Error("Resource not found");
        }
        const responseData = await response.json();
        const usefulinformation = responseData.data;

        return usefulinformation
    } catch (error) {
        return error
    };
};

const main = async () => {
    const data = await getAllData();
    console.log(data)
};

main()