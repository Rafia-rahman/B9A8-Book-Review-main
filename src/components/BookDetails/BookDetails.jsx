import { useLoaderData, useParams } from "react-router-dom";


const BookDetails = () => {
    const books = useLoaderData();
    const {bookId} = useParams()
    const idInt = parseInt(bookId);
    const book = books.find(book => book.bookId === idInt);
    console.log(bookId, books);

    const { image, bookName, author, review, totalPages, rating, category, Young_or_Adult, publisher, yearOfPublishing} = book;
        
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
  <figure><img src={image} alt="Books"/></figure>
  <div className="card-body">
    <h2 className="card-title">{bookName}</h2>
    <p>{author}</p>
    <hr />
    <p>{category}</p>
    <hr />
    <p> Review: {review}</p>
    <p>Tag: {Young_or_Adult}</p>
    <p>{totalPages}</p>
    <p>Publisher: {publisher}</p>
    <p>Year of publish: {yearOfPublishing}</p>
    <p>Rating: {rating}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-info text-white">Read</button>
      <button className="btn btn-info text-white">Wishlist</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default BookDetails;