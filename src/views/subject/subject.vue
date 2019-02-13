<template>
    <div>
        1.active-class是哪个组件的属性
        vue-router模块的router-link组件


        1.table元素设置了table-layout:fixed后，下面说法正确的是？（ABC）
        A.使用固定宽度布局，用户代理可以更快的计算出表的布局
        B.col元素的width属性值不为auto时，该列单元格的宽度为col的width值
        C.col宽度为auto，且该列的首行单元格的width值也不为auto时，那么该列的宽度为单元格的宽度
        D.表格的宽度可自动与父元素等宽

        2.下面哪些情况会触发http请求？（）
        A.<img src="pic.jpg" style="visibility:hidden" alt="My photo">
        B.<textarea><img src="pic.jpg" alt="My photo"></textarea>
        C.<img src="pic.jpg" style="display:none" alt="My photo">
        D.<div style="display:none;background-image:url(pic.jpg)"></div>
        E.<div style="display:none"><img src="pic.jpg" alt="My photo"></div>
        参考：https://user-gold-cdn.xitu.io/2018/4/9/162a8b74f5bc848b

        2.下面属性值属于界标角色（landmark role）的是？（ABDEF）
        A.navigation
        B.banner
        C.complementary
        D.contentinfo
        E.main
        F.search
        靠猜,界标元素是啥

        2.CSS选择器的特殊性（specificity）分为四个部分，如：0,0,0,0，下面描述正确的是？（BCD）
        A.不同的类型的选择器分配的数值也不同，特殊性的计算是以10位基数的
        B.如果是行内样式，那么特殊性位1,0,0,0
        C.类、伪类选择器和属性选择器的特殊性位0,0,1,0
        D.通配选择器（*）对选择器的特殊性没有贡献

        在CSS中，会根据选择器的特殊性来决定所定义的样式规则的次序，具有更特殊选择器的规则优先于具有一般选择器的规则，如果两个规则的特殊性相同，那么后定义的规则优先。
        我们把特殊性分为4个等级，每个等级代表一类选择器，每个等级的值为其所代表的选择器的个数乘以这一等级的权值，最后把所有等级的值相加得出选择器的特殊值。
        第一等：代表内联样式，如: style=””，权值为1000。
        第二等：代表ID选择器，如：#content，权值为100。
        第三等：代表类，伪类和属性选择器，如.content，权值为10。
        第四等：代表类型选择器和伪元素选择器，如div  p，权值为1。
        注意：通用选择器（*），子选择器（>）和相邻同胞选择器（+）并不在这四个等级中，所以他们的权值都为0。
        http://www.iinterest.net/2010/05/08/css-specificity/

        2.以下关于Media Queries正确的说法是？（ABCD）
        A.Media Queries可以通过设备宽度来过滤设备
        B.Media Queries可以通过设备高度来过滤设备
        C.Media Queries可以通过设备是否横置或者竖置来过滤设备
        D.Media Queries可以通过设备类型以及设备像素比来过滤设备

        3.下面哪些情况可以触发reflow？（ABCEF）
        A.改变布局
        B.改变窗口大小
        C.改变任何元素的width/height
        D.改变background-color
        E.visibility:hidden
        F.改变font-size
        G.display:none
        在以下情况会发生reflow：
        1.改变窗囗大小
        2.改变文字大小
        3.添加/删除样式表
        4.内容的改变，如用户在输入框中敲字(这样也会-_-||)
        5.激活伪类，如:hover (IE里是一个兄弟结点的伪类被激活)
        6.操作class属性
        7.脚本操作DOM
        8.计算offsetWidth和offsetHeight
        9.设置style属性
        http://blog.sina.com.cn/s/blog_877284510101jo8l.html

        4.关于绝对定位，下面描述正确的是？（AD）
        A.绝对定位的元素位置是相对于距离它最近的那个已定位的祖先元素确定的
        B.绝对定位的包含块是viewport
        C.绝对定位元素脱离了文本流，对其后的元素不受其影响
        D.通过z-index属性控制绝对定位的叠放层级，默认为auto
        ??

        5.HTTP状态码表示暂时性转移的是？（D）
        A.200
        B.304
        C.403
        D.302

        1.下面代码的运行结果是？（C）
        for(var i=1;i<=3;i++){
        setTimeout(function(){console.log(i);},1000)
        };
        A.1,2,3
        B.1,1,1
        C.4,4,4
        D.3,3,3
        http://www.mamicode.com/info-detail-500673.html

        2.'abcdefg'.substring(2,3)的结果是？（C）
        A.cde
        B.b
        C.c
        D.bcd

        3.HTML是什么意思? （B）
        A)高级文本语言
        B)超文本标记语言
        C)扩展标记语言
        D)图形化标记语言

        4.浏览器针对于HTML文档起到了什么作用?（B）
        A)浏览器用于创建HTML文档
        B)浏览器用于查看HTML文档
        C)浏览器用于修改HTML文档
        D)浏览器用于删除HTML文档

        5.默认情况下，使用P标记会形成什么效果?（C）
        A)在文字P所在位置中加入8个空格
        B)P后面的文字会变成粗体
        C)开始新的一行
        D)P后面的文字会变成斜体

        6.哪个标记用于表示HTML文档的结束?（B）
        A)/BODY
        B)/HTML
        C)/TABLE
        D)/TITLE

        7.META元素的作用是什么?（B）
        A)META元素用于表达HTML文档的格式
        B)META元素用于指定关于HTML文档的信息
        C)META元素用于实现本页的自动刷新
        D)以上都不对

        8.我们在HTML页面中制作了一个图像，想要在鼠标指向这个图像时浮出一条提示信息，应该使用哪个参数做到?（C）
        A)POP
        B)SRC
        C)ALT
        D)MSG

        9.以下的哪一种颜色格式支持上百万种颜色，但是不支持无损压缩?（A）
        A)bmp
        B)jpg
        C)gif
        D)tif

        10.哪一个标记用于使HTML文档中表格里的单元格在同行进行合并?（）D
        A)cellspacing
        B)cellpadding
        C)rowspan
        D)colspan

        11.使用以下那一种元素可以将声音添加到网页里面?（B）
        A)sound
        B)bgsound
        C)music
        D)voice

        12.在<param>标签中，下列哪个属性用于给参数传递内容?（B）
        A)Address
        B)Value
        C)Amount
        D)Method

        13.超链接不能链接到下列哪个位置?（D）
        A)同一HTML文档内的位置
        B)磁盘上其他HTML文档
        C)Internet上HTML文档
        D)计算机，你与它之间没有通信链路

        14.下列那项技术可以用于帮助网页设计时使页面具有统一、专业的外观?（C）
        A)HTML
        B)DHTML
        C)CSS
        D)URL

        15.以下哪一个项目是用来访问web页的软件?（B）
        A)OutlookExpress
        B)Internet Explorer
        C)QQ
        D)FTP

        16.哪条命令用于使一行文本折行，而不是插入一个新的段落?（B）
        A)<TD>
        B)<BR>
        C)<P>
        D)<H1>

        17.世界上最大的计算机网络是：（D）
        A)WWW
        B)WAN
        C)MAN
        D)Internet

        18.下面关于HTML说法错误的是?（B）

        A)HTML是一种标记语言

        B)HTML可以控制页面和内容的外观

        C)HTML文档总是静态的

        D)HTML文档是超文本文档

        19.语句A：HTML文档必须包括“头”和“主体”两部分;语句B：HTML文档的扩展名为.htm或.html以下说法正确的是：（D）

        A)两句都对

        B)两句都错

        C)只有A对

        D)只有B对

        20.B
        21.我们想要让当前页面的背景色为蓝色，应该使用哪一句代码来描述此种设置?（A）

        A)bgcolor="blue"

        B)bgground="blue"

        C)backcolor="blue"

        D)background="blue"

        22.我们想要让当前整个表格的背景色为蓝色，应该使用哪一句代码来描述此种设置?（A）
        A)bgcolor="blue"
        B)bgground="blue"
        C)backcolor="blue"
        D)background="blue"

        23.我们想要让表格的边框在页面中一定不显示出来，用什么方法可以做到呢?（C）
        A)bgcolor="white"
        B)bgcolor="null"
        C)border="0"
        D)bordercolor="white"

        24.我们想要将表格的宽度设置为100个像素，应该怎么办?（A）
        A)width="100"
        B)border="100"
        C)length="100"
        D)maxlength="100"

        25.我们想要将表格中的文字放在靠上居中的位置，应该怎么办?（D）
        A)align="middle"align="top"
        B)align="center"align="top"
        C)valign="middle"align="top"
        D)valign="top"align="center"

        26.我们发现为页面中的图像加入超链接后，默认情况下都带有一道黑框，有什么方法可以去掉它呢?（B）
        A)bordercolor="white"
        B)border="0"
        C)style="no border"
        D)style="0"

        27.我们想要将表格中加入的图像充满整个单元格，使用哪种方式可以做到?（D）
        A)size="100"
        B)size="100%"
        C)width="100"
        D)width="100%"

        1.["1", "2", "3"].map(parseInt)返回的结果是？（D）
        A：["1", "2", "3"]
        B：[1, 2, 3]
        C：[0, 1, 2]
        D：other
        解释：该题目的答案为：[1, NaN, NaN]；即选择D。该题用到了map与parseInt；parseInt() 函数的语法是parseInt(string, radix)；
        string 必需。要被解析的字符串。
        radix可选。表示要解析的数字的基数。该值介于 2 ~ 36 之间。
        如果省略该参数或其值为 0，则数字将以 10 为基础来解析。如果它以 “0x” 或 “0X” 开头，将以 16 为基数。
        如果该参数小于 2 或者大于 36，则 parseInt() 将返回 NaN。

        实际上 map里面的callback函数接受的是三个参数 分别为元素 下标和数组 (虽然很多情况只使用第一个参数)

        回调函数的语法如下所示：
        function callbackfn(value, index, array1)
        可使用最多三个参数来声明回调函数。

        2.[typeof null, null instanceof Object]返回的结果？（A）
        A: ["object", false]

        B: [null, false]

        C: ["object", true]

        D: other
        考察typeof运算符和instanceof运算符，上MDN上看一下typeof运算符，一些基础类型的结果为：

        Undefined "undefined"Null "object"Boolean "boolean"Number "number"String "string"Any other object "object"Array "object"
        null instanceof 任何类型 都是false

        3.[ [3,2,1].reduce(Math.pow), [].reduce(Math.pow)]返回的结果？（A）
        A: an error

        B: [9, 0]

        C: [9, NaN]

        D: [9, undefined]
        解答：这题考的Math.pow和Array.prototype.reduce

        Math.pow(base, exponent)接受两个参数：基数、需要计算的次方

        reduce传递给其作为参数的函数几个值：

        previousValue：上一次计算的结果
        currentValue：当前元素的值
        index： 当前元素在数组中的位置
        array：整个数组
        reduce本身接受两个参数，callback和initialValue，分别是reduce的回调函数和计算初始值--也就是第一次reduce的callback被调用时的previousValue的值，默认为0

        reduce在数组为空且没有定义initialValue时，会抛出错误，在火狐下报错为：TypeError: reduce of empty array with no initial value
        所以选A

        4.var val = 'smtg';
        console.log('Value is ' + (val === 'smtg') ? 'Something' : 'Nothing');返回的结果？（D）
        A: Value is Something

        B: Value is Nothing

        C: NaN

        D: other
        解答：这题考的javascript中的运算符优先级，这里'+'运算符的优先级要高于'?'所以运算符，实际上是 'Value is true'?'Something' : 'Nothing'，当字符串不为空时，转换为bool为true，所以结果为'Something'，选D

        5.var name = 'World!';
        (function () {    if (typeof name === 'undefined') {        var name = 'Jack';        console.log('Goodbye ' + name);
        } else {        console.log('Hello ' + name);
        }
        })();
        返回的结果是？（A）
        A: Goodbye Jack

        B: Hello Jack

        C: Hello undefined

        D: Hello World
        这题考的是javascript作用域中的变量提升，javascript的作用于中使用var定义的变量都会被提升到所有代码的最前面，于是乎这段代码就成了：

        var name = 'World!';
        (function () {
        var name;//现在还是undefined
        if (typeof name === 'undefined') {        name = 'Jack';
        console.log('Goodbye ' + name);
        } else {
        console.log('Hello ' + name);
        }
        })();
        这样就很好理解了，typeof name === 'undefined'的结果为true，所以最后会输出'Goodbye Jack'，选A

        6.var END = Math.pow(2, 53);var START = END - 100;var count = 0;for (var i = START; i <= END; i++) {
        count++;}
        console.log(count);
        返回的结果是？（D）
        A: 0

        B: 100

        C: 101

        D: other
        解答：这题考查javascript中的数字的概念：首先明确一点，javascript和其他语言不同，仅有一种数字，IEEE 754标准的64位浮点数，能够表示的整数范围是-2^53~2^53（包含边界值），所以Math.pow(2, 53)即为javascript中所能表示的最大整数，在最大整数在继续增大就会出现精度丢失的情况，END + 1 的值其实是等于END的，这也就造成了死循环。

        7.var ary = [0,1,2];
        ary[10] = 10;
        ary.filter(function(x) { return x === undefined;});
        返回的结果是？（C）
        A: [undefined × 7]

        B: [0, 1, 2, 10]

        C: []

        D: [undefined]
        解答：选择C Array.prototype.filter is not invoked for the missing elements（缺少的元素，不会调用过滤器）。

        8.var two   = 0.2var one   = 0.1var eight = 0.8var six   = 0.6
        [two - one == one, eight - six == two]
        返回的结果是？（C）
        A: [true, true]

        B: [false, false]

        C: [true, false]

        D: other
        浮点数计算时的精度丢失问题。.chrome中计算出来的结果：[0.1, 0.20000000000000007]，也就是[true, false]，最终答案选C。

        9.function showCase(value) {    switch(value) {    case 'A':        console.log('Case A');        break;    case 'B':        console.log('Case B');        break;    case undefined:        console.log('undefined');        break;    default:        console.log('Do not know!');
        }
        }
        showCase(new String('A'));
        返回的结果是？（C）
        A: Case A

        B: Case B

        C: Do not know!

        D: undefined

        解答：此题考察的是关于new string（）；其实就是new一个实例对象。要匹配的也是object；所以答案是Do not know!，选择C。

        10.function showCase2(value) {    switch(value) {    case 'A':        console.log('Case A');        break;    case 'B':        console.log('Case B');        break;    case undefined:        console.log('undefined');        break;    default:        console.log('Do not know!');
        }
        }
        showCase(String('A'));
        返回的结果是？（A）
        A: Case A

        B: Case B

        C: Do not know!

        D: undefined
        参考网页：https://mp.weixin.qq.com/s/TvW48Oq-aCGwudjZ5iBS2w
    </div>
</template>

<script>
    export default {
        name: "subject"
    }
</script>

<style scoped>

</style>