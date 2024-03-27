


const Book = ({book}) => {
    const {image, bookName, author, review, totalPages, rating, category, tags, publishe, yearOfPublishing} = book;
    return (
        <div className="card  bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={image} alt="Shoes" className="rounded-xl" />
  </figure>
  
  <div className="card-body items-center text-center">
  <p className="justify-center">{tags}</p>
    
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