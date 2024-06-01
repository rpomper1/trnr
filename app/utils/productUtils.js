import henkel_products from "~/data";

const filterProducts = (data) => {
  let products = henkel_products;

  // Filtering by gender
  if (data?.gender) {
    products = products.filter((product) => {
      return product.gender === data.gender;
    });
  }
  console.log("Filtered by gender: ", products.length, products);

  // Filtering by price
  if (data?.maxPrice) {
    products = products.filter((product) => {
      return product.price <= data.maxPrice;
    });
  }

  console.log("Filtered by price: ", products.length, products);

  if (data.hairType) {
    // Filtering by hair type
    let tempArr = [];
    products.forEach((product) => {
      if (!product.hairTexture) {
        tempArr.push(product);
      } else {
        if (product.hairTexture[data?.hairType] === true) {
          tempArr.push(product);
        }
      }
    });
    products = tempArr;
  }
  console.log(
    data?.hairCharacteristics && data?.hairCharacteristics.length > 0
  );
  if (data?.hairCharacteristics && data?.hairCharacteristics.length > 0) {
    // Filtering by hair characteristics
    products = products.filter((product) => {
      if (!product.hairTypeCharacteristics) {
        return true;
      } else {
        if (
          product.hairTypeCharacteristics["damagedAndDriedEnds"] === true &&
          data.hairCharacteristics.includes("damagedDryEnds")
        ) {
          return true;
        }
        if (
          product.hairTypeCharacteristics["proneToSplitEnds"] === true &&
          data.hairCharacteristics.includes("splitEnds")
        ) {
          return true;
        }
        if (
          product.hairTypeCharacteristics["greasyHair"] === true &&
          data.hairCharacteristics.includes("oily")
        ) {
          return true;
        }
        if (
          product.hairTypeCharacteristics["thickHair"] === true &&
          data.hairCharacteristics.includes("thick")
        ) {
          return true;
        }
        if (
          product.hairTypeCharacteristics["thinHair"] === true &&
          data.hairCharacteristics.includes("thin")
        ) {
          return true;
        }
        if (
          product.hairTypeCharacteristics["thinAndWeakHair"] === true &&
          data.hairCharacteristics.includes("thinWeak")
        ) {
          return true;
        }
        if (
          product.hairTypeCharacteristics["strawHair"] === true &&
          data.hairCharacteristics.includes("strawLike")
        ) {
          return true;
        }
        if (
          product.hairTypeCharacteristics["coloredHair"] === true &&
          data.hairCharacteristics.includes("colored")
        ) {
          return true;
        }
        if (
          product.hairTypeCharacteristics["blondeHair"] === true &&
          data.hairCharacteristics.includes("blonde")
        ) {
          return true;
        }
        if (
          product.hairTypeCharacteristics["normalHair"] === true &&
          data.hairCharacteristics.includes("normal")
        ) {
          return true;
        }
        if (
          product.hairTypeCharacteristics["withoutVolume"] === true &&
          data.hairCharacteristics.includes("noVolume")
        ) {
          return true;
        }
        if (
          product.hairTypeCharacteristics["containsDandruff"] === true &&
          data.hairCharacteristics.includes("dandruff")
        ) {
          return true;
        }
        if (
          product.hairTypeCharacteristics["grayHair"] === true &&
          data.hairCharacteristics.includes("gray")
        ) {
          return true;
        }
      }
      return false;
    });
  }
  console.log(data?.hairTreatment && data.hairTreatment.length > 0);
  if (data?.hairTreatment && data.hairTreatment.length > 0) {
    // Filtering by hair treatment
    products = products.filter((product) => {
      if (!product.hairTreatment) {
        return true;
      } else {
        if (
          product.hairTreatment["neverDyed"] === true &&
          data.hairTreatment.includes("neverDyed")
        ) {
          return true;
        }
        if (
          product.hairTreatment["dyedWithStoreBoughtDyes"] === true &&
          data.hairTreatment.includes("dyedWithStoreBoughtDyes")
        ) {
          return true;
        }
        if (
          product.hairTreatment["professionallyDyedInSalon"] === true &&
          data.hairTreatment.includes("professionallyDyedInSalon")
        ) {
          return true;
        }
        if (
          product.hairTreatment["selfBleached"] === true &&
          data.hairTreatment.includes("selfBleached")
        ) {
          return true;
        }
        if (
          product.hairTreatment["professionallyBleachedInSalon"] === true &&
          data.hairTreatment.includes("professionallyBleachedInSalon")
        ) {
          return true;
        }
      }
      return false;
    });
  }
  console.log(data?.scalpType !== null);
  if (data?.scalpType !== null) {
    // Filtering by scalp type
    products = products.filter((product) => {
      if (!product.scalpType) {
        return true;
      } else {
        if (product.scalpType[data.scalpType] === true) {
          return true;
        }
      }
      return false;
    });
  }

  console.log(data?.hairLength !== null);
  if (data?.hairLength !== null) {
    // Filtering by hair length
    products = products.filter((product) => {
      if (!product.hairLength) {
        return true;
      } else {
        if (
          product.hairLength["short"] === true &&
          data.hairLength === "short"
        ) {
          return true;
        }
        if (
          product.hairLength["medium"] === true &&
          data.hairLength === "medium"
        ) {
          return true;
        }
        if (product.hairLength["long"] === true && data.hairLength === "long") {
          return true;
        }
      }
      return false;
    });
  }

  console.log(data?.treatmentFrequency !== null);
  // Filtering by treatment frequency
  if (data?.treatmentFrequency !== null) {
    products = products.filter((product) => {
      if (!product.hairTreatmentFrequency) {
        return true;
      } else {
        if (
          product.hairTreatmentFrequency["never"] === true &&
          data.treatmentFrequency === "never"
        ) {
          return true;
        }
        if (
          product.hairTreatmentFrequency["oneToThreeTimes"] === true &&
          data.treatmentFrequency === "1-3 times"
        ) {
          return true;
        }
        if (
          product.hairTreatmentFrequency["threeToSixTimes"] === true &&
          data.treatmentFrequency === "3-6 times"
        ) {
          return true;
        }
        if (
          product.hairTreatmentFrequency["moreThanSixTimes"] === true &&
          data.treatmentFrequency === "more than 6 times"
        ) {
          return true;
        }
      }
      return false;
    });
  }

  console.log(data?.washFrequency !== null);
  if (data?.washFrequency !== null) {
    // Filtering by wash frequency
    products = products.filter((product) => {
      if (!product.hairWashFrequency) {
        return true;
      } else {
        if (
          product.hairWashFrequency["once"] === true &&
          data.washFrequency === "1 time"
        ) {
          return true;
        }
        if (
          product.hairWashFrequency["twoToThreeTimes"] === true &&
          data.washFrequency === "2-3 times"
        ) {
          return true;
        }
        if (
          product.hairWashFrequency["threeToFiveTimes"] === true &&
          data.washFrequency === "3-5 times"
        ) {
          return true;
        }
        if (
          product.hairWashFrequency["everyDay"] === true &&
          data.washFrequency === "every day"
        ) {
          return true;
        }
      }
      return false;
    });
  }
  return products;
};

export { filterProducts };
