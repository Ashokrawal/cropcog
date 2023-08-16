import { Collapse, Text } from "@nextui-org/react";

export default function Faqs() {
  return (
    <div className=" bg-green-800 pb-2">
      <div className="p-10 py-10 pb-10">
        <h1 className="font-bold text-white mb-6 text-4xl">FAQS</h1>
        <Collapse.Group className="bg-white rounded-md">
          <Collapse
            className="font-medium"
            title="I placed my order, when will my package arrive?"
          >
            <Text className="text-sm font-normal">
              All orders will be shipped Ground 2-5 business days - If you have
              questions, please contact us via online chat, email, or calling!
            </Text>
          </Collapse>
          <Collapse
            className="font-medium"
            title="I need my order ASAP! How fast can i get my order?"
          >
            <Text className="text-sm font-normal">
              We have a great team of employees working hard every day to offer
              you the fastest services we can! Orders are processed and
              prioritized by date placed and by shipment method. We are not able
              to make any claims or guarantees regarding shipping times.We
              always do our best to accommodate
            </Text>
          </Collapse>
          <Collapse
            className="font-medium"
            title="I have not received my tracking details yet, what should i do?"
          >
            <Text className="text-sm font-normal">
              Tracking info can sometimes take up to 48 hours to update. If you
              have not received your tracking info after 2 business days, please
              contact us with your order number.
            </Text>
          </Collapse>
        </Collapse.Group>
      </div>
    </div>
  );
}
