export interface IStore {
  inputData: {
    from: string;
    to: string;
  };
  selectedValutes: {
    from: string;
    to: string;
  };
  actualDate: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  currenciesData: Object;
}

export type setInputData = { type: 'from' | 'to', value: string }
