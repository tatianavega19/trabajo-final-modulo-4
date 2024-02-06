import {
    getAllData,
    getUrlById,
    getNickNamesById,
    getUrlImages,
    getOrderList
} from "./model/animeModel";

const main = async () => {
    const args = process.argv.slice(2);
    const method = args[0];
    const id = Number(args[1]);
    const typeForImages = args[2] as 'jpg' | 'webp';

    try {
        switch (method) {
            case 'getAllData':
                const data = await getAllData();
                console.log(data);
                break;
            case 'getUrlById':
                const urlResult = await getUrlById(id);
                console.log(urlResult);
                break;
            case 'getNickNamesById':
                const nicknamesResult = await getNickNamesById(id);
                console.log(nicknamesResult);
                break;
            case 'getUrlImages':
                const imagesResult = await getUrlImages(id, typeForImages);
                console.log(imagesResult);
                break;
            case 'getOrderList':
                const orderedListResult = await getOrderList();
                console.log(orderedListResult);
                break;
            default:
                console.error('Unrecognized method');
                break;
        };
    } catch (error) {
        return error
    };
};

main();