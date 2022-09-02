import { MouseEvent, useState } from 'react';
import { Link, generatePath } from 'react-router-dom';
import { AppRoute } from '../../const';

type FilmCardProps = {
  previewImage: string;
  name: string;
  id: number;
  movie: string;
}

export function FilmCard({previewImage, name, id, movie}: FilmCardProps): JSX.Element {
  const [isVideo, setIsVideo] = useState(true);

  let timer = 0;

  const handlerCardMouseOver = (evt: MouseEvent<HTMLDivElement>) => {
    timer = window.setTimeout(() => setIsVideo(false), 1000);
  };

  const handlerCardMouseOut = () => {
    window.clearTimeout(timer);
    setIsVideo(true);
  };

  return (
    <article className="small-film-card catalog__films-card" onMouseOver={handlerCardMouseOver} onMouseOut={handlerCardMouseOut}>
      <div className="small-film-card__image">
        <Link to={generatePath(AppRoute.Movie, { filmId: String(id) })} >
          {isVideo ?
            <img
              src={previewImage}
              alt={name}
              width="280" height="175"
            /> :
            <video width="280" height="175" autoPlay><source src={movie}/></video>}
        </Link>
      </div>
      <h3 className="small-film-card__title">
        <Link
          to={generatePath(AppRoute.Movie, { filmId: String(id) })}
          className="small-film-card__link"
        >
          {name}
        </Link>
      </h3>
    </article>
  );
}
