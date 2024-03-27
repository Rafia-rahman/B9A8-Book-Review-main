

const Banner = () => {
    return (
        <div>
            <div>
                <div className="hero min-h-screen bg-base-200 rounded-3xl p-20">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src="https://i.ibb.co/ryDyYDZ/prod-1246233-04-F72-C25.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-5xl font-bold">Breathe in Books, Exhale Wisdom.</h1>
                            
                            <button className="btn bg-green-500 ">View The List</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;