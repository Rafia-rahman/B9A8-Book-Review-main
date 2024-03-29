import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";



const Book = ({book}) => {
    const {bookId, image, bookName, author, review, totalPages, rating, category, Young_or_Adult, publisher, yearOfPublishing} = book;
    return (
        <div className="card-actions">
            <Link to={`/book/${bookId}`}>
            <div className="card bg-slate-200 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={image} alt="books" className="rounded-xl w-60"/>
  </figure>
  <div className="p-16">
    <button className="px-5 py-2 font-extrabold text-green-700 border rounded border-gray-400 mr-4">{Young_or_Adult}</button>
    <button className="px-5 py-2 font-extrabold  text-green-700 border rounded border-gray-400">{publisher}</button>
  </div>
  
  <div className="card-body pb-4 items-center text-center">
  
    
    <div className="mt-0">
    <h2 className="card-title text-black-800 font-bold text-3xl">{bookName}</h2>
    <hr />
    <p>{author}</p>
    
    </div>
    <div className="flex justify-between gap-16">
        <p>{category}</p>
        <div>
        <h2 className="flex gap-2">{rating}<CiStar className="text-2xl"></CiStar></h2>
        </div>

        
    </div>
    
    

    
  </div>
</div>
            
            </Link>
        </div>
        
    );
};

export default Book;