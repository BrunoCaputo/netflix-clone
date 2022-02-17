import React, { useEffect, useState } from "react";
import "./App.css";
import Tmdb from "./tmdb";
import MovieRow from "./components/movie-row/movie-row";
import FeaturedMovie from "./components/featured-movie/featured-movie";

const App = () => {
    const [movieList, setMovieList] = useState([]);
    const [featuredData, setFeaturedData] = useState(null);

    useEffect(() => {
        const loadAll = async () => {
            // Get movies lists
            const list = await Tmdb.getHomeList();
            setMovieList(list);

            // Get highlighted movie
            const originals = list.find((lst) => lst.slug === "originals");
            const originalsResults = originals.items.results;
            const randomMovie = Math.floor(
                Math.random() * originalsResults.length
            );
            const chosen = originalsResults[randomMovie];
            const chosenInfo = await Tmdb.getMovieInfo(chosen.id, "tv");
            setFeaturedData(chosenInfo);
        };

        loadAll();
    }, []);

    return (
        <div className="page">
            {/* Header */}

            {featuredData && <FeaturedMovie item={featuredData} />}

            <section className="lists">
                {movieList.map((item, key) => (
                    <MovieRow key={key} title={item.title} items={item.items} />
                ))}
            </section>
            {/* Footer */}
        </div>
    );
};

export default App;
