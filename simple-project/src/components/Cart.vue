<template>
  <ul class="list-group">
    <li class="list-group-item d-flex justify-content-between align-items-center">
      Name
      <span class="">Price</span>
    </li>

    <li v-for="(item,i) in items" :key="i" class="list-group-item d-flex justify-content-between align-items-center">
      {{ item.title }}
      {{ i }}
      <span class="">${{ item.price }}<button @click="removeItem(i)" class="btn btn-sm btn-danger ml-3">x</button></span>
    </li>

    <li class="list-group-item d-flex justify-content-between align-items-center">
      Total
      <span class="">${{ totalPrice }}</span>
    </li>
  </ul>
</template>

<script>
  export default{
    props: ['items'],
    computed: {
      totalPrice() {
        var total = 0
        this.items.forEach(item => {
          total += parseFloat(item.price)
        })
        return total
      }
    },
    methods:{
      removeItem(i){
        this.$emit('itemRemoved',i)
      }
    }
  }
</script>
<style>

</style>
