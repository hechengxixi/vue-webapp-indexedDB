<template>
<ul>
	<li v-for="(note, i) in list" v-bind:key="i">
		<h3 v-text="note.title"></h3>
		<p v-text="note.content"></p>
		<hr/>
	</li>
</ul>
	
</template>
<script>
	export default {
		data () {
			return {
				list: []
			}
		},
		methods: {
			fetchList () {
				var vm = this;
				$.ajax({
					url:'src/assets/data.list.json',
					success (res) {
						vm.list = vm.list.concat(res)
					}
				})
			}
		},
		mounted(){

		}
	}
</script>
<style type="text/css">
	ul,li {
		list-style: none;
		margin:0;
		padding:0;
	}
	ul{
		max-height: 100%;
	}
</style>