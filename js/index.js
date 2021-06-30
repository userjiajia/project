let noText = [{
    text: "从我第一次见到你,我就心跳了🥰😘"
},
{
    text: "我不要这世间的繁华，你就是我的天下。此生有你，世间再无他。💖"
},
{
    text: "我不会说多醉人的情话，但我只想带你回家🏬"
},
{
    text: "如果能和你在一起，那我以后可以不用吃糖了🍬😊❤"
},
{
    text: "你真的不考虑下嘛?给我们彼此一个机会吧🙁😭"
}];

let countNo = 0;

yes = () => {
    // document.getElementById("finalYes").style.display = 'block';
    // setTimeout(3000, afterYes());

	window.location.href="love.html";
}

exit = (e) => {
    document.getElementById("finalNo").style.display = 'none';
}

// afterYes = () => {
// 	let aterYesHtml = `<p>初识你名，久居我心</p>
// 						<p>花开成海，思你成灾</p>
// 						<p>一人一心，白首不离</p>
// 						<p>几份痴情，几份在意</p>
// 						<p>尽我所能，爱你所有</p>
// 						<p>承蒙厚爱，请多指教</p>
// 						<p>携子之手，陪你到老</p>
// 						<p>久伴不离，此生不弃</p>
// 						<p>余生很长，多多指教</初识你名，久居我心><br>`;
// 	document.getElementById("con").innerHTML = aterYesHtml;
// }

no = () => {
    if (countNo == 5) {
        document.getElementById("finalNo").style.display = 'block';
    } else {
        let node = document.createElement("H4");
        node.innerHTML = noText[countNo].text;
        document.getElementById("container").appendChild(node);
        countNo += 1;
    }
}


	

















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