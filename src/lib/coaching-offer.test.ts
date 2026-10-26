/// <reference types="node" />
import { describe, test } from 'node:test';
import { strict as assert } from 'node:assert';
import { coachingOffer, coachingMinimumTotal } from './coaching-offer';

describe('owner-approved coaching offer', () => {
  test('uses exactly ten people coached', () => assert.equal(coachingOffer.peopleCoached, 10));
  test('retains the monthly price of 297', () => assert.equal(coachingOffer.monthlyPrice, 297));
  test('requires three months', () => assert.equal(coachingOffer.minimumMonths, 3));
  test('three-month minimum costs 891', () => assert.equal(coachingMinimumTotal, 891));
});