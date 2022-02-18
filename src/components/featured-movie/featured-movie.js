import React from "react";
import "./featured-movie.css";

const FeaturedMovie = ({ item }) => {
    const firstDate = new Date(item.first_air_date);
    const genres = item.genres.map((genre) => genre.name).join(", ");
    let description = item.overview;
    if (description.length > 200) {
        description = description.substring(0, 200) + "...";
    }

    return (
        <section
            className="featured"
            style={{
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
            }}
        >
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name">{item.original_name}</div>
                    <div className="featured--info">
                        <div className="featured--rate">
                            <strong>Average Rate: </strong> {item.vote_average}
                        </div>
                        <div className="featured--launchyear">
                            {firstDate.getFullYear()}
                        </div>
                        <div className="featured--seasonscount">
                            {item.number_of_seasons} Season
                            {item.number_of_seasons > 1 && "s"}
                        </div>
                    </div>
                    <div className="featured--description">{description}</div>
                    <div className="featured--buttons">
                        <a
                            href={`/watch/${item.id}`}
                            className="featured--watchbtn"
                        >
                            ▶ Watch
                        </a>
                        <a
                            href={`/list/add/${item.id}`}
                            className="featured--mylistbtn"
                        >
                            + My List
                        </a>
                    </div>
                    <div className="featured--genres">
                        <strong>Genres:</strong> {genres}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedMovie;
