//$(function(){
$(document).ready(function(){//ֱ�����еĺ���
	
 var tag = false,dx = 0,left = 0,bgleft = 0;
 $('.progress_btn').mousedown(function(e) {
  dx = e.pageX - left;
  tag = true;
 });
 $(document).mouseup(function(e) {
  tag = false;
 });
 $('.progress_btn').mousemove(function(e) {//����ƶ�
  if (tag) {
   left = e.pageX - dx;
   if (left <= 0) {
    left = 0;
   }else if (left > 300) {
    left = 300;
   }
   $('.progress_btn').css('left', left);
   $('.progress_bar').animate({width:left},1);
   $('.text').html(parseInt((left/300)*100) + '%');
  }
 });
 $('.progress_bg').click(function(e) {//�����
  if (!tag) {
   bgleft = $('.progress_bg').offset().left;
   left = e.pageX - bgleft;
   if (left <= 0) {
		left=0;
   }else if (left > 300) {
    left = 300;
   }
   $('.progress_btn').css('left', left);
   $('.progress_bar').animate({width:left},300);//
   $('.text').html(parseInt((left/300)*100) + '%');
  }
//  alert(left);
 });
});