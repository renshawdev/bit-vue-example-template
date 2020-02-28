const vueExampleTemplate = require ('../../src/components/vue-example-template');

const componentName = 'ExampleComponent'
const componentId = '@bit/paulrenshaw.vue.example-component'
const vueExample = `<template>
  <div class="container">
    <ExampleComponent v-bind="componentProps" />
  </div>
</template>

<script>
  import ExampleComponent from '@bit/paulrenshaw.vue.example-component';

  export default {
    data () {
      return {
        componentProps: {
          title: 'Example Component'
        }
      }
    },
    components: {
      ExampleComponent
    }
  }
</script>

<style scoped>
.container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
`

test('generates example', () => {
  expect(vueExampleTemplate(componentName, componentId))
  .toEqual(vueExample)
})
