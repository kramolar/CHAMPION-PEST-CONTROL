import { BottomBar } from "../components/BottomBar";
import { InquiryForm } from "../components/InquiryForm";

export const ContactUs = () => {
  return (
    <div>
      <div className="flex justify-between pt-8 ml-8 mr-8"></div>
      <div>
        <InquiryForm />
      </div>
      <div className="pt-16"></div>
      <BottomBar />
    </div>
  );
};
