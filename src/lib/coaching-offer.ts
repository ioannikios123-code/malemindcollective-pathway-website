export const coachingOffer = {
  peopleCoached: 10,
  monthlyPrice: 297,
  minimumMonths: 3,
  weeklySessionMinutes: 60,
} as const;

export const coachingMinimumTotal = coachingOffer.monthlyPrice * coachingOffer.minimumMonths;