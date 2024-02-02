interface AnimeCharacter {
    mal_id: number;
    url: string;
    images: {
        jpg: {
            image_url: string;
        };
        webp: {
            image_url: string;
        };
    };
    name: string;
    name_kanji: string;
    nicknames: string[];
    favorites: number;
    about: string;
};

export { AnimeCharacter }