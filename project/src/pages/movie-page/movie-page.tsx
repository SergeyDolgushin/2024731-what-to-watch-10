import { MouseEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FilmCardDetails } from '../../components/film-card-details/film-card-details';
import { FilmCardOverview } from '../../components/film-card-overview/film-card-overview';
import { FilmCardReview } from '../../components/film-card-review/film-card-review';
import { FilmCardTitle } from '../../components/film-card-title/film-card-title';
import { FilmsList } from '../../components/films-list/films-list';
import { Footer } from '../../components/footer/footer';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useApiService } from '../../services/api-services';
import { getSelectedFilm, setLoaded } from '../../store/actions';
import { getComments } from '../../store/api-actions';


export function MoviePage(): JSX.Element | null {
  const [section, setSection] = useState('Overview');
  const {films, isLoading, selectedFilm, comments} = useAppSelector((state) => state);
  const { filmId } = useParams<string>();
  const { getFilm} = useApiService();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (filmId) {
      dispatch(getComments(String(filmId)));
      getFilm(filmId).then((res) => {
        dispatch(getSelectedFilm(res));
        dispatch(setLoaded({isLoading: false}));
      });
    }
  }, [filmId]);


  const choosedSection = () => {
    switch (section) {
      case 'Details':

        return <FilmCardDetails film={selectedFilm}/>;

      case 'Reviews':

        return <FilmCardReview comments={comments}/>;

      default:

        return <FilmCardOverview film={selectedFilm}/>;
    }
  };

  const handleOnClickTab = (evt: MouseEvent<HTMLDivElement>) => {
    setSection(evt.currentTarget.innerText);
  };

  return (
    !isLoading ?
      <>
        <section className="film-card film-card--full" style={{backgroundColor: selectedFilm.backgroundColor}}>
          <FilmCardTitle
            backgroundImage={selectedFilm.backgroundImage}
            name={selectedFilm.name}
            released={selectedFilm.released}
            genre={selectedFilm.genre}
            id={selectedFilm.id}
          />
          <div className="film-card__wrap film-card__translate-top">
            <div className="film-card__info">
              <div className="film-card__poster film-card__poster--big">
                <img src={selectedFilm.posterImage} alt={selectedFilm.name} width="218" height="327" />
              </div>

              <div className="film-card__desc">
                <nav className="film-nav film-card__nav">
                  <ul className="film-nav__list">
                    <li className={`film-nav__item ${section === 'Overview' ? 'film-nav__item--active' : ''}`}>
                      <div className="film-nav__link" onClick={handleOnClickTab}>Overview</div>
                    </li>
                    <li className={`film-nav__item ${section === 'Details' ? 'film-nav__item--active' : ''}`} >
                      <div className="film-nav__link" onClick={handleOnClickTab}>Details</div>
                    </li>
                    <li className={`film-nav__item ${section === 'Reviews' ? 'film-nav__item--active' : ''}`}>
                      <div className="film-nav__link" onClick={handleOnClickTab}>Reviews</div>
                    </li>
                  </ul>
                </nav>

                {choosedSection()}
              </div>
            </div>
          </div>
        </section>

        <div className="page-content">
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>
            {FilmsList(4, films)}
          </section>
          <Footer/>
        </div>
      </> : null
  );
}
