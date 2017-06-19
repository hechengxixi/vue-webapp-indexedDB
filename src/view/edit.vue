<template>
	<div>
		<nav class="clearFix">
			<span class="float-left">
				<router-link to="/" tag="span">首页</router-link>
			</span>
			
			<a @click="onSaveClick" class="float-right">保存</a>
		</nav>
		<div class='text-left'>
			<p  contentEditable=true id="title-edit" v-html="title"></p>
			<hr>
			<div  contentEditable=true id="content-edit" v-html="content"></div>
		</div>
	</div>
	
</template>
<script>
	import indexedDB from '../indexedDB'
	export default {
		data () {
			return {
				id:null,
				title:'',
				content:''
			}
		},
		methods: {
			onSaveClick () {
				var vm = this;
				var params = {
					title: document.getElementById('title-edit').innerHTML,
					content: document.getElementById('content-edit').innerHTML
				}
				if(vm.id){
					params.id = vm.id;
					indexedDB.updateList('toDoList', params, function (){
						vm.$router.push('/')
					})
				}else{
					indexedDB.createList('toDoList', params, function (){
						vm.$router.push('/')
					})
				}
				
			}
		},
		 mounted() {
            var vm = this;
             if (this.$route.query && this.$route.query.id) {
                this.id = this.$route.query.id;
                if(this.id !== undefined){
            	indexedDB.get('toDoList', this.id, function (res) {
            		vm.title = res.title;
            		vm.content = res.content
            	})
            }
            }
        }
	}
</script>
<style type="text/css">
	[contentEditable=true]{
		min-height:30px;
		border:none;
	}
	[contentEditable=true]:focus{
		 outline: none;
	}
</style>