export interface IStore {
  inputData: {
    from: string;
    to: string;
  };
  actualDate: string;
  currenciesData: [];
}

export type setInputData = { inputType: 'from' | 'to', value: string }
