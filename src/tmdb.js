import env from "./environment/env";

const API_KEY = env.APIKEY;
const API_BASE = env.APIBASE;

/*
Get movies list
- Netflix Originals
- Top Picks
- Trending
** Genres **
- Action
- Comedy
- Horror
- Romantic
- Documentary
*/

const basicFetch = async (endpoint) => {
    try {
        const req = await fetch(`${API_BASE}${endpoint}`);
        const json = await req.json();
        return json;
    } catch (error) {
        console.error(error);
    }
};

export default {
    getHomeList: async () => {
        return [
            {
                slug: "originals",
                title: "Netflix Originals",
                items: await basicFetch(
                    `/discover/tv?with_network=213&api_key=${API_KEY}`
                ),
            },
            {
                slug: "toppicks",
                title: "Recommended to You",
                items: await basicFetch(`/movie/top_rated?api_key=${API_KEY}`),
            },
            {
                slug: "trending",
                title: "Trending now",
                items: await basicFetch(
                    `/trending/all/week?api_key=${API_KEY}`
                ),
            },
            {
                slug: "action",
                title: "Action movies",
                items: await basicFetch(
                    `/discover/movie?with_genres=28&api_key=${API_KEY}`
                ),
            },
            {
                slug: "comedy",
                title: "Comedy movies",
                items: await basicFetch(
                    `/discover/movie?with_genres=35&api_key=${API_KEY}`
                ),
            },
            {
                slug: "horror",
                title: "Horror movies",
                items: await basicFetch(
                    `/discover/movie?with_genres=27&api_key=${API_KEY}`
                ),
            },
            {
                slug: "romance",
                title: "Romantic movies",
                items: await basicFetch(
                    `/discover/movie?with_genres=10749&api_key=${API_KEY}`
                ),
            },
            {
                slug: "documentary",
                title: "Documentaries",
                items: await basicFetch(
                    `/discover/movie?with_genres=99&api_key=${API_KEY}`
                ),
            },
        ];
    },
};
