import {
  Accordion,
  AccordionItem,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Checkbox,
  CheckboxGroup,
  Divider,
  Link,
  Radio,
  RadioGroup
} from "@nextui-org/react";

export const meta = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" }
  ];
};

export default function Index() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <div
      style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}
      className="w-full max-w-[1024px] mx-auto p-5"
    >
      <Card className="w-[1024px]">
        <CardHeader className="flex gap-3">
          <h1 className="">Pitanja</h1>
        </CardHeader>
        <Divider />
        <CardBody className="flex flex-col gap-10 p-10">
          <div className="flex flex-col gap-4">
            <h2>1. Odaberite Vaš spol</h2>
            <RadioGroup orientation="horizontal" className="ps-6">
              <Radio className="me-2" value="male">
                Žensko
              </Radio>
              <Radio className="me-2" value="female">
                Muško
              </Radio>
              <Radio className="me-2" value="other">
                Ostalo
              </Radio>
            </RadioGroup>
          </div>
          <div className="flex flex-col gap-4">
            <h2>2. Kakav tip kose imate</h2>
            <CheckboxGroup orientation="horizontal" className="ps-6">
              <Checkbox className="me-2" value="natural">
                Prirodna
              </Checkbox>
              <Checkbox className="me-2" value="damaged">
                Ispucala
              </Checkbox>
              <Checkbox className="me-2" value="bleached">
                Blajhana
              </Checkbox>
            </CheckboxGroup>
          </div>
        </CardBody>
        <Divider />
        <CardFooter>
          <Button color="primary" auto>
            Pošalji
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
