<!-- eslint-disable max-len -->
<template>
  <div class="course-item card card-body" v-for="item of data" :key="item.ID" data-bs-toggle="tooltip"
    data-bs-placement="top" :title="item.Name">
    <div class="course-item-title">{{item.CharCode}}</div>
    <div class="course-item-value" :class="getCurrencyFluctuation(item.Value, item.Previous) ? 'top' : 'top'">
      {{item.Value.toFixed(2)}}
    </div>
    <div class="col alert alert-warning alert-info" role="alert">
      Номинал: {{item.Nominal}}
    </div>
  </div>
</template>

<script lang="ts">
import { ICurrenciesData } from '@/store/types';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'course-card',
  props: {
    data: {
      type: Object as PropType<ICurrenciesData>,
      required: true,
    },
  },
  methods: {
    getCurrencyFluctuation(curr: number, prev: number) {
      console.log('curr:', curr);
      console.log('prev:', prev);
      return !!(curr - prev);
    },
  },
  // mounted() {
  //   // eslint-disable-next-line no-unused-expressions
  //   this.currenciesData;
  // },
});
</script>

<style scoped>

</style>
