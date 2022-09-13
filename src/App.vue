<!-- eslint-disable max-len -->
<template>
  <div class="container pt-5 pb-5">
    <div class="row justify-content-center">
      <div class="col-8">
        <!-- Content -->
        <div class="card p-3">
          <form>
            <h1 class="h2 mb-4">Конвертер валют</h1>
<!-- accordeon with currencies rates -->
            <div class="courses">
              <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                      aria-expanded="true" aria-controls="collapseOne">
                    Курсы валют на сегодня
                    </button>
                  </h2>
                  <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample">
                    <div class="course-items accordion-body">
                      <div class="course-item card card-body" v-for="course of currenciesData" :key="course.ID"
                      data-bs-toggle="tooltip" data-bs-placement="top" :title="course.Name">
                      <div class="course-item-title">{{course.CharCode}}</div>
                        <div class="course-item-value" :class="getCurrencyFluctuation(course.Value, course.Previous) ? 'top' : 'top'">{{course.Value.toFixed(2)}}</div>
                        <div class="col alert alert-warning alert-info" role="alert">Номинал: {{course.Nominal}}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row mb-1">
              <div class="col">
                <label for="selectFrom">Отдаю:
                <select id="selectFrom" class="form-control">
                  <option value="USD">USD — Доллар США</option>
                  <option value="EUR">EUR — Евро</option>
                  <option value="GBP">GPB — Фунт стерлингов</option>
                  <option value="RUB" selected>RUB — Рубли</option>
                  <option value="AMD">AMD — Armenia</option>
                </select>
                </label>
              </div>
              <div class="col">
                <label for="selectTo">Получаю:
                <select id="selectTo" class="form-control">
                  <option value="USD">USD — Доллар США</option>
                  <option value="EUR">EUR — Евро</option>
                  <option value="GBP">GPB — Фунт стерлингов</option>
                  <option value="RUB">RUB — Рубли</option>
                  <option value="AMD">AMD — Armenia</option>
                </select>
                </label>
              </div>
            </div>

            <div class="row">
              <div class="col">
                <label for="input">
                <input id="input" aria-labelledby="#id" type="number" class="form-control" />
                </label>
              </div>
              <div class="col">
                <label for="output">
                  <input id="output" aria-labelledby="#id" type="number" class="form-control" />
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapMutations, mapState } from 'vuex';

export default defineComponent({
  name: 'App',
  components: {},
  computed: {
    ...mapState({
      inputData: 'inputData',
      currenciesData: 'currenciesData',
    }),
  },
  methods: {
    ...mapMutations({
      setInputData: 'setInputData',
    }),
    ...mapActions({
      fetchCurrencies: 'fetchCurrencies',
    }),
    getCurrencyFluctuation(curr: number, prev: number) {
      // console.log('curr - prev:', !!(curr - prev));
      return !!(curr - prev);
    },
  },
  mounted() {
    console.log('inputData:', this.inputData);
    console.log('currenciesData:', this.currenciesData);
    this.fetchCurrencies();
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
