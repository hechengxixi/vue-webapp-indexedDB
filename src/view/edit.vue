<template>
	<div class="fixed-container">
		<nav class="clearFix top-fixed">
			<span class="float-left">
				<router-link to="/" tag="span"><span class="icon-home"></span></router-link>
			</span>
			
			<a @click="onSaveClick" class="float-right icon-save"></a>
		</nav>
		<div class='text-left m-top clearMargin'>
			<p  contentEditable=true id="title-edit" class="m-left m-top" v-html="title"></p>
			<hr>
			<div  contentEditable=true id="content-edit" class="m-left" v-html="content"></div>
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
				if(params.title && params.content){
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
				}else{
					alert('标题或内容不能为空！')
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
<style lang="scss">
	[contentEditable=true]{
		min-height:30px;
		border:none;
		&:focus{
		 outline: none;
		}
	}
</style>