

let userId = $('#userId');
let pwd = $('#password');
let btn = $('#loginButton');
let reg = $('#register');


btn.on('click', function() {
    let userIdV = userId.val();
    let pwdV = pwd.val();

    if(!userIdV) {
        alert('请输入用户名');
        return;
    }
    else if(!pwdV) {
        alert('请输入密码');
        return;
    }

    $.ajax({
        url: '/login',
        method: 'post',
        data: {
            userId: userIdV,
            pwd: pwdV
        },
        success: function(res) {
            if(res.success) {
                window.location.reload();
            }
            else {
                alert(res.msg);
            }
        }
    });

});

reg.on('click', function() {
    window.location.href = '/register_page';
});