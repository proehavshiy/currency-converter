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
                <label for="selectFrom">Отдаю:
                  <select id="selectFrom" class="form-control" @change="(e)=>{
                    setSelectedValutes({type: 'from', value: (e.target as HTMLInputElement).value})
                  }">
                    <option :value="currency.CharCode" v-for="currency of currenciesData" :key="currency.ID">
                      {{`${currency.CharCode} - ${currency.Name}`}}</option>
                  </select>
                </label>
              </div>
              <div class="col">
                <label for="selectTo">Получаю:
                  <select id="selectTo" class="form-control" @change="(e)=>{
                    setSelectedValutes({type: 'to', value: (e.target as HTMLInputElement).value})
                  }">
                    <option :value="currency.CharCode" v-for="currency of currenciesData" :key="currency.ID">
                      {{`${currency.CharCode} -
                      ${currency.Name}`}}</option>
                  </select>
                </label>
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
  },
  mounted() {
    console.log('inputData:', this.inputData);
    console.log('currenciesData:', this.currenciesData);
    this.fetchCurrencies();
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
