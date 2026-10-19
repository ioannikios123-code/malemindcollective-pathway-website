import { describe, expect, test } from 'bun:test';
import { coachingOffer, coachingMinimumTotal } from './coaching-offer';

describe('owner-approved coaching offer', () => {
  test('uses exactly ten people coached', () => expect(coachingOffer.peopleCoached).toBe(10));
  test('retains the monthly price of 297', () => expect(coachingOffer.monthlyPrice).toBe(297));
  test('requires three months', () => expect(coachingOffer.minimumMonths).toBe(3));
  test('three-month minimum costs 891', () => expect(coachingMinimumTotal).toBe(891));
});