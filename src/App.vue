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
                      <div class="course-item card card-body">
                        <div class="course-item-title">Курс USD</div>
                        <div class="course-item-value" data-value="USD">--.--</div>
                      </div>
                      <div class="course-item card card-body">
                        <div class="course-item-title">Курс EUR</div>
                        <div class="course-item-value" data-value="EUR">--.--</div>
                      </div>
                      <div class="course-item card card-body">
                        <div class="course-item-title">Курс GPB</div>
                        <div class="course-item-value" data-value="GBP">--.--</div>
                      </div>
                      <div class="course-item card card-body">
                        <div class="course-item-title">Курс GPB</div>
                        <div class="course-item-value" data-value="GBP">--.--</div>
                      </div>
                      <div class="course-item card card-body">
                        <div class="course-item-title">Курс GPB</div>
                        <div class="course-item-value" data-value="GBP">--.--</div>
                      </div>
                      <div class="course-item card card-body">
                        <div class="course-item-title">Курс GPB</div>
                        <div class="course-item-value" data-value="GBP">--.--</div>
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
import HelloWorld from './components/HelloWorld.vue';

export default defineComponent({
  name: 'App',
  components: {
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
  grid-template-columns: repeat(auto-fit, minmax(120px, max-content));
  row-gap: 10px;
  column-gap: 10px;
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
