$('#loginButton').on('click',function(){
    if($('#loginName').val() != ""){
        logged = $('#loginName').val();
        $('.credentials').hide();
        $('.mainContainer').show();
    }else{
        alert('Invalid Name');
    }
})

var rootRef = new Firebase("https://wired.firebaseio.com/");
//var userRef = rootRef.child("users");
//userRef.push({
//    name:"Jeremy",
//    type:"admin",
//});

var msgRef = rootRef.child('messages');
msgRef.on('child_added',function(snapshot,prevChild){
    data = snapshot.val();
    $('.chatContent ul').append('<li>'+data.name+':'+data.msg+'</li>')
})
$('#sendMsg').on('click',function(){
    var text = $('#textMsg').val();
    msgRef.push({
        msg:text,
        name:logged,
    });
    $('#textMsg').val('');
})