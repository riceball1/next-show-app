console.log('Database is running!')

const CountryOfOrigin = {
    TURKEY: "Turkey",
    KOREA: "Korea"
}


const DATABASE = {
    shows:
        [
            {
                id: 1,
                title: "Yabani",
                imageData: {
                    imageUrl: "./assets/images/turkish-yabani-1.jpeg"
                },
                metaData: {
                    releaseYear: "2023",
                    episodes: 20,
                    countryOfOrigin: CountryOfOrigin.TURKEY,
                    season: 2,
                    rating: "PG-13"
                },
            },
            {
                id: 2,
                title: "Moving",
                imageData: {
                    imageUrl: "./assets/images/korean-moving-1.webp"
                },
                metaData: {
                    releaseYear: "2023",
                    episodes: 20,
                    countryOfOrigin: CountryOfOrigin.KOREA,
                    season: 1,
                    rating: "PG-13"
                },
            }
        ]

}