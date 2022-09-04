import { Comment } from '../../types/types';

type FilmCardCommentsProps = {
  comments: Comment[];
}

const makeReviewsList = (array: Comment[], min: number, max: number) =>{
  const slisedArray = array.slice(min, max);

  return slisedArray.map((item) => (
    <div className="review" key={item.id}>
      <blockquote className="review__quote">
        <p className="review__text">{item.comment}</p>

        <footer className="review__details">
          <cite className="review__author">{item.user.name}</cite>
          <time className="review__date" dateTime="2016-12-24">{item.date}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{item.rating}</div>
    </div>
  ));
};


export function FilmCardReview({comments}: FilmCardCommentsProps) {

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {makeReviewsList(comments, 0, 3)}
      </div>
      <div className="film-card__reviews-col">
        {makeReviewsList(comments, 3, 6)}
      </div>
    </div>
  );
}
