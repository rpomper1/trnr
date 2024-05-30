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
  Slider
} from "@nextui-org/react";
import { Form, useActionData } from "@remix-run/react";
import Product from "~/components/Product";
import henkel_products from "~/data";
export const meta = () => {
  return [
    { title: "Henkel" },
    { name: "description", content: "Welcome to Henkel!" }
  ];
};

export async function action({ request }) {
  debugger;
  const formData = await request.formData();
  console.log("formData", formData);
  console.log("formData.entries", formData.get("hairTreatment"));
  const data = Object.fromEntries(formData);
  console.log("formData", data);
  let products;

  // Filtering by gender
  products = henkel_products.filter((product) => {
    return product.gender === data.gender;
  });

  // Filtering by price
  products = products.filter((product) => {
    return product.price <= data.maxPrice;
  });
  if (data?.scalpType) {
    // Filtering by scalp type
    products = products.filter((product) => {
      if (!product.scalpType) {
        return true;
      } else {
        if (product.scalpType["veryDry"] && data.scalpType === "dry") {
          return true;
        }
        if (
          product.scalpType["dryToNormal"] &&
          data.scalpType === "dry-normal"
        ) {
          return true;
        }
        if (product.scalpType["normal"] && data.scalpType === "normal") {
          return true;
        }
        if (
          product.scalpType["normalToGreasy"] &&
          data.scalpType === "normal-oily"
        ) {
          return true;
        }
        if (product.scalpType["veryGreasy"] && data.scalpType === "oily") {
          return true;
        }
      }
      return false;
    });
  }

  if (data?.hairLength) {
    // Filtering by hair length
    products = products.filter((product) => {
      if (!product.hairLength) {
        return true;
      } else {
        if (product.hairLength["short"] && data.hairLength === "short") {
          return true;
        }
        if (product.hairLength["medium"] && data.hairLength === "medium") {
          return true;
        }
        if (product.hairLength["long"] && data.hairLength === "long") {
          return true;
        }
      }
      return false;
    });
  }

  if (data?.hairLength) {
    // Filtering by hair type
    products = products.filter((product) => {
      if (!product.hairType) {
        return true;
      } else {
        if (product.hairTexture["straight"] && data.hairType === "straight") {
          return true;
        }
        if (product.hairTexture["wavy"] && data.hairType === "wavy") {
          return true;
        }
        if (product.hairTexture["curly"] && data.hairType === "curly") {
          return true;
        }
      }
      return false;
    });
  }

  // Filtering by hair treatment
  // products = products.filter((product) => {
  //   if (!product.hairTreatment) {
  //     return true;
  //   } else {
  //     if (
  //       product.hairTreatment["neverDyed"] &&
  //       data.hairTreatment.includes("neverDyed")
  //     ) {
  //       return true;
  //     }
  //     if (
  //       product.hairTreatment["dyedWithStoreBoughtDyes"] &&
  //       data.hairTreatment.includes("dyedWithStoreBoughtDyes")
  //     ) {
  //       return true;
  //     }
  //     if (
  //       product.hairTreatment["professionallyDyedInSalon"] &&
  //       data.hairTreatment.includes("professionallyDyedInSalon")
  //     ) {
  //       return true;
  //     }
  //     if (
  //       product.hairTreatment["selfBleached"] &&
  //       data.hairTreatment.includes("selfBleached")
  //     ) {
  //       return true;
  //     }
  //     if (
  //       product.hairTreatment["professionallyBleachedInSalon"] &&
  //       data.hairTreatment.includes("professionallyBleachedInSalon")
  //     ) {
  //       return true;
  //     }
  //   }
  //   return false;
  // });

  // Filtering by treatment frequency
  if (data?.treatmentFrequency) {
    products = products.filter((product) => {
      if (!product.hairTreatmentFrequency) {
        return true;
      } else {
        if (
          product.hairTreatmentFrequency["never"] &&
          data.treatmentFrequency === "never"
        ) {
          return true;
        }
        if (
          product.hairTreatmentFrequency["oneToThreeTimes"] &&
          data.treatmentFrequency === "1-3 times"
        ) {
          return true;
        }
        if (
          product.hairTreatmentFrequency["threeToSixTimes"] &&
          data.treatmentFrequency === "3-6 times"
        ) {
          return true;
        }
        if (
          product.hairTreatmentFrequency["moreThanSixTimes"] &&
          data.treatmentFrequency === "more than 6 times"
        ) {
          return true;
        }
      }
      return false;
    });
  }

  if (data?.washFrequency) {
    // Filtering by wash frequency
    products = products.filter((product) => {
      if (!product.hairWashFrequency) {
        return true;
      } else {
        if (
          product.hairWashFrequency["once"] &&
          data.washFrequency === "1 time"
        ) {
          return true;
        }
        if (
          product.hairWashFrequency["twoToThreeTimes"] &&
          data.washFrequency === "2-3 times"
        ) {
          return true;
        }
        if (
          product.hairWashFrequency["threeToFiveTimes"] &&
          data.washFrequency === "3-5 times"
        ) {
          return true;
        }
        if (
          product.hairWashFrequency["everyDay"] &&
          data.washFrequency === "every day"
        ) {
          return true;
        }
      }
      return false;
    });
  }

  // Filtering by hair characteristics
  // products = products.filter((product) => {
  //   if (!product.hairTypeCharacteristics) {
  //     return true;
  //   } else {
  //     if (
  //       product.hairTypeCharacteristics["damagedDryEnds"] &&
  //       data.hairCharacteristics.includes("damagedDryEnds")
  //     ) {
  //       return true;
  //     }
  //     if (
  //       product.hairTypeCharacteristics["splitEnds"] &&
  //       data.hairCharacteristics.includes("splitEnds")
  //     ) {
  //       return true;
  //     }
  //     if (
  //       product.hairTypeCharacteristics["oily"] &&
  //       data.hairCharacteristics.includes("oily")
  //     ) {
  //       return true;
  //     }
  //     if (
  //       product.hairTypeCharacteristics["thick"] &&
  //       data.hairCharacteristics.includes("thick")
  //     ) {
  //       return true;
  //     }
  //     if (
  //       product.hairTypeCharacteristics["thin"] &&
  //       data.hairCharacteristics.includes("thin")
  //     ) {
  //       return true;
  //     }
  //     if (
  //       product.hairTypeCharacteristics["thinWeak"] &&
  //       data.hairCharacteristics.includes("thinWeak")
  //     ) {
  //       return true;
  //     }
  //     if (
  //       product.hairTypeCharacteristics["strawLike"] &&
  //       data.hairCharacteristics.includes("strawLike")
  //     ) {
  //       return true;
  //     }
  //     if (
  //       product.hairTypeCharacteristics["colored"] &&
  //       data.hairCharacteristics.includes("colored")
  //     ) {
  //       return true;
  //     }
  //     if (
  //       product.hairTypeCharacteristics["blonde"] &&
  //       data.hairCharacteristics.includes("blonde")
  //     ) {
  //       return true;
  //     }
  //     if (
  //       product.hairTypeCharacteristics["normal"] &&
  //       data.hairCharacteristics.includes("normal")
  //     ) {
  //       return true;
  //     }
  //     if (
  //       product.hairTypeCharacteristics["noVolume"] &&
  //       data.hairCharacteristics.includes("noVolume")
  //     ) {
  //       return true;
  //     }
  //     if (
  //       product.hairTypeCharacteristics["dandruff"] &&
  //       data.hairCharacteristics.includes("dandruff")
  //     ) {
  //       return true;
  //     }
  //     if (
  //       product.hairTypeCharacteristics["gray"] &&
  //       data.hairCharacteristics.includes("gray")
  //     ) {
  //       return true;
  //     }
  //   }
  //   return false;
  // });

  return products;
}

export default function Index() {
  const products = useActionData();
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
              <h2>1. Odaberite Vaš spol</h2>
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
              <h2>2. Kakvog tipa je Vaše vlasište?</h2>
              <RadioGroup
                name="scalpType"
                orientation="horizontal"
                className="ps-2 md:ps-6"
              >
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
              <h2>4. Što najbolje opisuje Vaš tip kose?</h2>
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
              <h2>5. Je li Vaša kosa ikada bila tretirana?</h2>
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
              <h2>7. Koliko puta tjedno u prosjeku perete svoju kosu?</h2>
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
                10. Koliko biste bili spremni platiti za traženi
                proizvod/proizvode?
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
            <Button color="primary" auto size="lg" type="submit">
              Pošalji
            </Button>
          </CardFooter>
        </Form>
      </Card>
      {products && products.length > 0 && (
        <Card className="p-2 my-2">
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
    </div>
  );
}
