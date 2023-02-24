let queue = []
class node {
    constructor(val) {
        this.data = val

    }

}
class space {
    constructor(data, val) {
        this.data = new node(data)
        this.root = val;
        this.child = []
    }
    // addchild=(data)=>{
    //  this.child.push(new space(data,this))
    // }
}

let s = new space([0, 0], null);
queue.push([0, 0])
let size = [7, 5]
let goal = [0, 3]

let generate = (obj) => {
    let currSize = obj.data.data
    if (currSize[0] == goal[0] && currSize[1] == goal[1]) {
        return
    }


    // full a
    let childval = [size[0], currSize[1]]

    let flag = true;
    queue.forEach((o) => {
        if (o[0] == childval[0] && o[1] == childval[1]) {
            flag = false
        }
    })
    if (flag) {
        queue.push(childval)
        obj.child.push(new space(childval, obj))

    }
    else if (childval[0] == goal[0] && childval[1] == goal[1]) {
        obj.child.push(new space(childval, obj))
    }

    // full b
    childval = [currSize[0], size[1]]
    flag = true;
    queue.forEach((o) => {
        if (o[0] == childval[0] && o[1] == childval[1]) {
            flag = false
        }
    })
    if (flag) {
        queue.push(childval)
        obj.child.push(new space(childval, obj))
    }
    else if (childval[0] == goal[0] && childval[1] == goal[1]) {
        obj.child.push(new space(childval, obj))
    }

    // transfer a to b


    let num = size[1] - currSize[1]
    if (currSize[0] <= num) {
        childval = [0, (currSize[0] + currSize[1])]
    }
    else {
        childval = [currSize[0] - num, currSize[1] + num]
    }


    flag = true;
    queue.forEach((o) => {
        if (o[0] == childval[0] && o[1] == childval[1]) {
            flag = false
        }
    })
    if (flag) {
        queue.push(childval)
        obj.child.push(new space(childval, obj))
    }
    else if (childval[0] == goal[0] && childval[1] == goal[1]) {
        obj.child.push(new space(childval, obj))
    }

    // transfer b to a

    num = size[0] - currSize[0]
    if (currSize[1] <= num) {
        childval = [currSize[0] + currSize[1], 0]
    }
    else {
        childval = [currSize[0] + num, currSize[1] - num]

    }
    flag = true;
    queue.forEach((o) => {
        if (o[0] == childval[0] && o[1] == childval[1]) {
            flag = false
        }
    })
    if (flag) {
        queue.push(childval)
        obj.child.push(new space(childval, obj))
    }
    else if (childval[0] == goal[0] && childval[1] == goal[1]) {
        obj.child.push(new space(childval, obj))
    }




    //  empty a
    childval = [0, currSize[1]]

    flag = true;
    queue.forEach((o) => {
        if (o[0] == childval[0] && o[1] == childval[1]) {
            flag = false
        }
    })
    if (flag) {
        queue.push(childval)
        obj.child.push(new space(childval, obj))
    }
    else if (childval[0] == goal[0] && childval[1] == goal[1]) {
        obj.child.push(new space(childval, obj))
    }

    // empty b
    childval = [currSize[0], 0]
    flag = true;
    queue.forEach((o) => {
        if (o[0] == childval[0] && o[1] == childval[1]) {
            flag = false
        }
    })
    if (flag) {
        queue.push(childval)
        obj.child.push(new space(childval, obj))
    }
    else if (childval[0] == goal[0] && childval[1] == goal[1]) {
        obj.child.push(new space(childval, obj))
    }
    obj.child.forEach((i) => {
        generate(i)
    })
}

generate(s)

let visitnode=[]
visitnode.push(s);

let bfs=()=>{

    while(visitnode.length!=0){
       let node= visitnode[0].data
       if(node.data[0]==goal[0] && node.data[1]==goal[1])
       {
        return visitnode[0];
       }
       visitnode[0].child.forEach((childnode)=>{
        visitnode.push(childnode)
       })
       visitnode.shift()
    }

}
let result=bfs();
let ans=[]

if(result!=null)
{
while(result.root!=null){
    ans.push(result.data.data)
    result=result.root
}
ans.push(result.data.data)
console.table(ans.reverse())
}
else{
console.log("no solution")
}