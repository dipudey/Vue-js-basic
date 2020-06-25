<template>
	<p>Details {{ item }}</p>
</template>

<script>
	import axios from "axios"

	export default{
		data() {
			return {
				item : null
			}
		},
		mounted(){
			this.itemDetails()
		},
		methods: {
			itemDetails(){
				var self = this
				axios.get('http://127.0.0.1:8000/api/product/'+this.$route.params.id).then(response => {
					self.item = response
				})
			}
		}
	}
</script>

<style>

</style>