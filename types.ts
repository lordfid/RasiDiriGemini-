export type QuestionKind =
  | 'forcedChoice'
  | 'singleChoice'
  | 'multiChoice'
  | 'ranking'
  | 'firstReaction'
  | 'hiddenReaction';

export type AnswerKind =
  | 'left'
  | 'right'
  | 'both'
  | 'neither'
  | 'depends'
  | 'skip'
  | 'choice'
  | 'multi'
  | 'rank';

export type QuestionDomain =
  | 'family'
  | 'friendship'
  | 'romance'
  | 'idealPartner'
  | 'preference'
  | 'work'
  | 'school'
  | 'money'
  | 'moral'
  | 'stress'
  | 'identity'
  | 'daily';

export type CognitiveFunction = 'Ni' | 'Ne' | 'Si' | 'Se' | 'Fi' | 'Fe' | 'Ti' | 'Te';

export type StackRole =
  | 'dominant'
  | 'auxiliary'
  | 'tertiary'
  | 'inferior'
  | 'opposing'
  | 'critical'
  | 'trickster'
  | 'transformative';

export interface ScoreWeight {
  cognitive?: Partial<Record<CognitiveFunction, number>>;
  stackRole?: Partial<Record<StackRole, number>>;
  mbtiAxis?: Partial<Record<'E' | 'I' | 'N' | 'S' | 'T' | 'F' | 'J' | 'P', number>>;
  enneagram?: Partial<Record<'1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9', number>>;
  instinct?: Partial<Record<'sp' | 'so' | 'sx', number>>;
  bigFive?: Partial<Record<'O' | 'C' | 'E' | 'A' | 'N', number>>;
  hexaco?: Partial<Record<'H' | 'E' | 'X' | 'A' | 'C' | 'O', number>>;
  attitudinalPsyche?: Partial<Record<'V' | 'L' | 'F' | 'E', number>>;
  disc?: Partial<Record<'D' | 'I' | 'S' | 'C', number>>;
  riasec?: Partial<Record<'R' | 'I' | 'A' | 'S' | 'E' | 'C', number>>;
  moral?: Record<string, number>;
  decision?: Record<string, number>;
  conflict?: Record<string, number>;
  communication?: Record<string, number>;
  relationship?: Record<string, number>;
  stress?: Record<string, number>;
  defense?: Record<string, number>;
  values?: Record<string, number>;
  work?: Record<string, number>;
  learning?: Record<string, number>;
  coreFear?: Record<string, number>;
  coreDesire?: Record<string, number>;
  evidence?: number;
  positive?: number;
  negative?: number;
  reliability?: number;
  ambiguity?: number;
  contradiction?: number;
}

export interface QuestionOption {
  id: string;
  text: string;
  subtleMeaning?: string;
  weights: ScoreWeight;
}

export interface QuestionItem {
  id: string;
  kind: QuestionKind;
  domain?: QuestionDomain;
  context?: string;
  prompt: string;
  instruction?: string;
  options?: QuestionOption[];
  left?: QuestionOption;
  right?: QuestionOption;
  maxSelect?: number;
  minSelect?: number;
  rankLimit?: number;
  reliability?: number;
  targetSystems?: string[];
}

export interface UserAnswer {
  questionId: string;
  kind: QuestionKind;
  answerKind: AnswerKind;
  selectedOptionId?: string;
  selectedOptionIds?: string[];
  rankedOptionIds?: string[];
  side?: 'left' | 'right' | 'both' | 'neither' | 'depends';
  timestamp: number;
}

export interface FinalResult {
  summary: string;
  topMBTI: string;
  cognitiveRanking: string[];
  stackFit: string;
  functionRoles: Record<string, string>;
  shadowRoles: Record<string, string>;
  enneagram: string;
  wing: string;
  instinctStacking: string;
  tritype: string;
  bigFive: Record<string, number>;
  hexaco: Record<string, number>;
  socionics: string;
  temperament: string;
  attitudinalPsyche: string;
  disc: string;
  riasec: string;
  moralStyle: string;
  decisionStyle: string;
  conflictStyle: string;
  communicationStyle: string;
  relationshipTendency: string;
  stressResponse: string;
  coreFear: string;
  coreDesire: string;
  valuesRanking: string[];
  workStyle: string;
  learningStyle: string;
  defensePattern: string;
  idealPartnerTendency: string;
  preferredLoveStyle: string;
  preferredEnvironment: string;
  confidence: number;
  notes: string;
  completedAt: number;
}
