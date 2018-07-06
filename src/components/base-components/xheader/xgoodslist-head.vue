<template>
	<div class="touchweb-com_header header_flex" id="globalHeader">
		<a id="topIconBack" class="left icon-back" href="#"></a>
		<div id="searchBox" class="search_wrap J_ping">
			<div class="search_box focus">
				<form name="searchForm" id="searchForm" method="get" action="">
					<input v-model="sort" type="search" placeholder="你要的宝贝都在这o~" url="https://pro.yhd.com/yhd/active/2YmfF6sEB6AdSv5cJ91TbDivJLrz/index.html" name="keyword" id="keyword" class="search_txt"
value="">
					<span class="icon-search"></span>
					<span class="icon_back icon-back"></span>
					<span class="icon_delete icon-delete" style="display: none;"></span>
				</form>
			</div>
			<a class="btn_search" id="searchBtn" href="#">搜索</a>
			<div class="touchweb_components-searchList" id="searchSuggest">
				<div class="tags"></div>
				<ul></ul>
				<a class="clear_history" href="#">清除历史记录</a>
			</div>
		</div>
		<div class="rightBox">
			<a class="right" href="#" id="globalHome">
				<span class="right_text icon-home"></span>
			</a>
			<a class="right" href="#" id="globalCart">
				<i class="sumClass" style="display: none;"></i>
				<span class="right_text icon-cart"></span>
			</a>
		</div>
	</div>
</template>

<script>export default {
	computed: {
		sort() {
			return this.$store.state.sort
		}
	}
}</script>

<style scoped>
	.icon-cart::before{
		content: "\f14f"
	}
</style>