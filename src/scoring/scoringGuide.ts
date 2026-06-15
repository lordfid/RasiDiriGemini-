import { ScoreWeight } from '../types';

export const SCORING_QUOTAS = {
  cognitiveFunctions: {
    total: 320,
    Ni: 40, Ne: 40, Si: 40, Se: 40,
    Fi: 40, Fe: 40, Ti: 40, Te: 40
  },
  mbtiAxis: {
    total: 200,
    I: 50, E: 50, S: 50, N: 50, T: 50, F: 50, J: 50, P: 50
  },
  stackRole: {
    total: 240,
    dominant: 40, auxiliary: 40, tertiary: 35, inferior: 35,
    opposing: 25, critical: 25, trickster: 20, transformative: 20
  },
  enneagram: {
    total: 270,
    '1': 30, '2': 30, '3': 30, '4': 30, '5': 30, '6': 30, '7': 30, '8': 30, '9': 30
  },
  wingSupport: {
    total: 200
  },
  instinct: {
    total: 210,
    sp: 70, sx: 70, so: 70
  },
  tritype: {
    total: 210,
    Heart: 70, Head: 70, Gut: 70
  },
  bigFive: {
    total: 250,
    O: 50, C: 50, E: 50, A: 50, N: 50
  },
  hexaco: {
    total: 300,
    H: 50, E: 50, X: 50, A: 50, C: 50, O: 50
  },
  attitudinalPsyche: {
    total: 240,
    V: 60, L: 60, F: 60, E: 60
  },
  disc: {
    total: 200,
    D: 50, I: 50, S: 50, C: 50
  },
  riasec: {
    total: 240,
    R: 40, I: 40, A: 40, S: 40, E: 40, C: 40
  },
  otherDomains: {
    moral: 200,
    decision: 200,
    conflict: 200,
    communication: 200,
    relationship: 200,
    stress: 200,
    coreFear: 200,
    coreDesire: 200,
    values: 200,
    work: 200,
    learning: 200,
    defense: 200,
    idealPartner: 200,
    loveStyle: 200,
    environment: 200
  }
};

export function calculateMeasurementPoints(weights: ScoreWeight): number {
  let totalPoints = 0;

  const sumAbsolute = (obj?: Record<string, number>) => {
    if (!obj) return 0;
    return Object.values(obj).reduce((sum, val) => sum + Math.abs(val), 0);
  };

  totalPoints += sumAbsolute(weights.cognitive as Record<string, number>);
  totalPoints += sumAbsolute(weights.stackRole as Record<string, number>);
  totalPoints += sumAbsolute(weights.mbtiAxis as Record<string, number>);
  totalPoints += sumAbsolute(weights.enneagram as Record<string, number>);
  totalPoints += sumAbsolute(weights.instinct as Record<string, number>);
  totalPoints += sumAbsolute(weights.bigFive as Record<string, number>);
  totalPoints += sumAbsolute(weights.hexaco as Record<string, number>);
  totalPoints += sumAbsolute(weights.attitudinalPsyche as Record<string, number>);
  totalPoints += sumAbsolute(weights.disc as Record<string, number>);
  totalPoints += sumAbsolute(weights.riasec as Record<string, number>);

  totalPoints += sumAbsolute(weights.moral);
  totalPoints += sumAbsolute(weights.decision);
  totalPoints += sumAbsolute(weights.conflict);
  totalPoints += sumAbsolute(weights.communication);
  totalPoints += sumAbsolute(weights.relationship);
  totalPoints += sumAbsolute(weights.stress);
  totalPoints += sumAbsolute(weights.defense);
  totalPoints += sumAbsolute(weights.values);
  totalPoints += sumAbsolute(weights.work);
  totalPoints += sumAbsolute(weights.learning);
  totalPoints += sumAbsolute(weights.coreFear);
  totalPoints += sumAbsolute(weights.coreDesire);

  totalPoints += Math.abs(weights.evidence ?? 0);
  totalPoints += Math.abs(weights.positive ?? 0);
  totalPoints += Math.abs(weights.negative ?? 0);
  totalPoints += Math.abs(weights.reliability ?? 0);
  totalPoints += Math.abs(weights.ambiguity ?? 0);
  totalPoints += Math.abs(weights.contradiction ?? 0);

  return totalPoints;
}

export function validateOptionRules(weights: ScoreWeight): boolean {
  if (weights.evidence === undefined || weights.evidence === 0) return false;
  if (weights.positive === undefined || weights.positive === 0) return false;
  if (weights.negative === undefined || weights.negative === 0) return false;
  if (weights.reliability === undefined || weights.reliability === 0) return false;

  const hasTypology =
    (weights.cognitive && Object.keys(weights.cognitive).length > 0) ||
    (weights.mbtiAxis && Object.keys(weights.mbtiAxis).length > 0) ||
    (weights.enneagram && Object.keys(weights.enneagram).length > 0) ||
    (weights.instinct && Object.keys(weights.instinct).length > 0) ||
    (weights.bigFive && Object.keys(weights.bigFive).length > 0) ||
    (weights.hexaco && Object.keys(weights.hexaco).length > 0) ||
    (weights.attitudinalPsyche && Object.keys(weights.attitudinalPsyche).length > 0) ||
    (weights.disc && Object.keys(weights.disc).length > 0) ||
    (weights.riasec && Object.keys(weights.riasec).length > 0);

  if (!hasTypology) return false;

  const hasLightCounterWeight = Object.values(weights).some(val => {
    if (typeof val === 'number') return val < 0;
    if (typeof val === 'object' && val !== null) {
      return Object.values(val).some(nestedVal => typeof nestedVal === 'number' && nestedVal < 0);
    }
    return false;
  });

  if (!hasLightCounterWeight && weights.negative >= 0) return false;

  return true;
}

export function enforceWingSupportConstraint(enneagramWeights: Partial<Record<'1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9', number>>): boolean {
  if (!enneagramWeights) return true;

  const validWings: Record<string, string[]> = {
    '1': ['9', '2'], '2': ['1', '3'], '3': ['2', '4'],
    '4': ['3', '5'], '5': ['4', '6'], '6': ['5', '7'],
    '7': ['6', '8'], '8': ['7', '9'], '9': ['8', '1']
  };

  const types = Object.keys(enneagramWeights);
  if (types.length === 1) return true; 

  let isValid = true;
  for (const type of types) {
    const isMainType = types.some(t => t !== type && enneagramWeights[t as keyof typeof enneagramWeights]! > (enneagramWeights[type as keyof typeof enneagramWeights]!));
    if (!isMainType) {
        const wingNeighbors = validWings[type];
        for (const possibleWing of types) {
            if (possibleWing !== type && !wingNeighbors.includes(possibleWing)) {
                isValid = false; 
            }
        }
    }
  }

  return isValid;
}
