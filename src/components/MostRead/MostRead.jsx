

const MostRead = () => {
    return (
        <div>
            <div className="carousel max-w-xl bg-yellow-300">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/jkxs2RD/1477235286.jpg" className="max-w-md " />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/yQB0PSS/himur-nil-josna.jpg" className="max-w-md" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/nzwPh5x/22503391.jpg" className="max-w-md" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
</div>
            <div className="bg-blue-700 text-yellow-50 font-bold text-2xl">
            <ul>
                <li>আমার আছে জল</li>
                <li>হিমু সিরিজ</li>
                <li>দেয়াল</li>
                <li>আজ রবিবার</li>
                <li>ছায়াবিথি</li>
                <li>আয়না ঘর</li>
                <li>দারুচিনি দ্বীপ</li>
                
            </ul>
            </div>
        </div>
    );
};

export default MostRead;