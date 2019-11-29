<template>
  <div class="home">
    <index></index>
  </div>
</template>

<script>
// @ is an alias to /src
 import index from '@/components/index'

export default {
  name: "home",
  components: {
    index
  },
  mag:'runsgo',
  data() {
    return {
      input: ""
    };
  }
};
</script>