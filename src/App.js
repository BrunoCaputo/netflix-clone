import React, { useEffect, useState } from "react";
import "./App.css";
import Tmdb from "./tmdb";
import MovieRow from "./components/movie-row/movie-row";
import FeaturedMovie from "./components/featured-movie/featured-movie";
import Header from "./components/header/header";

const App = () => {
    const [movieList, setMovieList] = useState([]);
    const [featuredData, setFeaturedData] = useState(null);
    const [blackHeader, setBlackHeader] = useState(false);

    const spinnerUrl = "https://www.rchandru.com/images/portfolio/loading.gif";

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

    useEffect(() => {
        const scrollListener = () => {
            setBlackHeader(window.scrollY > 10);
        };

        window.addEventListener("scroll", scrollListener);
        return () => {
            window.removeEventListener("scroll", scrollListener);
        };
    }, []);

    return (
        <div className="page">
            <Header black={blackHeader} />

            {featuredData && <FeaturedMovie item={featuredData} />}

            <section className="lists">
                {movieList.map((item, key) => (
                    <MovieRow key={key} title={item.title} items={item.items} />
                ))}
            </section>

            <footer>
                Made by
                <a
                    href="https://github.com/BrunoCaputo"
                    rel="noreferrer"
                    target="_blank"
                >
                    {" "}
                    Bruno Caputo
                </a>
                <br />
                Image Rights for
                <a
                    href="https://www.netflix.com/"
                    rel="noreferrer"
                    target="_blank"
                    className="netflix"
                >
                    {" "}
                    Netflix
                </a>
                <br />
                Movies and TV Shows datas from
                <a
                    href="https://www.themoviedb.org/"
                    rel="noreferrer"
                    target="_blank"
                >
                    {" "}
                    themoviedb.org
                </a>
            </footer>

            {movieList.length <= 0 && (
                <div className="loading">
                    <img src={spinnerUrl} alt="loading spinner" />
                </div>
            )}
        </div>
    );
};

export default App;
