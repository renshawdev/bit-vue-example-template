module.exports = (componentName, componentId) => {
  return `<template>
  <div class="container">
    <${componentName} v-bind="componentProps" />
  </div>
</template>

<script>
  import ${componentName} from '${componentId}';

  export default {
    data () {
      return {
        componentProps: {
          title: 'Example Component'
        }
      }
    },
    components: {
      ${componentName}
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
}