var cheerio = require('cheerio');
//var request = require('request');
var fs = require('fs');
new Promise((resolve,reject)=>{
	fs.readFile('./data.html',(error,body)=>{
		var str='';
		body+=str;
		const $ = cheerio.load(body);
		var arr=[];
		$('.container_rush_content').find('[class="product_list show"]').find('a').each((i,e)=>{
			var obj = {};
			obj.imgurl = $(e).find('img').attr('src').trim();
			obj.title = $(e).find('.info').find('.desp_title').text().trim();
			obj.content = $(e).find('.info').find('.desp_title').text().trim();
			obj.sale_rate = $(e).find('.info').find('.sell_info').find('.num').find('span').eq(0).text().trim();
			obj.old_price = $(e).find('.info').find('.price_box').find('.box').text().trim();
			obj.now_price = $(e).find('.info').find('.price_box').find('.cur_price').text();
			arr.push(obj);
		})
		resolve(arr);
	})
}).then((data)=>{
	//console.log(data);
	var obj={};
	fs.readFile('./goods.json',(error,body)=>{
		obj=JSON.parse(body);
		obj.goods.rush_buy=data;
		fs.writeFile('./goods.json', JSON.stringify(obj));
	})

})




