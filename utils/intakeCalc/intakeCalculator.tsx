type WaterIntakeRecommendation = {
  ml: number;
  glasses: number;
};

export function getRecommendedWaterIntake(age: number, weightKg: number): WaterIntakeRecommendation {
  if (age <= 0 || weightKg <= 0) {
    throw new Error("Please enter valid age and weight.");
  }

  const intakePerKg = age < 14 ? 40 : 35;
  let totalMl = Math.round(weightKg * intakePerKg);

  // Cap it for practical reasons
  totalMl = Math.min(3500, Math.max(2000, totalMl));

  return {
    ml: totalMl,
    glasses: Math.ceil(totalMl / 250),
  };
}