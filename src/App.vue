<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<!-- eslint-disable max-len -->
<template>
  <div class="container pt-5 pb-5">
    <div class="row justify-content-center">
      <div class="col-8">
        <!-- Content -->
        <div class="card p-3">
          <form>
            <h1 class="h2 mb-4">Конвертер валют</h1>
            <div class="row mb-1">
              <div class="col">
                Отдаю:
                <div class="dropdown">
                  <button class="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton1"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    {{`${selectedValutes.from}`}}
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li class="dropdown-item"
                      v-for="currency of currenciesData.filter((currency) => currency.CharCode !== selectedValutes.to && currency.CharCode !== selectedValutes.from )"
                      :key="currency.ID" @click="handleSelectCurrency(currency.CharCode, 'from')">
                      {{`${currency.CharCode} - ${currency.Name}`}}
                    </li>
                  </ul>
                </div>
              </div>
              <div class=" col">
                Получаю:
                <div class="dropdown">
                  <button class="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton1"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    {{`${selectedValutes.to}`}}
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li class="dropdown-item"
                      v-for="currency of currenciesData.filter((currency) => currency.CharCode !== selectedValutes.to && currency.CharCode !== selectedValutes.from )"
                      :key="currency.ID" @click="handleSelectCurrency(currency.CharCode, 'to')">
                      {{`${currency.CharCode} - ${currency.Name}`}}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col">
                <label for="input">
                  <input id="input" aria-labelledby="#id" type="number" class="form-control" :value="inputData.from"
                    @input="handleInput" />
                </label>
              </div>
              <div class="col">
                <label for="output">
                  <input id="output" aria-labelledby="#id" type="number" class="form-control" :value="inputData.to"
                    @input="handleOutput" />
                </label>
              </div>
            </div>
          </form>
          <course-rates :data="currenciesData"></course-rates>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapMutations, mapState } from 'vuex';
import CourseRates from './components/CourseRates.vue';

export default defineComponent({
  name: 'App',
  components: {
    CourseRates,
  },
  data() {
    return {
    };
  },
  computed: {
    ...mapState({
      inputData: 'inputData',
      currenciesData: 'currenciesData',
      selectedValutes: 'selectedValutes',
    }),
  },
  methods: {
    ...mapMutations({
      setInputData: 'setInputData',
      setSelectedValutes: 'setSelectedValutes',
    }),
    ...mapActions({
      fetchCurrencies: 'fetchCurrencies',
    }),
    handleInput(e) {
      this.setInputData({ type: 'from', value: (e.target as HTMLInputElement).value });
    },
    handleOutput(e) {
      this.setInputData({ type: 'to', value: (e.target as HTMLInputElement).value });
    },
    handleSelectCurrency(value: string, type: string) {
      this.setSelectedValutes({ type, value });
    },
  },
  mounted() {
    console.log('inputData:', this.inputData);
    this.fetchCurrencies();
    console.log('currenciesData aft fetch:', this.currenciesData);
  },
  watch: {
    // currenciesData() {
    //   console.log('typeof this.currenciesData:', typeof this.currenciesData);
    //   console.log('this.currenciesData:', this.currenciesData);
    //   return typeof this.currenciesData;
    // },
    'inputData.to': function () {
      console.log('консоль:', this.inputData.to);
    },
    currenciesData() {
      this.setSelectedValutes({ type: 'from', value: this.currenciesData[0].CharCode });
      this.setSelectedValutes({
        type: 'to',
        value: this.currenciesData.find((el) => el.CharCode === 'USD').CharCode,
      });
    },
    selectedValutes() {
      console.log('selectedValutes:', this.selectedValutes);
    },
  },

});
</script>

<style>
.courses {
  /* display: flex; */
  margin-bottom: 15px;
}

.courses>*:first-child {
  margin-left: 0;
}

.courses>*:last-child {
  margin-right: 0;
}

.courses>* {
  margin-right: 5px;
  margin-left: 5px;
}

.course-items {
  display: grid;
  /* grid-template-columns: repeat(auto-fit, minmax(50px, max-content)); */
  /* grid-template-columns: repeat(auto-fit, minmax(min-content, 50px)); */
  grid-template-columns: repeat(auto-fit, minmax(min-content, 180px));
  row-gap: 10px;
  column-gap: 10px;
}

.course-item {
  cursor: pointer;
}

.course-item-title {
  font-weight: 700;
  font-size: 18px;
}

.course-item-value {
  font-size: 32px;
  font-weight: 300;
}

.course-item-value.bottom::after {
  content: '▼';
  margin-left: 10px;
  color: rgb(19, 189, 61);

}

.course-item-value.top::after {
  content: '▲';
  margin-left: 10px;
  color: rgb(255, 51, 51);
}
</style>

function mapState(arg0: { inputData: (state: any) => any; }): any {
  throw new Error('Function not implemented.');
}

function mapState(arg0: { inputData: (state: any) => any; }): any {
  throw new Error('Function not implemented.');
}

function mapMutations(arg0: { setInputData: string; }): any {
  throw new Error('Function not implemented.');
}

function mapActions(arg0: { fetchAnalyticsData: string; }): any {
  throw new Error('Function not implemented.');
}
