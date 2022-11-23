export default function find_Anime() {
    let query = `query($title: String) {
                Media(search: $title, type: ANIME, sort: SCORE_DESC) {
                    title {
                        english
                    }
                    averageScore
                    siteUrl
                    coverImage {
                        medium
                    }
                    recommendations(sort: RATING_DESC, page: 1, perPage: 20) {
                        edges {
                            node {
                                id
                            }
                        }
                    }
                }
            }`;

    let variables = {
        title: "Cowboy Bebop"//document.getElementById("animeTitleText").value
    };

    let url = 'https://graphql.anilist.co',
        options = {
            method: 'POST',
            headers: [
                ['Content-Type', 'application/json'],
                ['Accept', 'application/json'],
            ],
            body: JSON.stringify({
                query: query,
                //variables: variables
            })
        };

    function handleResponse(response) {
        return response.json().then(function (json) {
            return response.ok ? json : Promise.reject(json);
        });
    }

    function handleData(data) {
        console.error("Successfuly Queried AniList!");
        display_Anime(data);
    }

    function handleError(error) {
        alert('It seems you have entered the title incorrectly, please double check your spelling!');
        console.error(error);
    }
    // I want to throw my computer across the room. For the past two hours I have been trying to get it to fetch
    // I have tried so many different things, multiple times
    // I do not understand why it fails to fetch when my code is LITERALLY copy and pasted from the API website
    // Sometimes I really hate technology

    console.error("about to fetch");
    fetch(url, options).then(handleResponse).then(handleData).catch(handleError);
};
