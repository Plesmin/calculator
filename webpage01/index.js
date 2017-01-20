$(document).ready(function(){

    console.log('ready');

    var container = $('.articles-container');

    var items = [{
        h1: 'Titel',
        p: 'Tekst!',
        img: 'https://media.giphy.com/media/qDWSxfium1oRO/giphy.gif',
    },{
        h1: 'Titel 2',
        p: 'blabla',
        list: [{
            name: 'Item 1'
        },{
            name: 'Item 2'
        },{
            name: 'Item 2'
        },{
            name: 'Item 2'
        },{
            name: 'Item 2'
        }]
    },{
        h1: 'Kitty',
        p: 'Kitty kitty cat',
        img: 'http://eskipaper.com/images/kitty-cat-1.jpg',
    }];

    function show( i ){
        var post = items[i];

        var article = tag('article');

        var h1 = tag('h1', post.h1);
        article.append(h1);

        var p = tag('p', post.p);
        article.append(p);
        
        if(post.img){
            var img = tag('img',post.img);
            article.append(img);      
        }else if(post.list){
            var ul = tag('ul');
            var list = post.list;

            for(var ii in list){
                var item = list[ii];
                var li = tag('li', item.name);
                ul.append(li);
            }

            article.append(ul);      
        }

        container.append(article);
    }

    show(2);
    show(1);
    

});