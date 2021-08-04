import React, {useState} from "react";
import { setBook } from '../services/BookService.js';

export const FormEdit = () => {
    const [alert, setAlert] = useState(false);
    const [bookTitle, setBookTitle] = useState('');
    const [bookYear, setBookYear] = useState('');
    const [bookLink, setBookLink] = useState('');
    const [bookReview, setBookReview] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const book ={bookTitle,bookYear,bookLink,bookReview}
        setBook(book)
            .then(() => {
                setBookTitle('');
                setBookYear('');
                setBookLink('');
                setBookReview('');
                setAlert(true);
            })
    };
    return (
        <div>
            <h1>Добавить книгу</h1>
            {alert && <h2> Сохранение успешно</h2>}
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Название</label>
                <input type="title" onChange={event => setBookTitle(event.target.value)} value={bookTitle} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Год выпуска</label>
                <input type="year" onChange={event => setBookYear(event.target.value)} value={bookYear} className="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Ссылка на изображение</label>
                <input type="link" onChange={event => setBookLink(event.target.value)} value={bookLink} className="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Описание</label>
                <input type="review"onChange={event => setBookReview(event.target.value)} value={bookReview} className="form-control" id="exampleInputPassword1"/>
            </div>
            <button type="submit" className="btn btn-primary">Сохранить</button>
        </form>
        </div>
        )
    }