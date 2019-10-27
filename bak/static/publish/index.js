let publish = $('#publish');
let input = $('#input');


publish.on('click', function() {

    $.ajax({
        url: '/publish_article',
        method: 'post',
        data: {
            content: input.val()
        },
        success: function(res) {
            if(res.success) {
                alert('发表成功');
            }
        }
    });

});