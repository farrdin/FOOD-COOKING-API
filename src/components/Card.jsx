import PropTypes from "prop-types";

const Card = ({ data }) => {
  const {
    id,
    name,
    description,
    ingredients,
    total_ingredients,
    cook_time,
    calories,
    image,
  } = data;
  return (
    <div className="min-h-screen rounded-3xl">
      <div className="border min-h-content  rounded-2xl p-6 " id={id}>
        <img className="rounded-xl" src={image} alt="" />
        <h3 className="mt-6 mb-4 text-[#282828] text-xl font-semibold ">
          {name}
        </h3>
        <p className="text-[#878787] font-normal font-[Fira Sans] text-base leading-7">
          {description}
        </p>
        <hr className="mt-4 mb-6" />
        <h3 className="mb-4 text-[#282828] text-lg font-medium">
          Ingredients: {total_ingredients}
        </h3>
        <ul className="list-disc ml-4 text-[#878787] text-lg font-normal font-[Fira Sans] leading-8 ">
          <li>{ingredients[0]}</li>
          <li>{ingredients[1]}</li>
          <li>{ingredients[2]}</li>
          <li>{ingredients[3]}</li>
          <li>{ingredients[4]}</li>
        </ul>
        <hr className="mt-4 mb-6" />
        <div className="flex gap-4 text-[#282828CC] text-base font-normal font-[Fira Sans]">
          <span className="flex gap-2 justify-center items-center">
            <i className="fa-regular fa-clock"></i>
            {cook_time} minutes
          </span>
          <span className="flex gap-2 justify-center items-center">
            <i className="fa-solid fa-fire-flame-curved"></i>
            {calories}
            calories
          </span>
        </div>
        <button className="btn my-6 bg-[#0BE58A] rounded-full text-[#150B2B] text-lg font-medium ">
          Want to Cook
        </button>
      </div>
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Card;
