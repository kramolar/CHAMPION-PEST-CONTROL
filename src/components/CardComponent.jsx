export const CardComponent = ({ img, title, description }) => {
  return (
    <div>
      <div className="max-w-sm px-3 py-3 bg-black-shade rounded-lg">
        <div class="max-w-sm rounded-lg shadow dark:bg-black-shade dark:border-black-shade">
          <img className="rounded-t-lg" src={img} alt="image" />
          <div className="p-5 bg-black-shade">
            <div className="mb-2 text-2xl font-bold tracking-tight text-letter-color dark:black-shade">
              {title}
            </div>
            <div className="mb-3 font-normal  text-letter-color dark:black-shade">
              {description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
