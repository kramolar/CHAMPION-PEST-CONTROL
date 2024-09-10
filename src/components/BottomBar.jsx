import phone from "../assets/phone.png";

export const BottomBar = () => {
  return (
    <div className="fixed bottom-2 items-center flex justify-center py-1 animate-bounce w-full bg-brown-shade2 md:hidden">
      <img src={phone} className="h-6 w-6" />
      <a href="tel:+16478062995" className="py-1 text-grey-shade">
        +1 (647) 806 - 2995
      </a>
    </div>
  );
};
