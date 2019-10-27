
let reg = $('#register');
let userId = $('#userId');
let name = $('#name');
let pwd = $('#password');



reg.on('click', function() {
    let idV = userId.val();
    let nameV = name.val();
    let pwdV = pwd.val();

    if(!idV) {
        alert('请输入用户名');
        return;
    }
    else if(!name) {
        alert('请输入真实姓名');
        return;
    }
    else if(!pwd) {
        alert('请输入密码');
        return;
    }

    $.ajax({
        url: '/register_user',
        method: 'post',
        data: {
            id: idV,
            name: nameV,
            pwd: pwdV
        },
        success: function(res) {
            if(res.success) {
                alert('注册成功');
                window.location.href = '/';
            }
            else {
                alert(res.msg);
            }
        }
    });
});