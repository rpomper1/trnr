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
  RadioGroup,
  Slider,
  Spinner
} from "@nextui-org/react";
import { Form, useActionData } from "@remix-run/react";
import { useEffect, useRef, useState } from "react";
import Product from "~/components/Product";
import { filterProducts } from "~/utils/productUtils";
export const meta = () => {
  return [
    { title: "Henkel" },
    { name: "description", content: "Welcome to Henkel!" }
  ];
};

export async function action({ request }) {
  const formData = await request.formData();
  const data = {
    gender: formData.get("gender") || null,
    scalpType: formData.get("scalpType") || null,
    hairLength: formData.get("hairLength") || null,
    hairType: formData.get("hairType") || null,
    hairTreatment: formData.getAll("hairTreatment") || null,
    treatmentFrequency: formData.get("treatmentFrequency") || null,
    washFrequency: formData.get("washFrequency") || null,
    hairCharacteristics: formData.getAll("hairCharacteristics") || null,
    maxPrice: parseFloat(formData.get("maxPrice")) || 10
  };

  console.log("formData", data);
  const products = filterProducts(data);

  return products;
}

export default function Index() {
  const products = useActionData();
  const [isLoading, setIsLoading] = useState(null);
  const productWrapperRef = useRef(null);

  useEffect(() => {
    if (isLoading === false) {
      productWrapperRef.current.scrollIntoView({
        behavior: "smooth"
      });
    }
  }, [isLoading]);

  console.log("products", products);
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
        <Form method="post" action="">
          <CardBody className="flex flex-col gap-10 p-10">
            <div className="flex flex-col gap-4">
              <h2>
                1. Odaberite Vaš spol.
                <span className="text-red-600 font-bold ms-1 text-xl">*</span>
              </h2>
              <RadioGroup
                name="gender"
                orientation="horizontal"
                className="ps-2 md:ps-6"
              >
                <Radio className="me-2" value="F">
                  Žensko
                </Radio>
                <Radio className="me-2" value="M">
                  Muško
                </Radio>
              </RadioGroup>
            </div>
            <Divider />
            <div className="flex flex-col gap-4">
              <h2>
                2. Kakvog tipa je Vaše vlasište?
                <span className="text-red-600 font-bold ms-1 text-xl">*</span>
              </h2>
              <RadioGroup
                name="scalpType"
                orientation="horizontal"
                className="ps-2 md:ps-6"
              >
                <Radio className="me-2" value="veryDry">
                  Vrlo suho
                </Radio>
                <Radio className="me-2" value="dryToNormal">
                  Suho-normalno
                </Radio>
                <Radio className="me-2" value="normal">
                  Normalno
                </Radio>
                <Radio className="me-2" value="normalToGreasy">
                  Normalno-masno
                </Radio>
                <Radio className="me-2" value="veryGreasy">
                  Vrlo masno
                </Radio>
              </RadioGroup>
            </div>
            <Divider />
            <div className="flex flex-col gap-4">
              <h2>
                3. Koje dužine je Vaša kosa trenutno?
                <span className="text-red-600 font-bold ms-1 text-xl">*</span>
              </h2>
              <RadioGroup
                name="hairLength"
                orientation="horizontal"
                className="ps-2 md:ps-6"
              >
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
              <span className="ps-2 md:ps-6 text-gray-500 italic font text-sm">
                *Kratkom kosom se smatra kosa do 10cm (do ušiju), srednja kosa
                10-25cm (do ramena), a duga kosa preko 25cm (ispod ramena).
              </span>
            </div>
            <Divider />
            <div className="flex flex-col gap-4">
              <h2>
                4. Što najbolje opisuje Vaš tip kose?
                <span className="text-red-600 font-bold ms-1 text-xl">*</span>
              </h2>
              <RadioGroup
                name="hairType"
                orientation="horizontal"
                className="ps-2 md:ps-6"
              >
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
            </div>
            <Divider />
            <div className="flex flex-col gap-4">
              <h2>
                5. Je li Vaša kosa ikada bila tretirana?
                <span className="text-red-600 font-bold ms-1 text-xl">*</span>
              </h2>
              <CheckboxGroup
                name="hairTreatment"
                orientation="horizontal"
                className="ps-2 md:ps-6"
              >
                <Checkbox className="me-2 mb-2" value="neverDyed">
                  Nikada nisam farbao/la kosu
                </Checkbox>
                <Checkbox className="me-2 mb-2" value="dyedWithStoreBoughtDyes">
                  Farbao/la sam kosu farbama iz dućana
                </Checkbox>
                <Checkbox
                  className="me-2 mb-2"
                  value="professionallyDyedInSalon"
                >
                  Farbao/la sam kosu profesionalno u salonu
                </Checkbox>
                <Checkbox className="me-2 mb-2" value="selfBleached">
                  Koristio/la sam blajh za kosu sam/sama
                </Checkbox>
                <Checkbox
                  className="me-2 mb-2"
                  value="professionallyBleachedInSalon"
                >
                  Blajhao/la sam kosu profesionalno u salonu
                </Checkbox>
              </CheckboxGroup>
            </div>
            <Divider />
            <div className="flex flex-col gap-4">
              <h2>
                6. Koliko puta je Vaša kosa bila tretirana farbama/blajhom?
                <span className="text-red-600 font-bold ms-1 text-xl">*</span>
              </h2>
              <RadioGroup
                name="treatmentFrequency"
                orientation="horizontal"
                className="ps-2 md:ps-6"
              >
                <Radio className="me-2" value="never">
                  Nikada
                </Radio>
                <Radio className="me-2" value="1-3 times">
                  1-3 puta
                </Radio>
                <Radio className="me-2" value="3-6 times">
                  3-6 puta
                </Radio>
                <Radio className="me-2" value="more than 6 times">
                  Više od 6 puta
                </Radio>
              </RadioGroup>
            </div>
            <Divider />
            <div className="flex flex-col gap-4">
              <h2>
                7. Koliko puta tjedno u prosjeku perete svoju kosu?
                <span className="text-red-600 font-bold ms-1 text-xl">*</span>
              </h2>
              <RadioGroup
                name="washFrequency"
                orientation="horizontal"
                className="ps-2 md:ps-6"
              >
                <Radio className="me-2" value="1 time">
                  1 put
                </Radio>
                <Radio className="me-2" value="2-3 times">
                  2-3 puta
                </Radio>
                <Radio className="me-2" value="3-5 times">
                  3-5 puta
                </Radio>
                <Radio className="me-2" value="every day">
                  Svaki dan
                </Radio>
              </RadioGroup>
            </div>
            <Divider />
            <div className="flex flex-col gap-4">
              <h2>
                8. Odaberite karakteristike koje najbolje opisuju Vaš tip kose.
                <span className="text-red-600 font-bold ms-1 text-xl">*</span>
              </h2>
              <CheckboxGroup
                name="hairCharacteristics"
                orientation="horizontal"
                className="ps-2 md:ps-6"
              >
                <Checkbox className="me-2 mb-2" value="damagedDryEnds">
                  Oštećeni i suhi vrhovi
                </Checkbox>
                <Checkbox className="me-2 mb-2" value="splitEnds">
                  Sklona ispucalim vrhovima
                </Checkbox>
                <Checkbox className="me-2 mb-2" value="oily">
                  Masna
                </Checkbox>
                <Checkbox className="me-2 mb-2" value="thick">
                  Gusta
                </Checkbox>
                <Checkbox className="me-2 mb-2" value="thin">
                  Rijetka
                </Checkbox>
                <Checkbox className="me-2 mb-2" value="thinWeak">
                  Tanka i slaba
                </Checkbox>
                <Checkbox className="me-2 mb-2" value="strawLike">
                  Slamnata
                </Checkbox>
                <Checkbox className="me-2 mb-2" value="colored">
                  Obojana
                </Checkbox>
                <Checkbox className="me-2 mb-2" value="blonde">
                  Plava
                </Checkbox>
                <Checkbox className="me-2 mb-2" value="normal">
                  Normalna
                </Checkbox>
                <Checkbox className="me-2 mb-2" value="noVolume">
                  Bez volumena
                </Checkbox>
                <Checkbox className="me-2 mb-2" value="dandruff">
                  Sadrži perut
                </Checkbox>
                <Checkbox className="me-2 mb-2" value="gray">
                  Sijeda
                </Checkbox>
              </CheckboxGroup>
            </div>
            <Divider />
            <div className="flex flex-col gap-4">
              <h2>
                9. Koliko biste bili spremni platiti za traženi
                proizvod/proizvode?
                <span className="text-red-600 font-bold ms-1 text-xl">*</span>
              </h2>
              <Slider
                label="Maksimalna cijena"
                aria-label="Price range"
                showTooltip={true}
                formatOptions={{ style: "currency", currency: "EUR" }}
                tooltipValueFormatOptions={{
                  style: "currency",
                  currency: "EUR"
                }}
                step={0.5}
                maxValue={10}
                minValue={0.5}
                defaultValue={10}
                className="max-w-md"
                name="maxPrice"
              />
            </div>
          </CardBody>
          <Divider />
          <CardFooter className="flex justify-end">
            <Button
              color="primary"
              auto
              size="lg"
              type="submit"
              onClick={() => {
                setIsLoading(true);
                setTimeout(() => {
                  setIsLoading(false);
                }, 2000);
              }}
            >
              {isLoading ? <Spinner color="default" /> : "Pošalji"}
            </Button>
          </CardFooter>
        </Form>
      </Card>
      <div
        id="products-wrapper"
        className="flex justify-center"
        ref={productWrapperRef}
      >
        {isLoading ? null : (
          <>
            {products && products.length > 0 && (
              <Card className="p-2 my-2 min-h-[100vh]">
                <CardHeader>
                  <h1 className="text-2xl font-semibold">
                    Naši preporučeni proizvodi
                  </h1>
                </CardHeader>
                <CardBody className="mt-2">
                  {products.map((item) => (
                    <Product key={item.id} product={item} className="my-5" />
                  ))}
                </CardBody>
              </Card>
            )}
          </>
        )}
      </div>
    </div>
  );
}
