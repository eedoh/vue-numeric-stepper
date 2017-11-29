import NumericStepper from './NumericStepper.vue';

module.exports = {
  install: function (Vue, options) {
    Vue.component('vue-numeric-stepper', NumericStepper);
  }
};