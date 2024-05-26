const CreatedCards = ({ products, onDelete }) => {
  return (
    <>
      {products.map((item, index) => {
        const { name, ingredients, instructions, image } = item;
        return (
          <div key={index} className="py-4">
            <div className="card flex flex-col md:flex-row hover:drop-shadow-xl bg-base-100 shadow-xl">
              <figure className="p-4 md:p-10 flex-shrink-0">
                <img
                  src={image}
                  alt="Recipe"
                  className="h-24 w-24 md:h-40 md:w-40 rounded-lg object-cover transition duration-300 group-hover:scale-105"
                />
              </figure>
              <div className="flex flex-col justify-between p-4 w-full">
                <div className="card-body text-left p-0">
                  <div className="mb-2">
                    <h2 className="card-title font-bold text-lg flex items-baseline">
                      <span>Name:</span>
                      <span className="font-normal ml-2">{name}</span>
                    </h2>
                  </div>
                  <div className="mb-2">
                    <h2 className="card-title font-bold text-lg flex items-baseline">
                      <span>Ingredients:</span>
                      <span className="font-normal ml-2">{ingredients}</span>
                    </h2>
                  </div>
                  <div className="mb-2">
                    <h2 className="card-title font-bold text-lg flex items-baseline">
                      <span>Instructions:</span>
                      <span className="font-normal ml-2 whitespace-pre-line">
                        {instructions}
                      </span>
                    </h2>
                  </div>
                </div>
                <div className="mt-4 self-end md:self-start">
                  <button
                    className="btn btn-danger"
                    onClick={() => onDelete(index)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CreatedCards;
