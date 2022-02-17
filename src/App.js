import React, { useEffect, useState } from "react";
import "./App.css";
import Tmdb from "./tmdb";
import MovieRow from "./components/movie-row/movie-row";

export default () => {
    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
        const loadAll = async () => {
            // Get movies lists
            let list = await Tmdb.getHomeList();
            setMovieList(list);
        };

        loadAll();
    }, []);

    return (
        <div className="page">
            {/* Header */}
            {/* Highlight */}
            <section className="lists">
                {movieList.map((item, key) => (
                    <MovieRow key={key} title={item.title} items={item.items} />
                ))}
            </section>
            {/* Footer */}
        </div>
    );
};
