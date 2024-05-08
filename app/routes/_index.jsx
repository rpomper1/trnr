import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Checkbox,
  CheckboxGroup,
  Divider,
  Radio,
  RadioGroup
} from "@nextui-org/react";
import CustomSlider from "~/components/CustomSlider";

export const meta = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" }
  ];
};

export default function Index() {
  return (
    <div
      style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}
      className=" scrollbar-hide w-screen max-w-[1024px] mx-auto p-4"
    >
      <Card className="max-w-[1024px] w-full">
        <CardHeader className="flex gap-3 p-4">
          <h1 className="text-2xl font-semibold">Pitanja</h1>
        </CardHeader>
        <Divider />
        <CardBody className="flex flex-col gap-10 p-10">
          <div className="flex flex-col gap-4">
            <h2>1. Odaberite Vaš spol</h2>
            <RadioGroup orientation="horizontal" className="ps-2 md:ps-6">
              <Radio className="me-2" value="male">
                Žensko
              </Radio>
              <Radio className="me-2" value="female">
                Muško
              </Radio>
            </RadioGroup>
          </div>
          <Divider />
          <div className="flex flex-col gap-4">
            <h2>2. Kakvog tipa je Vaše vlasište?</h2>
            <RadioGroup orientation="horizontal" className="ps-2 md:ps-6">
              <Radio className="me-2" value="dry">
                Vrlo suho
              </Radio>
              <Radio className="me-2" value="dry-normal">
                Suho-normalno
              </Radio>
              <Radio className="me-2" value="normal">
                Normalno
              </Radio>
              <Radio className="me-2" value="normal-oily">
                Normalno-masno
              </Radio>
              <Radio className="me-2" value="oily">
                Vrlo masno
              </Radio>
            </RadioGroup>
          </div>
          <Divider />
          <div className="flex flex-col gap-4">
            <h2>3. Koje dužine je Vaša kosa trenutno?</h2>
            <RadioGroup orientation="horizontal" className="ps-2 md:ps-6">
              <Radio className="me-2" value="short">
                Kratka
              </Radio>
              <Radio className="me-2" value="medium">
                Srednja
              </Radio>
              <Radio className="me-2" value="long">
                Duga
              </Radio>
            </RadioGroup>
          </div>
          <Divider />
          <div className="flex flex-col gap-4">
            <h2>4. Što najbolje opisuje Vaš tip kose?</h2>
            <RadioGroup orientation="horizontal" className="ps-2 md:ps-6">
              <Radio className="me-2" value="straight">
                Ravna
              </Radio>
              <Radio className="me-2" value="wavy">
                Valovita
              </Radio>
              <Radio className="me-2" value="curly">
                Frčkava
              </Radio>
            </RadioGroup>
            <span className="ps-2 md:ps-6 text-gray-500 italic font text-sm">
              *Kratkom kosom se smatra kosa do 10cm (do ušiju), srednja kosa
              10-25cm (do ramena), a duga kosa preko 25cm (ispod ramena).
            </span>
          </div>
          <Divider />
          <div className="flex flex-col gap-4">
            <h2>5. Je li Vaša kosa ikada bila tretirana?</h2>
            <CheckboxGroup orientation="horizontal" className="ps-2 md:ps-6">
              <Checkbox className="me-2 mb-2" value="0">
                Nikada nisam farbao/la kosu
              </Checkbox>
              <Checkbox className="me-2 mb-2" value="1">
                Farbao/la sam kosu farbama iz dućana
              </Checkbox>
              <Checkbox className="me-2 mb-2" value="2">
                Farbao/la sam kosu profesionalno u salonu
              </Checkbox>
              <Checkbox className="me-2 mb-2" value="3">
                Koristio/la sam blajh za kosu sam/sama
              </Checkbox>
              <Checkbox className="me-2 mb-2" value="4">
                Blajhao/la sam kosu profesionalno u salonu
              </Checkbox>
            </CheckboxGroup>
          </div>
          <Divider />
          <div className="flex flex-col gap-4">
            <h2>6. Koliko puta je Vaša kosa bila tretirana farbama/blajhom?</h2>
            <RadioGroup orientation="horizontal" className="ps-2 md:ps-6">
              <Radio className="me-2" value="0">
                Nikada
              </Radio>
              <Radio className="me-2" value="1">
                1-3 puta
              </Radio>
              <Radio className="me-2" value="2">
                3-6 puta
              </Radio>
              <Radio className="me-2" value="3">
                Više od 6 puta
              </Radio>
            </RadioGroup>
          </div>
          <Divider />
          <div className="flex flex-col gap-4">
            <h2>7. Koliko puta tjedno u prosjeku perete svoju kosu?</h2>
            <RadioGroup orientation="horizontal" className="ps-2 md:ps-6">
              <Radio className="me-2" value="0">
                1 put
              </Radio>
              <Radio className="me-2" value="1">
                2-3 puta
              </Radio>
              <Radio className="me-2" value="2">
                3-5 puta
              </Radio>
              <Radio className="me-2" value="3">
                Svaki dan
              </Radio>
            </RadioGroup>
          </div>
          <Divider />
          <div className="flex flex-col gap-4">
            <h2>
              8. Odaberite karakteristike koje najbolje opisuju Vaš tip kose.
            </h2>
            <CheckboxGroup orientation="horizontal" className="ps-2 md:ps-6">
              <Checkbox className="me-2 mb-2" value="0">
                Oštećeni i suhi vrhovi
              </Checkbox>
              <Checkbox className="me-2 mb-2" value="1">
                Sklona ispucalim vrhovima
              </Checkbox>
              <Checkbox className="me-2 mb-2" value="2">
                Masna
              </Checkbox>
              <Checkbox className="me-2 mb-2" value="3">
                Gusta
              </Checkbox>
              <Checkbox className="me-2 mb-2" value="4">
                Rijetka
              </Checkbox>
              <Checkbox className="me-2 mb-2" value="5">
                Tanka i slaba
              </Checkbox>
              <Checkbox className="me-2 mb-2" value="6">
                Slamnata
              </Checkbox>
              <Checkbox className="me-2 mb-2" value="7">
                Obojana
              </Checkbox>
              <Checkbox className="me-2 mb-2" value="8">
                Plava
              </Checkbox>
              <Checkbox className="me-2 mb-2" value="9">
                Normalna
              </Checkbox>
              <Checkbox className="me-2 mb-2" value="10">
                Bez volumena
              </Checkbox>
              <Checkbox className="me-2 mb-2" value="11">
                Sadrži perut
              </Checkbox>
              <Checkbox className="me-2 mb-2" value="12">
                Sijeda
              </Checkbox>
            </CheckboxGroup>
          </div>
          <Divider />
          <div className="flex flex-col gap-4">
            <h2>9. Koji je Vaš traženi proizvod?</h2>
            <CheckboxGroup orientation="horizontal" className="ps-2 md:ps-6">
              <Checkbox className="me-2 mb-2" value="0">
                Šampon
              </Checkbox>
              <Checkbox className="me-2 mb-2" value="1">
                Regenerator
              </Checkbox>
              <Checkbox className="me-2 mb-2" value="2">
                Tretman (maska, ulje, serum i ostalo)
              </Checkbox>
            </CheckboxGroup>
          </div>
          <Divider />
          <div className="flex flex-col gap-4">
            <h2>
              10. Koliko biste bili spremni platiti za traženi
              proizvod/proizvode?
            </h2>
            <CustomSlider />
          </div>
        </CardBody>
        <Divider />
        <CardFooter className="flex justify-end">
          <Button color="primary" auto size="lg">
            Pošalji
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
