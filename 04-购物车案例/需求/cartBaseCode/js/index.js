$(function () {
    var cartList = [
        {
            id: 11,
            name: 'OPPO Find X3',
            pic: 'https://img11.360buyimg.com/seckillcms/s280x280_jfs/t1/182306/24/14268/71347/60f150b9Ebb18e84c/b944d55c5d33bf82.jpg.webp',
            price: 3469,
            number: 1,
            ischecked: false
        },
        {
            id: 12,
            name: '卡西欧',
            pic: 'https://img30.360buyimg.com/seckillcms/s260x260_jfs/t1/209132/5/20262/96415/6254dbcdEc4b991fc/0f01c27574121b97.jpg.webp',
            price: 6653,
            number: 1,
            ischecked: true
        },
        {
            id: 13,
            name: '乐乐趣宝宝点读认知发声书',
            pic: 'https://img12.360buyimg.com/babel/s320x320_jfs/t1/177821/34/19497/131634/611b215bE14339945/9cc3628df54baf85.jpg!cc_320x320.webp',
            price: 122,
            number: 1,
            ischecked: false
        },
        {
            id: 14,
            name: '漫步者耳机',
            pic: 'https://img20.360buyimg.com/jdcms/s300x300_jfs/t1/221833/36/13333/106709/6232eca8Efae61da8/cb90fc4344c90a1b.jpg.webp',
            price: 2431,
            number: 1,
            ischecked: true
        }
    ]

    for (var i = 0; i < cartList.length; i++) {
        var li = cartList[i]
        // li为每一项数据
        console.log(li)
        // 生成tr
        var tr = document.createElement('tr')
        tr.setAttribute('align', 'center')
        // 生成复选框
        var inputTd = document.createElement('td')
        var input = document.createElement('input')
        input.setAttribute('type', 'checkbox')
        $(input).addClass('check')
        inputTd.append(input)
        // 复选框放入tr
        tr.append(inputTd)
        // 生成序号td
        var countTd = document.createElement('td')
        // 取序号数据
        countTd.innerHTML = li.id
        // 序号放入tr
        tr.append(countTd)
        console.log(tr)
        // 将tr放入tbody
        var dom = $('tbody')
        dom.append(tr)
    }
})