 // 2. This code loads the IFrame Player API code asynchronously.
 var tag = document.createElement('script');

 tag.src = "https://www.youtube.com/iframe_api";
 var firstScriptTag = document.getElementsByTagName('script')[0];
 firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

 // 3. This function creates an <iframe> (and YouTube player)
 //    after the API code downloads.

 function onYouTubeIframeAPIReady() {
  new YT.Player('player', {
    
     videoId: 'zYu1I1NtPBg',//최초재생할 유튜브 영상 ID
     playerVars:{
      autoplay:true,//자동 재생 유무
      loop:true,//반복 재생 유무
      playlist:'zYu1I1NtPBg'
     },
     events:{
      onReady:function(event){//event 동영상 재생되는 함수 그자체
        event.target.mute()//음소거
      }
     }
   });
 }