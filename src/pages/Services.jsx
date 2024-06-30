import restaurant from "../assets/restaurant.jpg";
import industry from "../assets/industry.jpg";
import house from "../assets/house.jpg";

export const Services = () => {
  return (
    <div>
      <div className="mx-6 divide-y-4 divide-brown-shade">
        <div className="pt-4 flex flex-col md:flex-row mb-12">
          <div className="flex-1">
            <img src={restaurant} alt="Restaurant" className="w-full h-auto" />
          </div>
          <div className="flex-1 mt-8 md:mt-0 md:mx-8">
            <div className="text-2xl font-medium">Commercial Pest Control</div>
            <ul className="mt-2 list-disc list-inside">
              <li>
                Office Buildings: Keeping your workspace free from pests to
                maintain productivity and employee satisfaction.
              </li>
              <li>
                Retail Stores: Protecting your inventory and providing a
                pleasant shopping experience for your customers.
              </li>
              <li>
                Restaurants and Food Services: Ensuring compliance with health
                regulations and keeping your establishment pest-free.
              </li>
              <li>
                Warehouses and Storage Facilities: Preventing pest damage to
                stored goods and maintaining a clean environment.
              </li>
              <li>
                Healthcare Facilities: Maintaining a sanitary space essential
                for patient safety and care.
              </li>
              <li>
                Hotels and Hospitality: Ensuring a comfortable and pest-free
                stay for your guests.
              </li>
            </ul>
          </div>
          <div></div>
        </div>

        <div className="flex flex-col md:flex-row mb-12 pt-12">
          <div className="flex-1">
            <img src={industry} alt="Industry" className="w-full h-auto" />
          </div>
          <div className="flex-1 mt-8 md:mt-0 md:mx-8">
            <div className="text-2xl font-medium">Industrial Pest Control</div>
            <ul className="mt-2 list-disc list-inside">
              <li>
                Manufacturing Plants: Keeping your production lines running
                smoothly by preventing pest infestations.
              </li>
              <li>
                Retail Stores: Protecting your inventory and providing a
                pleasant shopping experience for your customers.
              </li>
              <li>
                Distribution Centers: Ensuring a clean and pest-free environment
                for efficient operations.
              </li>
              <li>
                Food Processing Facilities: Maintaining compliance with health
                and safety regulations.
              </li>
              <li>
                Pharmaceutical Plants: Ensuring a sterile environment free from
                pest contamination.
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row pt-12">
          <div className="flex-1">
            <img src={house} alt="House" className="w-full h-auto" />
          </div>
          <div className="flex-1 mt-8 md:mt-0 md:mx-8">
            <div className="text-2xl font-medium">Residential Pest Control</div>
            <ul className="mt-2 list-disc list-inside">
              <li>
                Ant Control: Effective solutions to eliminate ant infestations
                and prevent future occurrences.
              </li>
              <li>
                Rodent Control: Safe and humane methods to remove mice and rats
                from your home.
              </li>
              <li>
                Termite Treatment: Advanced treatments to protect your home from
                costly termite damage.
              </li>
              <li>
                Bed Bug Extermination: Thorough inspection and treatment to
                eradicate bed bugs.
              </li>
              <li>
                Spider Control: Removing and preventing spiders from invading
                your living spaces.
              </li>
              <li>
                General Pest Control: Addressing a variety of common household
                pests, including cockroaches, wasps, and more.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="pt-16"></div>
    </div>
  );
};
