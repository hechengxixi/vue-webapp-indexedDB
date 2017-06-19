<template>
<div>
	<nav class="clearFix">
		<span class="float-right">
			<router-link :to="{name:'edit'}" tag="span" exact>添加</router-link>
		</span>
	</nav>
    <ul class='text-left'>
		<li v-for="(note, i) in list" v-bind:key="i" @click="onListClick(note.id)">
			<h3 v-text="note.title"></h3>
			<p v-text="note.content"></p>
			<hr/>
		</li>
	</ul>
</div>

	
</template>
<script>
	import indexedDB from '../indexedDB'
	export default {
		data () {
			return {
				list: []
			}
		},
		methods: {
			fetchList () {
				var vm = this;
				vm.list = indexedDB.getList('toDoList');
			},
			onListClick (id) {
				this.$router.push('edit?id='+id)
			}
		},
		mounted(){
			this.fetchList()
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

	.clearFix:after{
		display:block;
		content:'';
		clear: both;
	}
	.float-left{
		float:left;
	}
	.float-right{
		float:right;
	}
</style>