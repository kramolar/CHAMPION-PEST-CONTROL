export const PestLibraryComponent = ({ image, title, description }) => {
  return (
    <div>
      <div className="max-w-sm px-1 py-1 bg-pistachio rounded-xl">
        <div class="max-w-sm rounded-lg ">
          <img className="rounded-t-lg" src={image} alt="image" />
          <div className="p-5 bg-pistachio">
            <div className="mb-2 text-sm md:text-2xl font-bold tracking-tight text-letter-color dark:black-shade">
              {title}
            </div>
            <div className="mb-3  font-normal text-xs md:text-lg text-letter-color dark:black-shade">
              {description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
