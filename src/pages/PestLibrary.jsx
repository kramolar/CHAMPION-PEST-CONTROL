import { PestLibraryComponent } from "../components/PestLibraryComponent";
import ant from "../assets/pests/ant.jpg";
import bedbug from "../assets/pests/bedbug.jpg";
import beetle from "../assets/pests/beetle.jpg";
import bird from "../assets/pests/bird.jpg";
import cockroach from "../assets/pests/cockroach.jpg";
import fly from "../assets/pests/fly.jpg";
import mice from "../assets/pests/mice.jpg";
import racoon from "../assets/pests/racoon.jpg";
import skunk from "../assets/pests/skunk.jpg";
import spider from "../assets/pests/spider.jpg";
import termite from "../assets/pests/termite.jpg";
import wasps from "../assets/pests/wasps.jpg";

export const PestLibrary = () => {
  return (
    <div className="pt-8">
      <div className="w-full bg-grey-shade3 text-center">
        <div className="w-full bg-grey-shade3 text-center text-black-shade font-monteserrat font-semibold text-2xl md:text-4xl py-6 md:py-12">
          Pest Library
          <div className="text-lg pt-4">
            Dont get scared. We have got you covered.
        </div>
        </div>
        
      </div>

      <div className="pt-10 px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <PestLibraryComponent
            image={ant}
            title={"Ants"}
            description={
              "Ants are common pests in homes and gardens, attracted to sweets, grease, and proteins. Managing an ant infestation involves addressing their persistent presence and food sources effectively."
            }
          />
          <PestLibraryComponent
            image={bedbug}
            title={"Bedbugs"}
            description={
              "Bedbugs are tiny parasites that feed on human and animal blood, notoriously challenging to eliminate once they infest a space. Identifying, preventing, and controlling bedbug infestations is crucial."
            }
          />
          <PestLibraryComponent
            image={beetle}
            title={"Beetles"}
            description={
              "Beetles are a diverse group of insects that can cause various problems depending on the species and environment they infest. Some beetles can damage crops, stored food products, and even structures."
            }
          />
          <PestLibraryComponent
            image={bird}
            title={"Birds"}
            description={
              "Birds can spread diseases like histoplasmosis, salmonellosis, and avian influenza through droppings, feathers, and nests. Species like pigeons and sparrows may carry mites and ticks, further transmitting diseases to humans and pets."
            }
          />
          <PestLibraryComponent
            image={cockroach}
            title={"Roaches"}
            description={
              "Cockroach allergens can provoke asthma attacks and allergies in sensitive individuals. They harbor bacteria such as Salmonella and viruses, contaminating food and surfaces. Their droppings and shed skins degrade indoor air quality and may exacerbate respiratory problems."
            }
          />
          <PestLibraryComponent
            image={fly}
            title={"Flies"}
            description={
              "Flies  are attracted to food, waste, and damp environments, and they can quickly reproduce, leading to large populations if not controlled. Flies can spread diseases like salmonella, E. coli, and cholera by contaminating food and surfaces with pathogens picked up from waste and decaying materials."
            }
          />
          <PestLibraryComponent
            image={mice}
            title={"Mouse"}
            description={
              "Mice are common household pests that pose health risks and can cause property damage. They are adept at squeezing through small openings and reproduce rapidly, which complicates control efforts. Mice transmit diseases through their droppings, urine, and saliva, including hantavirus, salmonellosis, and leptospirosis."
            }
          />
          <PestLibraryComponent
            image={racoon}
            title={"Racoons"}
            description={
              "Raccoons can carry diseases such as rabies, raccoon roundworm (Baylisascaris), and leptospirosis, which can be transmitted to humans and pets through bites, scratches, or contact with their feces."
            }
          />
          <PestLibraryComponent
            image={skunk}
            title={"Skunks"}
            description={
              "Skunks can spray a pungent odor that lingers and is difficult to remove from pets, clothing, and indoor spaces. They may dig holes in lawns and gardens in search of insects, grubs, and plant roots."
            }
          />
          <PestLibraryComponent
            image={spider}
            title={"Spiders"}
            description={
              "While most spiders are harmless to humans, bites from venomous spiders like the brown recluse and black widow can cause severe reactions and require medical attention. Some individuals may experience allergic reactions to spider bites, leading to swelling, itching, and other symptoms."
            }
          />
          <PestLibraryComponent
            image={termite}
            title={"Termites"}
            description={
              "Termites weaken structures by feeding on wood over time. Repairing their damage is costly, and untreated infestations can lower property values. They often go undetected until they've caused extensive damage, feeding inside wood without visible signs on the surface."
            }
          />
          <PestLibraryComponent
            image={wasps}
            title={"Wasps"}
            description={
              "Wasps can sting multiple times, and their stings can be painful and cause allergic reactions in sensitive individuals. Nests near homes or outdoor areas can pose a threat to residents and visitors, especially during warmer months."
            }
          />
        </div>
      </div>
      <div className="pt-8"></div>
    </div>
  );
};
