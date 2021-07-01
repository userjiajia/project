
var windowWidth = $(window).width();
if(windowWidth < 767){
	// do something
	console.log(11);
	$("#container p").style.fontSize=24+'px'

}
// if(windowWidth >= 640){
// 	// do something
// }



function resizeFont() {
	//获取屏幕宽度
	let clientWidth = document.documentElement.clientWidth || document.body.clientWidth;
	//设计图参考宽度
	let design = 750;
	if (clientWidth > 750){
		document.getElementsByTagName('html').item(0).style.fontSize = '39px';

	}else{
		document.getElementsByTagName('html').item(0).style.fontSize = clientWidth / design * 100 + 'px';
	}
}
resizeFont();
window.onresize = function () {
	resizeFont();
}



let noText = [{
    text: "我喜欢你，如果一颗星星代表我对你的一见钟情，那么你准备好迎接整个宇宙的万箭齐发了吗？🥰😘"
},
{
    text: "我喜欢你，谢谢你撑到我找到你。💖"
},
{
    text: "我喜欢你，我想变得有趣，变得特别，变成你眼里的一点星光。🏬"
},
{
    text: "我喜欢你，我不仅可爱，我还可爱你了🍬😊❤"
},
{
    text: "反正早晚都得谈恋爱，和我谈可以吗?🙁😭"
}];

let countNo = 0;

yes = () => {
	// setTimeout(300, afterYes());

	window.location.href="ai.html";
}

// afterYes = () => {
// 	let aterYesHtml = ` <p>那我重新介绍一下我自己！</p>
// 						<p>我是个吃货！</p>
// 						<p>爱吃火锅！</p>
// 						<p>你呢？你不用回答，你只需念这三句的前一个字！</p>
// 						<p>你知道吗？喜欢你的我很多，不缺我一个，</p>
// 						<p>我喜欢的人很少，只有你一个。</p>
// 						<p>请记住你的身份，你是老子的人！</p>`;
					
// 	document.getElementById("con").innerHTML = aterYesHtml;
// }









exit = (e) => {
    document.getElementById("finalNo").style.display = 'none';
}



no = () => {
    if (countNo == 5) {
        document.getElementById("finalNo").style.display = 'block';
    } else {
        let node = document.createElement("p");
        node.innerHTML = noText[countNo].text;
        document.getElementById("container").appendChild(node);
        countNo += 1;
    }
}


	











// (function () {
// 	document.addEventListener('DOMContentLoaded', function () {
//  var deviceWidth = document.documentElement.clientWidth;
//  document.documentElement.style.fontSize = deviceWidth / 30 + 'px';
// 	}, false);
//  window.onresize = function(){
//  var deviceWidth = document.documentElement.clientWidth;
//  document.documentElement.style.fontSize = deviceWidth / 30 + 'px';
//  };
//  })();






		window.addEventListener('load', function () {
			let body = document.body;
			let content = ["❤我爱你❤", "❤i love you❤", "❤答应我❤", "❤好不好❤", "❤嫁给我❤",
				"❤我不管我认定你了❤", "❤就要你❤", "❤我爱你❤", "❤我喜欢你❤", "❤答应我❤", "❤嫁给我❤", "❤我想娶你❤",
				"❤我想跟你生猴子❤", "❤我想跟你母凭子贵❤", "❤我喜欢你❤", "❤我想要和你一起慢慢变老❤", "❤跟我回家❤", "❤想你，是甜蜜和心痛。❤",
				"❤做我女朋友❤", "❤做我女朋友❤", "❤做我女朋友❤", "❤做我女朋友❤", "❤做我女朋友❤", "❤做我女朋友❤",
				"❤做我女朋友❤", "❤做我女朋友❤", "❤做我女朋友❤", "❤想你❤", "❤超级想你❤", "❤做我女朋友❤",
				"❤喜欢我❤", "❤结婚吧❤", "❤很高兴遇见你❤", "❤你是我最大的幸运❤", "❤不许走❤", "❤做我女朋友❤",
				"❤嫁给我❤", "❤答应我❤", "❤你跑不掉了❤", "❤你是我的❤", "❤老婆❤", "❤宝贝❤",
				"❤做我女朋友❤", "❤做我女朋友❤", "❤好不好嘛❤"
			] //自定义内容的数组
			body.addEventListener('click', function (e) {
				let x = e.pageX;
				let y = e.pageY; //当前坐标
				let randContent = Math.ceil(Math.random() * content.length);
				let text = new Text(x, y, randContent);
				let span = document.createElement('span')
				span.style.color = text.getRandom();
				text.create(span);
				setTimeout(function () {
					text.out(span)
				}, 1900)
			})
	
			function Text(x, y, rand) {
				this.x = x;
				this.y = y;
				this.rand = rand;
			}
			Text.prototype.create = function (_this) {
				let body = document.body;
				_this.innerHTML = content[this.rand - 1];
				_this.className = 'text'
				_this.style.top = this.y - 20 + 'px'
				_this.style.left = this.x - 50 + 'px'
				_this.style.animation = 'remove 2s'
				body.appendChild(_this);
				let i = 0
				setInterval(() => {
					_this.style.top = this.y - 20 - i + 'px'
					i++
				}, 10);
			}
			Text.prototype.out = function (_this) {
				_this.remove()
			}
			//设置随机颜色
			Text.prototype.getRandom = function () {
				let allType = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f'; //16进制颜色
				let allTypeArr = allType.split(','); //通过','分割为数组
				let color = '#';
				for (var i = 0; i < 6; i++) {
					//随机生成一个0-16的数
					var random = parseInt(Math.random() * allTypeArr.length);
					color += allTypeArr[random];
				}
				return color; //返回随机生成的颜色
			}
		})