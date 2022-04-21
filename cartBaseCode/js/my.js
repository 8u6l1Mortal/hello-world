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
    //渲染数组
    renderer()
    function renderer() {
        // 获取tbody
        // 1-2循环创建tr，将tr放到tbody
        //将第一个单选创建加入
        var tbody = $("tbody")
        for (var i = 0; i < cartList.length; i++) {
            var tr = $('<tr align="center"></tr>')
            tr.html('<td><input class="check" type="checkbox"></td>')
            tbody.append(tr)

            // 遍历数组里的对象
            for (var k in cartList[i]) {
                var td = $("<td></td>")

                //根据遍历到的对象里的属性名，一一匹配，然后设置对应的内容以及添加类名
                if (k == 'id') {
                    td.html(cartList[i][k])
                } else if (k == 'name') {
                    td.html(cartList[i][k])
                } else if (k == 'pic') {
                    td.html('<img src="' + cartList[i][k] + '" style="width:70px;height:70px;" alt="">')
                    td.addClass("img")
                } else if (k == 'price') {
                    td.html(cartList[i][k])
                    td.addClass("price")
                } else if (k == 'number') {
                    td.html('<span class="reduce">-</span><input value="' + cartList[i][k] + '" type="text"><span class="add">+</span>')
                    td.addClass("num")
                } else {
                    $(".check").eq(i).prop("checked", cartList[i][k])
                    td.addClass("account")
                }

                tr.append(td)
            }
            //删除按键
            var td = $('<td></td>')
            td.html('<button class="del">删除</button>')
            tr.append(td)
            //居中样式
            tr.css("textAlign", "center")
        }
        //遍历 先将小计里的数据填上
        $(".account").each(function (index, ele) {
            var vuu = $(this).siblings(".price").text() * 1
            $(this).text(vuu.toFixed(2))
        })
    }//渲染结束

    // 加数量 算小计
    $(".num .add").click(function () {
        //只要被点击的了，就让当前单选被选中
        $(this).parents("tr").find(".check").prop("checked", true)
        //点击后 ，先获取当前的值，然后递增，最后重新设置数量
        var addAll = $(this).siblings("input").val() * 1
        addAll++;
        $(this).siblings("input").val(addAll)

        //根据数量，小计价格变化 先获取当前的值，然后递增，最后重新设置小计价格
        var monAll = $(this).parents("tr").find(".price").text() * 1
        var all = (addAll * monAll).toFixed(2)
        $(this).parents("tr").find(".account").text(all)
        getSum()


    })
    // 减数量 算小计
    $(".num .reduce").click(function () {
        $(this).parents("tr").find(".check").prop("checked", true)
        var addAll = $(this).siblings("input").val() * 1
        if (addAll == 1) {
            return false
        }
        addAll--;
        $(this).siblings("input").val(addAll)

        var monAll = $(this).parents("tr").find(".price").text() * 1
        var all = (addAll * monAll).toFixed(2)
        $(this).parents("tr").find(".account").text(all)
        getSum()


    })

    //手动修改数量 算小计
    $(".num input").change(function () {
        $(this).parents("tr").find(".check").prop("checked", true)
        var nums = $(this).val() * 1
        if (nums <= 1) {
            nums = 1
            $(this).val(nums)
        }
        var monAll = $(this).parents("tr").find(".price").text() * 1
        var all = (nums * monAll).toFixed(2)
        $(this).parents("tr").find(".account").text(all)
        getSum()


    })

    //全选按钮
    $("thead label input").change(function () {
        var check = $(this).prop('checked')
        $("tbody tr .check").prop('checked', check)
        getSum()

    })

    //单选按钮
    $(".check").change(function () {
        if ($(".check:checked").length == $(".check").length) {
            $("thead label input").prop('checked', true)
            getSum()
        } else {
            $("thead label input").prop('checked', false)
            getSum()
        }
    })

    getSum()
    //本案例的重点
    function getSum() {
        var moneysall = 0 //储存单价总数
        var numsall = 0
        var leng = $(".check:checked").length//获取全选的长度
        console.log(leng);
        if (leng > 0) {
            $('.check').each(function () {
                if ($(this).is(":checked")) {
                    var money = $(this).parents("tr").find(".account").text() * 1
                    var num = $(this).parents("tr").find(".num input").val() * 1

                    moneysall += money
                    numsall += num
                }
                $(".totalPrice>i").text(moneysall.toFixed(2))
                $(".totalNum>i").text(numsall)
            })
        } else {
            moneysall = 0
            numsall = 0
            $(".totalPrice>i").text(moneysall.toFixed(2))
            $(".totalNum>i").text(numsall)

        }
    }

    //单机删除当前商品，总价跟随变化
    $(".del").click(function () {
        $(this).parents("tr").remove()
        getSum()
    })
})