// console.log('test');

// 写真を変える
$('.fa-angle-left').on('click', function(){
    let num = $('.topimg').attr('src');
    // ファイル形式を削除
    num = num.split('.jpg');
    // 現在の写真の番号を取得
    let photonum = num[0].slice(-1);
    // 型変換
    photonum = parseInt(photonum, 10);
    // console.log(photonum);
    // 条件分岐
    if(photonum == 3){
        $('.topimg').attr('src', 'img/img0.jpg');
    }else{
        $('.topimg').attr('src', 'img/img'+(photonum+1)+'.jpg');
    }
})

$('.fa-angle-right').on('click', function(){
    let num = $('.topimg').attr('src');
    // ファイル形式を削除
    num = num.split('.jpg');
    // 現在の写真の番号を取得
    let photonum = num[0].slice(-1);
    // 型変換
    photonum = parseInt(photonum, 10);
    // console.log(photonum);
    // 条件分岐
    if(photonum == 0){
        $('.topimg').attr('src', 'img/img3.jpg');
    }else{
        $('.topimg').attr('src', 'img/img'+(photonum-1)+'.jpg');
    }
})

// 時間によって文字色を変える
let count = 0;

var countup = function(){
    // 日付取得
    let date = new Date();
    // 秒数取得
    let second = date.getSeconds();
    $('.text2').css('font-size', (second*5));
    count++;
}
// クリアインターバル
var id = setInterval(function(){
    countup();
    if(count >= 5){
    clearInterval(id); //idをclearIntervalで指定している
    $('.text2').css('font-size', '14px');
}}, 1000);

// ランダム関数
let random = Math.floor(Math.random()* 100);
if(random >= 80){
    $('#luckyzone').attr('src', 'img/lucky.jpg');
}