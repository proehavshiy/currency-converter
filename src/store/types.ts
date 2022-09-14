export interface ICurrencyData {
CharCode: string;
    ID: string;
    Name: string;
    Nominal: number;
    NumCode: string;
    Previous: number;
    Value: number;
}

export interface ICurrenciesData {
  [key: string]: ICurrencyData
}

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
  currenciesData: ICurrenciesData;
}

export type setInputData = { type: 'from' | 'to', value: string }
