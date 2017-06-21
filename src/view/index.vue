<template>
<div class="fixed-container">
	<nav class="clearFix top-fixed">
		<span class="float-right">
			<router-link :to="{name:'edit'}" tag="span" exact><span class="icon-pen"></span></router-link>
		</span>
	</nav>
    <ul class='text-left'>
		<li v-for="(note, i) in list" v-bind:key="i" @click="onListClick(note.id)" @touchmove="onTouchmove" @touchend="onTouchend($event, note.id)" @touchstart="onTouchstart" class="border-left list-item p-left m-bottom">
			<p v-html="note.title" class="text-ellipsis single-line icon-title"></p>
			<p class="half-single-line middle-line"></p>
			<p v-html="note.content" class="text-ellipsis single-line icon-content"></p>
		</li>
	</ul>
</div>

	
</template>
<script>
	import indexedDB from '../indexedDB'
	export default {
		data () {
			return {
				touchstartPoint:0,
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
			},
			onTouchstart (e) {
				if( e.targetTouches.length === 1){
					this.touchstartPoint = e.targetTouches[0].pageX;
				}
				return false;
			},
			onTouchmove (e) {
				if( e.targetTouches.length === 1){
					var target = e.target.tagName === 'LI' ? e.target : e.target.parentElement;
					target.style.transform = "translate("+(e.targetTouches[0].pageX-this.touchstartPoint)+"px)"
				}
				
			},
			onTouchend (e, id) {
				var vm = this;
				var target = e.target.tagName === 'LI' ? e.target : e.target.parentElement;
				if(e.changedTouches.length === 1 && e.changedTouches[0].pageX-this.touchstartPoint>=100){
					indexedDB.deleteList('toDoList',id, function () {
						vm.fetchList();
					})
				}
				this.touchstartPoint = 0;
				target.style.transform = "translate("+(this.touchstartPoint)+"px)";

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
	
</style>