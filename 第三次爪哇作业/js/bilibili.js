//获取元素
var oSlip=document.getElementsByClassName("smryCttCrsl-imgList")[0];
var oPic=document.getElementsByClassName("pic")[0];//图片
// var oBtn=document.getElementsByClassName("btn");//左右按钮
var pList=document.getElementById("point-list")//获得盒子id
var aPoints=pList.getElementsByTagName("smryCttCrsl-imgList li");//点的集合
//单击指示点切换
for(var i=0;i<aPoints.length;i++)
{
    aPoints[i].index=i;//给每一个对象添加自定义属性值
    aPoints[i].onclick=function()
    {
        oPic.src="./img/smryCtt-crsl"+this.index+".jpg";
        //清除所有点的样式
        for(var j=0;j<aPoints.length;j++)
        {
            aPoints[j].className="";
            aPoints[this.index].className="smryCttCrsl-activeDot";
        }
    }
}
// //单击右按钮
// var index=0;//图片初始值
// oBtn[1].onclick=function()
// {
//     index>=5?index=0:index++;
//     oPic.src="./img/smryCtt-crsl"+index+".jpg";
//     for(var j=0;j<aPoints.length;j++)
//         {
//             aPoints[j].className="";
//             aPoints[index].className="consent";
//         }
// }
// //单击左按钮
// oBtn[0].onclick=function()
// {
//     index<=0?index=5:index--;
//     oPic.src="img/slip-img"+index+".jpg";
//     for(var j=0;j<aPoints.length;j++)
//         {
//             aPoints[j].className="";
//             aPoints[index].className="consent";
//         }
// }
//添加定时器
var timer;
timer=setInterval(next,3000)
//下一张
function next()
{
    index>=5?index=0:index++;
    oPic.src="img/slip-img"+index+".jpg";
    for(var j=0;j<aPoints.length;j++)
        {
            aPoints[j].className="";
            aPoints[index].className="consent";
        }
}
//移入计时器停止
oSlip.onmouseover=function()
{
    clearInterval(timer);
}
oSlip.onmouseout=function()
{
    timer=setInterval(next,3000);
}