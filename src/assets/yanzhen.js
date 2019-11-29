
        
window.onload = function() {
    const canvas = document.getElementById("canvas")
    const code = new Regcode();
    code.draw(canvas,function(txt) {
        console.log("当前验证码:",txt);
    });//绘制验证码
}

//生成验证码
function Regcode(options = {}) {//设置默认参数options为空对象
    const params = Object.assign({
        lineWidth:0.5,//线条宽度
        lineNum:3,//线条的数量
        dotNum:10,//圆点的数量
        dotR:1,//圆点的半径
        foregroundColor:[10,80],//前景色区间
        backgroundColor:[150,250],//背景色区间
        fontSize:20,//字体大小
        fontFamily:"Georgia",//字体格式
        fontStyle:"fill",//字体绘制的方法，fill/stroke
        content:"abcdefghijklmnopqrstuvwxyz0123456789",//验证码所出现的文字
        len:4,//验证码长度

    },options);

    //将params属性添加到this上
    Object.keys(params).forEach(k => {
        this[k] = params[k];
    });

    this.canvas = null;//canvas dom
    this.paint = null;//ctx

    //绘画
    this.draw = function(dom,callback) {
        if(!this.paint) {//判断canvas是否存在
            this.canvas = dom;
            if(!this.canvas) return;
            this.paint = this.canvas.getContext("2d");
            if(!this.paint) return;

            //生成验证码之后的回调函数，可以用于校验验证码是否正确
            this.callback = callback;

            //监听点击事件，切换验证码
            this.canvas.onclick = () => {
                this.drawAgain();//重新生成验证码
            }
        }

        //生成随机背景色
        var colors = this.getColor(this.backgroundColor);
        this.paint.fillStyle = `rgba(${colors[0]},${colors[1]},${colors[2]},0.8)`;
        this.paint.fillRect(0,0,this.canvas.width,this.canvas.height);

        //绘图
        this.arc();
        this.line();
        this.font();
    }

    //获取随机颜色
    this.getColor = function(arr) {
        var colors = new Array(3).fill("");//创建一个长度为3的数组，每一个值都填充为空字符串
        colors = colors.map(function() {
            arr.sort((a,b) => a - b);//升序
            return Math.floor(Math.random() * ((arr[1] - arr[0])) + arr[0]);
        });
        return colors;
    }

    // 绘制圆点
    this.arc = function() {
        for(var i = 0;i<this.dotNum;i++) {
            //随机圆心
            var x = Math.floor(Math.random() * 100);
            var y = Math.floor(Math.random() * 30);

            this.paint.beginPath();
            this.paint.arc(x,y,this.dotR,0,Math.PI * 2,false);
            this.paint.closePath();

            //设置填充颜色
            var colors = this.getColor(this.foregroundColor);
            this.paint.fillStyle = `rgba(${colors[0]},${colors[1]},${colors[2]},0.8)`;
           this.paint.fill();

        }
    };

    //绘制线条
    this.line = function() {
        for(var i = 0;i < this.lineNum;i++) {
            //随机线条坐标
            var x = Math.floor(Math.random() * 100);
            var y = Math.floor(Math.random() * 30);
            var endx = Math.floor(Math.random() * 100);
            var endy = Math.floor(Math.random() * 30);
            this.paint.beginPath();
            this.paint.moveTo(x,y);
            this.paint.lineTo(endx,endy);
            this.paint.closePath();
            this.paint.lineWidth = this.lineWidth;
            //设置线条颜色
            var colors = this.getColor(this.foregroundColor);
            this.paint.strokeStyle = `rgba(${colors[0]},${colors[1]},${colors[2]},0.8)`;
            this.paint.stroke();

        }
    };

    //随机生成文字
    this.getText = function() {
        var str = "";
        var len = this.content.length;
        for(var i = 0;i<this.len;i++) {
            str += this.content.charAt(Math.floor(Math.random() * len));
        }
        return str;
    }

    // 绘制验证码
    this.font = function() {
        var str = this.getText();//用户获取验证码文字
        this.callback(str);//利用回调函数输出验证码文字内容，可以用于与用户输入进行比对

        //文字格式设置
        this.paint.font = `${this.fontSize}px ${this.fontFamily}`;
        this.paint.textBaseline = "middle";//设置文本基线，居中
        var fontStyle = `${this.fontStyle}Text`;//fillText()
        var colorStyle = `${this.fontStyle}Style`;//fileStyle

        for(var i =0;i<this.len;i++) {//循环绘制文字
            var fw = this.paint.measureText(str[i]).width;//获取文字绘制的实际宽度
            //获取每个字的允许范围，用于确定绘制单个文字的横坐标
            var x1 = (this.canvas.width / this.len) * i + fw /  2;
            var x2 = (this.canvas.width / this.len) * i;
            var x = Math.floor(Math.random() * ((x1 - x2)) + x2);

            //设置文字的旋转角度
            var deg = Math.floor(Math.random() * 12);
            var colors = this.getColor(this.foregroundColor);//文字颜色
            this.paint[colorStyle] = `rgba(${colors[0]},${colors[1]},${colors[2]},0.8)`;

            //文字的绘制
            this.paint.save();//用于保存当前状态
            this.paint.rotate(deg * Math.PI / 180);
            this.paint[fontStyle](str[i],x,this.canvas.height / 2);
            this.paint.restore();//回到上一个状态
        }
    };

    // 重新绘制验证按
    this.drawAgain = function() {
        this.paint.clearRect(0,0,this.canvas.width,this.canvas.height);
        this.draw(this.callback);
    }
}
