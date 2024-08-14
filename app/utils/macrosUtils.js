const calculateMacros = (age, gender, weight, height, activityLevel, goal) => {
  let gramProtein;
  if (activityLevel === "sedentary" || activityLevel === "lightly_active") {
    gramProtein = 1.5;
  } else if (activityLevel === "moderately_active") {
    gramProtein = 1.8;
  } else {
    gramProtein = 2;
  }

  if (goal === "lose_weight") {
    gramProtein += 0.2;
  }

  let idealFatWeight = height - 100;
  let idealProteinWeight;
  let gramFat;

  if (gender === "M") {
    idealProteinWeight = height - 80;
    gramFat = 0.8;
  } else {
    idealProteinWeight = height - 90;
    gramFat = 1;
  }

  let speedFactor = 0;
  if (goal !== "maintain_weight") {
    let speed = goal === "gain_muscle" ? 0.4 : 0.4; // Default speed set for now, you can modify as needed
    speedFactor = weight * speed * 10;
  }

  let dailyChangeFat = speedFactor * 0.713 * 0.87 * 9;
  let dailyChangeLeanMass = speedFactor * 0.287 * 0.3 * 4;
  let change = (dailyChangeFat + dailyChangeLeanMass) / 7;

  let BMR = 66.5 + 13.75 * weight + 5.003 * height - 6.775 * age;
  if (gender === "F") {
    BMR = 655.1 + 9.563 * weight + 1.85 * height - 4.676 * age;
  }

  switch (activityLevel) {
    case "sedentary":
      BMR *= 1.15;
      break;
    case "lightly_active":
      BMR *= 1.275;
      break;
    case "moderately_active":
      BMR *= 1.4;
      break;
    case "very_active":
      BMR *= 1.525;
      break;
    case "super_active":
      BMR *= 1.65;
      break;
  }

  if (goal === "gain_muscle") {
    BMR += change;
  } else if (goal === "lose_weight") {
    BMR -= change;
  }

  let targetCalories = Math.floor(BMR);

  let targetFatGrams = Math.floor(idealFatWeight * gramFat);
  let targetProteinGrams = Math.floor(idealProteinWeight * gramProtein);
  let targetFat = targetFatGrams * 9;
  let targetProtein = targetProteinGrams * 4;
  let targetCarbs = Math.floor(
    (targetCalories - targetFat - targetProtein) / 4
  );

  return {
    targetProtein: targetProteinGrams,
    targetCarbs: targetCarbs,
    targetFats: targetFatGrams,
    targetCalories: targetCalories
  };
};

export { calculateMacros };
