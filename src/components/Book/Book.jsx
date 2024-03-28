


const Book = ({book}) => {
    const {image, bookName, author, review, totalPages, rating, category, Young_or_Adult, publisher, yearOfPublishing} = book;
    return (
        <div className="card  bg-slate-200 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={image} alt="books" className="rounded-xl w-60"/>
  </figure>
  <div>
    <button className="px-5 py-2 font-extrabold border bg-green-300">{Young_or_Adult}</button>
    <button className="px-5 py-2 font-extrabold border bg-green-300 mr-10">{publisher}</button>
  </div>
  
  <div className="card-body items-center text-center">
  
    
    <h2 className="card-title">{bookName}</h2>
    <p>{author}</p>
    <p>{review}</p>
    <p>{totalPages}</p>
    <div className="flex justify-between gap-16">
        <p>{category}</p>
        <p>{rating}</p>
    </div>
    
    

    
  </div>
</div>
    );
};

export default Book;