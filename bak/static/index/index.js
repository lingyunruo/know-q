
let button = $('#submit');
let author = $('#author');
let content = $('#content');
let list = $('#list');
let exit = $('#exit');
let article = $('#articleList');

getList();
getArticleList();

function getList(data) {
    $.ajax({
        url: '/submit',
        method: 'post',
        data: data,
        success: function(res) {
            list.html(res);
            // author.val('');
            content.val('');
        }
    });
}

function getArticleList() {
    $.ajax({
        url:'/get_article',
        method: 'post',
        success: function(res) {
            if(res.success) {
                article.html(res.content);
            }
        }
    });
}

button.on('click', function() {
    let authorStr = author.val().trim();
    let contentStr = content.val().trim();

    if(!authorStr) {
        alert('请先登陆');
        return;
    }
    else if(!contentStr) {
        alert('请输入内容');
        return;
    }
    getList({
        author: authorStr,
        content: contentStr
    });
});


list.on('click', function(e) {
    if(e.target.className === 'delete-item') {
        let parentNode = e.target.parentNode;
        let id = parentNode.dataset.id;

        $.ajax({
            url: '/delete',
            method: 'post',
            data: {
                id: id
            },
            success: function(res) {
                list.html(res);
            }
        });
    }
});

exit.on('click', function(e) {
    $.ajax({
        url: '/logout',
        method: 'post',
        success: function (res) {
            if(res.success) {
                window.location.reload();
            }
        }
    });
});