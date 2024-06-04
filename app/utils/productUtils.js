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
  let filteredProducts = [];
  products.forEach((product) => {
    filteredProducts.push({ ...product, productScore: 0 });
  });
  // console.log("Filtered by price: ", products.length, products);

  if (data.hairType) {
    // Filtering by hair type
    filteredProducts.forEach((product) => {
      if (!product.hairTexture) {
        product.productScore += 0.5;
      } else {
        if (product.hairTexture[data?.hairType] === true) {
          if (data?.hairType !== "straight") {
            product.productScore += 2;
          } else {
            product.productScore += 1;
          }
        }
      }
    });
  }

  if (data?.hairCharacteristics && data?.hairCharacteristics.length > 0) {
    // Filtering by hair characteristics
    filteredProducts.forEach((product) => {
      if (!product.hairTypeCharacteristics) {
        product.productScore += 0.5;
      } else {
        if (
          product.hairTypeCharacteristics["damagedAndDriedEnds"] === true &&
          data.hairCharacteristics.includes("damagedDryEnds")
        ) {
          product.productScore += 2;
        }
        if (
          product.hairTypeCharacteristics["proneToSplitEnds"] === true &&
          data.hairCharacteristics.includes("splitEnds")
        ) {
          product.productScore += 2;
        }
        if (
          product.hairTypeCharacteristics["greasyHair"] === true &&
          data.hairCharacteristics.includes("oily")
        ) {
          product.productScore += 2;
        }
        if (
          product.hairTypeCharacteristics["thickHair"] === true &&
          data.hairCharacteristics.includes("thick")
        ) {
          product.productScore += 2;
        }
        if (
          product.hairTypeCharacteristics["thinHair"] === true &&
          data.hairCharacteristics.includes("thin")
        ) {
          product.productScore += 2;
        }
        if (
          product.hairTypeCharacteristics["thinAndWeakHair"] === true &&
          data.hairCharacteristics.includes("thinWeak")
        ) {
          product.productScore += 2;
        }
        if (
          product.hairTypeCharacteristics["strawHair"] === true &&
          data.hairCharacteristics.includes("strawLike")
        ) {
          product.productScore += 2;
        }
        if (
          product.hairTypeCharacteristics["coloredHair"] === true &&
          data.hairCharacteristics.includes("colored")
        ) {
          product.productScore += 2;
        }
        if (
          product.hairTypeCharacteristics["blondeHair"] === true &&
          data.hairCharacteristics.includes("blonde")
        ) {
          product.productScore += 2;
        }
        if (
          product.hairTypeCharacteristics["normalHair"] === true &&
          data.hairCharacteristics.includes("normal")
        ) {
          product.productScore += 2;
        }
        if (
          product.hairTypeCharacteristics["withoutVolume"] === true &&
          data.hairCharacteristics.includes("noVolume")
        ) {
          product.productScore += 2;
        }
        if (
          product.hairTypeCharacteristics["containsDandruff"] === true &&
          data.hairCharacteristics.includes("dandruff")
        ) {
          product.productScore += 2;
        }
        if (
          product.hairTypeCharacteristics["grayHair"] === true &&
          data.hairCharacteristics.includes("gray")
        ) {
          product.productScore += 2;
        }
      }
    });

    // filteredProducts = products.filter((product) => {
    //   if (!product.hairTypeCharacteristics) {
    //     return true;
    //   } else {
    //     if (
    //       product.hairTypeCharacteristics["damagedAndDriedEnds"] === true &&
    //       data.hairCharacteristics.includes("damagedDryEnds")
    //     ) {
    //       return true;
    //     }
    //     if (
    //       product.hairTypeCharacteristics["proneToSplitEnds"] === true &&
    //       data.hairCharacteristics.includes("splitEnds")
    //     ) {
    //       return true;
    //     }
    //     if (
    //       product.hairTypeCharacteristics["greasyHair"] === true &&
    //       data.hairCharacteristics.includes("oily")
    //     ) {
    //       return true;
    //     }
    //     if (
    //       product.hairTypeCharacteristics["thickHair"] === true &&
    //       data.hairCharacteristics.includes("thick")
    //     ) {
    //       return true;
    //     }
    //     if (
    //       product.hairTypeCharacteristics["thinHair"] === true &&
    //       data.hairCharacteristics.includes("thin")
    //     ) {
    //       return true;
    //     }
    //     if (
    //       product.hairTypeCharacteristics["thinAndWeakHair"] === true &&
    //       data.hairCharacteristics.includes("thinWeak")
    //     ) {
    //       return true;
    //     }
    //     if (
    //       product.hairTypeCharacteristics["strawHair"] === true &&
    //       data.hairCharacteristics.includes("strawLike")
    //     ) {
    //       return true;
    //     }
    //     if (
    //       product.hairTypeCharacteristics["coloredHair"] === true &&
    //       data.hairCharacteristics.includes("colored")
    //     ) {
    //       return true;
    //     }
    //     if (
    //       product.hairTypeCharacteristics["blondeHair"] === true &&
    //       data.hairCharacteristics.includes("blonde")
    //     ) {
    //       return true;
    //     }
    //     if (
    //       product.hairTypeCharacteristics["normalHair"] === true &&
    //       data.hairCharacteristics.includes("normal")
    //     ) {
    //       return true;
    //     }
    //     if (
    //       product.hairTypeCharacteristics["withoutVolume"] === true &&
    //       data.hairCharacteristics.includes("noVolume")
    //     ) {
    //       return true;
    //     }
    //     if (
    //       product.hairTypeCharacteristics["containsDandruff"] === true &&
    //       data.hairCharacteristics.includes("dandruff")
    //     ) {
    //       return true;
    //     }
    //     if (
    //       product.hairTypeCharacteristics["grayHair"] === true &&
    //       data.hairCharacteristics.includes("gray")
    //     ) {
    //       return true;
    //     }
    //   }
    //   return false;
    // });
  }
  if (data?.hairTreatment && data.hairTreatment.length > 0) {
    // Filtering by hair treatment
    filteredProducts.forEach((product) => {
      if (!product.hairTreatment) {
        product.productScore += 0.5;
      } else {
        if (
          product.hairTreatment["neverDyed"] === true &&
          data.hairTreatment.includes("neverDyed")
        ) {
          product.productScore += 1;
        }
        if (
          product.hairTreatment["dyedWithStoreBoughtDyes"] === true &&
          data.hairTreatment.includes("dyedWithStoreBoughtDyes")
        ) {
          product.productScore += 1;
        }
        if (
          product.hairTreatment["professionallyDyedInSalon"] === true &&
          data.hairTreatment.includes("professionallyDyedInSalon")
        ) {
          product.productScore += 1;
        }
        if (
          product.hairTreatment["selfBleached"] === true &&
          data.hairTreatment.includes("selfBleached")
        ) {
          product.productScore += 1;
        }
        if (
          product.hairTreatment["professionallyBleachedInSalon"] === true &&
          data.hairTreatment.includes("professionallyBleachedInSalon")
        ) {
          product.productScore += 1;
        }
      }
    });
    // products = products.filter((product) => {
    //   if (!product.hairTreatment) {
    //     return true;
    //   } else {
    //     if (
    //       product.hairTreatment["neverDyed"] === true &&
    //       data.hairTreatment.includes("neverDyed")
    //     ) {
    //       return true;
    //     }
    //     if (
    //       product.hairTreatment["dyedWithStoreBoughtDyes"] === true &&
    //       data.hairTreatment.includes("dyedWithStoreBoughtDyes")
    //     ) {
    //       return true;
    //     }
    //     if (
    //       product.hairTreatment["professionallyDyedInSalon"] === true &&
    //       data.hairTreatment.includes("professionallyDyedInSalon")
    //     ) {
    //       return true;
    //     }
    //     if (
    //       product.hairTreatment["selfBleached"] === true &&
    //       data.hairTreatment.includes("selfBleached")
    //     ) {
    //       return true;
    //     }
    //     if (
    //       product.hairTreatment["professionallyBleachedInSalon"] === true &&
    //       data.hairTreatment.includes("professionallyBleachedInSalon")
    //     ) {
    //       return true;
    //     }
    //   }
    //   return false;
    // });
  }
  if (data?.scalpType !== null) {
    // Filtering by scalp type
    filteredProducts.forEach((product) => {
      if (!product.scalpType) {
        product.productScore += 0.5;
      } else {
        if (product.scalpType[data?.scalpType] === true) {
          product.productScore += 1;
        }
      }
    });
    // products = products.filter((product) => {
    //   if (!product.scalpType) {
    //     return true;
    //   } else {
    //     if (product.scalpType[data.scalpType] === true) {
    //       return true;
    //     }
    //   }
    //   return false;
    // });
  }

  if (data?.hairLength !== null) {
    // Filtering by hair length
    filteredProducts.forEach((product) => {
      if (!product.hairLength) {
        product.productScore += 0.5;
      } else {
        if (
          product.hairLength["short"] === true &&
          data.hairLength === "short"
        ) {
          product.productScore += 1;
        }
        if (
          product.hairLength["medium"] === true &&
          data.hairLength === "medium"
        ) {
          product.productScore += 1;
        }
        if (product.hairLength["long"] === true && data.hairLength === "long") {
          product.productScore += 1;
        }
      }
    });
    // products = products.filter((product) => {
    //   if (!product.hairLength) {
    //     return true;
    //   } else {
    //     if (
    //       product.hairLength["short"] === true &&
    //       data.hairLength === "short"
    //     ) {
    //       return true;
    //     }
    //     if (
    //       product.hairLength["medium"] === true &&
    //       data.hairLength === "medium"
    //     ) {
    //       return true;
    //     }
    //     if (product.hairLength["long"] === true && data.hairLength === "long") {
    //       return true;
    //     }
    //   }
    //   return false;
    // });
  }

  // Filtering by treatment frequency
  if (data?.treatmentFrequency !== null) {
    filteredProducts.forEach((product) => {
      if (!product.hairTreatmentFrequency) {
        product.productScore += 0.5;
      } else {
        if (
          product.hairTreatmentFrequency["never"] === true &&
          data.treatmentFrequency === "never"
        ) {
          product.productScore += 1;
        }
        if (
          product.hairTreatmentFrequency["oneToThreeTimes"] === true &&
          data.treatmentFrequency === "1-3 times"
        ) {
          product.productScore += 1;
        }
        if (
          product.hairTreatmentFrequency["threeToSixTimes"] === true &&
          data.treatmentFrequency === "3-6 times"
        ) {
          product.productScore += 1;
        }
        if (
          product.hairTreatmentFrequency["moreThanSixTimes"] === true &&
          data.treatmentFrequency === "more than 6 times"
        ) {
          product.productScore += 1;
        }
      }
    });
    // products = products.filter((product) => {
    //   if (!product.hairTreatmentFrequency) {
    //     return true;
    //   } else {
    //     if (
    //       product.hairTreatmentFrequency["never"] === true &&
    //       data.treatmentFrequency === "never"
    //     ) {
    //       return true;
    //     }
    //     if (
    //       product.hairTreatmentFrequency["oneToThreeTimes"] === true &&
    //       data.treatmentFrequency === "1-3 times"
    //     ) {
    //       return true;
    //     }
    //     if (
    //       product.hairTreatmentFrequency["threeToSixTimes"] === true &&
    //       data.treatmentFrequency === "3-6 times"
    //     ) {
    //       return true;
    //     }
    //     if (
    //       product.hairTreatmentFrequency["moreThanSixTimes"] === true &&
    //       data.treatmentFrequency === "more than 6 times"
    //     ) {
    //       return true;
    //     }
    //   }
    //   return false;
    // });
  }

  if (data?.washFrequency !== null) {
    // Filtering by wash frequency

    filteredProducts.forEach((product) => {
      if (!product.hairWashFrequency) {
        product.productScore += 0.5;
      } else {
        if (
          product.hairWashFrequency["once"] === true &&
          data.washFrequency === "1 time"
        ) {
          product.productScore += 1;
        }
        if (
          product.hairWashFrequency["twoToThreeTimes"] === true &&
          data.washFrequency === "2-3 times"
        ) {
          product.productScore += 1;
        }
        if (
          product.hairWashFrequency["threeToFiveTimes"] === true &&
          data.washFrequency === "3-5 times"
        ) {
          product.productScore += 1;
        }
        if (
          product.hairWashFrequency["everyDay"] === true &&
          data.washFrequency === "every day"
        ) {
          product.productScore += 1;
        }
      }
    });
    // products = products.filter((product) => {
    //   if (!product.hairWashFrequency) {
    //     return true;
    //   } else {
    //     if (
    //       product.hairWashFrequency["once"] === true &&
    //       data.washFrequency === "1 time"
    //     ) {
    //       return true;
    //     }
    //     if (
    //       product.hairWashFrequency["twoToThreeTimes"] === true &&
    //       data.washFrequency === "2-3 times"
    //     ) {
    //       return true;
    //     }
    //     if (
    //       product.hairWashFrequency["threeToFiveTimes"] === true &&
    //       data.washFrequency === "3-5 times"
    //     ) {
    //       return true;
    //     }
    //     if (
    //       product.hairWashFrequency["everyDay"] === true &&
    //       data.washFrequency === "every day"
    //     ) {
    //       return true;
    //     }
    //   }
    //   return false;
    // });
  }
  let productWithHighestScore = filteredProducts.reduce((prev, current) =>
    prev.productScore > current.productScore ? prev : current
  );
  let TwoProductsWithHighestScore = filteredProducts
    .sort((a, b) => b.productScore - a.productScore)
    .slice(0, 2);
  console.log("TwoProductsWithHighestScore: ", TwoProductsWithHighestScore);
  // console.log("productWithHighestScore: ", productWithHighestScore);
  // console.log("newProd: ", filteredProducts);
  return TwoProductsWithHighestScore;
};

export { filterProducts };
