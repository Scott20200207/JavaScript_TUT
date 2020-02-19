//队列
function Queue() {
    //属性
    this.items = []

}

//方法
// 添加
Queue.prototype.enqueue = function (elememnt) {
    this.items.push(elememnt)
}

// 从队列中删除前端元素
Queue.prototype.dequeue = function () {
    return this.items.shift()
}

// 查看前端元素
Queue.prototype.front = function () {
    return this.items[0]
}

// 查看队列是否为空
Queue.prototype.isEmpty = function () {
    return this.items.length == 0
}

//队列长度
Queue.prototype.size = function () {
    return this.items.length
}

Queue.prototype.toString = function () {
    var resultStr = ""
    for (let i = 0; i < this.items.length; i++) {
        resultStr += this.items[i]+ " ";
        
    }
}