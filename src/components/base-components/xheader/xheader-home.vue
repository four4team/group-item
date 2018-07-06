<template>
	<div>
		<div class="touchweb-com_header index noMarginTop" id="globalHeader">
			<a href="" class="header_logo J_ping" report-eventid="YHD_MHome_Header_Home_Logo">
				<img src="https://img.yihaodianimg.com/front-homepage/mglobal/images/logo.png">
			</a>
			<a href="" class="header_area J_ping" report-eventid="YHD_MHome_Header_Area_Select">
				<span id="cityName">上海</span>
			</a>
			<div id="searchBox" class="search_wrap J_ping" report-eventid="YHD_MHome_Header_Search">
				<div class="search_box focus">
					<form name="searchForm" id="searchForm" method="get" action="">
						<input type="search" placeholder="月末英雄团 满199减100" name="keyword" id="keyword" class="search_txt">
						<span class="icon-search icon-global-search"></span>
						<span class="icon_back icon-back"></span>
						<span class="icon_delete icon-delete" style="display: none;"></span>
					</form>
				</div>
				<a class="btn_search" id="searchBtn" href="">搜索</a>
				<div class="touchweb_components-searchList" id="searchSuggest">
					<div class="tags" style="">
						<a class="item" href=''>抽纸</a>
						<a class="item" href=''>运动裤</a>
						<a class="item" href=''>衬衫男夏季新款韩版宽松</a>
						<a class="item" href=''>牛仔裤男2018春夏</a>
						<a class="item" href=''>粮油调味</a>
						<a class="item" href=''>洗手液</a>
					</div>
					<ul></ul>
					<a class="clear_history" href="" style="display: none;">清除历史记录</a>
				</div>
			</div>
			<div class="rightBox">
				<a href="" class="right J_ping" report-eventid="YHD_MHome_Header_Category">
					<span class="right_text iconfont icon-all">
</span>
				</a>
				<a href="" class="right J_ping" report-eventid="YHD_MHome_Header_Cart" id="globalCart">
					<router-link to="car">
						<span class="iconfont icon-gouwuche" style="color:white">
						</span>
					</router-link>
					<i class="sumClass" style="">2</i>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
	export default {}
</script>
<style scoped>
	
</style>