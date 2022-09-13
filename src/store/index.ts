import { createStore } from 'vuex';
import axios from 'axios';
import { IStore, setInputData } from './types';

const API_URL = 'https://www.cbr-xml-daily.ru/daily_json.js';

export default createStore<IStore>({
  state: () => ({
    inputData: {
      from: '',
      to: '',
    },
    selectedValutes: {
      from: '',
      to: '',
    },
    actualDate: '',
    currenciesData: {},
  }),
  getters: {
  },
  mutations: {
    setInputData(state, { type, value }: setInputData) {
      console.log('type:', type);
      console.log('value:', value);

      /// функция-конвертер

      ///
      state.inputData[type] = value;
    },
    setSelectedValutes(state, { type, value }: setInputData) {
      console.log('type:', type);
      console.log('value:', value);
      state.selectedValutes[type] = value;
    },
    setActualDate(state, value) {
      const months = [
        'января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря',
      ];

      const DATE = new Date(value);

      const year = DATE.getFullYear();
      const month = months[DATE.getMonth()];
      const date = DATE.getDate();
      const hours = DATE.getHours();
      const minutes = DATE.getMinutes();

      state.actualDate = `${year}, ${date} ${month}, ${hours}:${minutes}`;
    },
    setCurrenciesData(state, data) {
      state.currenciesData = data;
    },
  },
  actions: {
    async fetchCurrencies({ state, commit }) {
      try {
        const response = await axios.get(API_URL);
        if (response.status === 200) {
          console.log('response:', response);
          const { data } = response;
          commit('setActualDate', data.Date);
          commit('setCurrenciesData', {
            ...data.Valute,
            RUB: {
              CharCode: 'RUB',
              ID: 'R01235',
              Name: 'Рубль РФ',
              Nominal: 1,
              NumCode: 1,
              Previous: 1,
              Value: 1,
            },
          });
        }
      } catch (e) {
        ///
      } finally {
        ///
      }
    },
  },
  modules: {
  },
});
