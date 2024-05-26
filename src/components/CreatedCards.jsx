const CreatedCards = ({ products }) => {
  return (
    <>
      {products.map((item, index) => {
        const { name, ingredients, instructions, image } = item;
        return (
          <div key={index} className="py-4">
            <div className="card  flex flex-row hover:drop-shadow-xl bg-base-100 shadow-xl">
              <figure className="p-10">
                <img
                  src={image}
                  alt="Shoes"
                  className=" h-24 w-24 rounded-lg sm:h-40 sm:w-40 object-cover group-hover:scale-105 transition duration-300"
                />
              </figure>
              <div className="">
                <div className="card-body  text-left">
                  <div>
                    <h2 className="card-title font-bold text-lg">
                      Name:<span className="font-normal">{name}</span>{" "}
                    </h2>
                  </div>
                  <div>
                    <h2 className="card-title font-bold text-lg">
                      Ingredients:
                      <span className="font-normal">{ingredients}</span>{" "}
                    </h2>
                  </div>
                  <div>
                    <h2 className="card-title  font-bold text-lg">
                      Instructions:
                      <span className="font-normal">{instructions}</span>{" "}
                    </h2>
                  </div>
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
