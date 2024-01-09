/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { resights__api__models__analysis__analysis__MeasureFieldEnum } from './resights__api__models__analysis__analysis__MeasureFieldEnum';
export type AnalysisStatsMeasureResponse = {
  key: string;
  count: number;
  sum?: number;
  min?: number;
  max?: number;
  avg?: number;
  median_5?: number;
  median_25?: number;
  median_50?: number;
  median_75?: number;
  median_95?: number;
  title: string;
  measures?: Array<resights__api__models__analysis__analysis__MeasureFieldEnum>;
};
