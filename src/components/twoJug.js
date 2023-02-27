// let twojug=(sizeInput,goalInput)=>{
// let queue = []
// class node {
//     constructor(val) {
//         this.data = val
//         // console.log(this.data)

//     }
// }
// // 
// // 
// class space {
//     constructor(data, val) {
//         this.data = new node(data)
//         this.root = val;
//         this.child = []
//     }
  
// }

// let s = new space([0, 0], null);
// queue.push([0, 0])
// // let size = [3, 5]
// // let goal = [0, 4]
// let size=sizeInput
// let goal=goalInput

// let m=new Map();
// let generate = (obj) => {
//     let currSize = obj.data.data
//     console.log(currSize)
//     if (currSize[0] === goal[0] && currSize[1] === goal[1]) {
//         return
//     }


//     // full a
//     let childval = [size[0], currSize[1]]

//     // let flag = true;
//     if(m.has(`${childval[0]},${childval[1]}`))
//     {
//         if (childval[0] === goal[0] && childval[1] === goal[1]) {
//             obj.child.push(new space(childval, obj))
//         }

//     }
//     else{
//         // console.log(m)
//         m.set(`${childval[0]},${childval[1]}`,childval)
//         obj.child.push(new space(childval, obj))
//     }
//     // queue.forEach((o) => {
//     //     if (o[0] === childval[0] && o[1] === childval[1]) {
//     //         flag = false
//     //     }
//     // })
//     // if (flag) {
//     //     queue.push(childval)
//     //     obj.child.push(new space(childval, obj))

//     // }
//     // else if (childval[0] === goal[0] && childval[1] === goal[1]) {
//     //     obj.child.push(new space(childval, obj))
//     // }

//     // full b
//     childval = [currSize[0], size[1]]
//     // flag = true;

//     if(m.has(`${childval[0]},${childval[1]}`))
//     {
//         if (childval[0] === goal[0] && childval[1] === goal[1]) {
//             obj.child.push(new space(childval, obj))
//         }

//     }
//     else{
//         // console.log(m)
        
//         m.set(`${childval[0]},${childval[1]}`,childval)
//         obj.child.push(new space(childval, obj))
//     }

//     // queue.forEach((o) => {
//     //     if (o[0] === childval[0] && o[1] === childval[1]) {
//     //         flag = false
//     //     }
//     // })
//     // if (flag) {
//     //     queue.push(childval)
//     //     obj.child.push(new space(childval, obj))
//     // }
//     // else if (childval[0] === goal[0] && childval[1] === goal[1]) {
//     //     obj.child.push(new space(childval, obj))
//     // }

//     // transfer a to b


//     let num = size[1] - currSize[1]
//     if (currSize[0] <= num) {
//         childval = [0, (currSize[0] + currSize[1])]
//     }
//     else {
//         childval = [currSize[0] - num, currSize[1] + num]
//     }


//     // flag = true;
//     // queue.forEach((o) => {
//     //     if (o[0] === childval[0] && o[1] === childval[1]) {
//     //         flag = false
//     //     }
//     // })
//     // if (flag) {
//     //     queue.push(childval)
//     //     obj.child.push(new space(childval, obj))
//     // }
//     // else if (childval[0] === goal[0] && childval[1] === goal[1]) {
//     //     obj.child.push(new space(childval, obj))
//     // }
//     if(m.has(`${childval[0]},${childval[1]}`))
//     {
//         if (childval[0] === goal[0] && childval[1] === goal[1]) {
//             obj.child.push(new space(childval, obj))
//         }

//     }
//     else{
//         // console.log(m)
//         m.set(`${childval[0]},${childval[1]}`,childval)
//         obj.child.push(new space(childval, obj))
//     }

//     // transfer b to a

//     num = size[0] - currSize[0]
//     if (currSize[1] <= num) {
//         childval = [currSize[0] + currSize[1], 0]
//     }
//     else {
//         childval = [currSize[0] + num, currSize[1] - num]

//     }
//     // flag = true;
//     // queue.forEach((o) => {
//     //     if (o[0] === childval[0] && o[1] === childval[1]) {
//     //         flag = false
//     //     }
//     // })
//     // if (flag) {
//     //     queue.push(childval)
//     //     obj.child.push(new space(childval, obj))
//     // }
//     // else if (childval[0] === goal[0] && childval[1] === goal[1]) {
//     //     obj.child.push(new space(childval, obj))
//     // }
//     if(m.has(`${childval[0]},${childval[1]}`))
//     {
//         if (childval[0] === goal[0] && childval[1] === goal[1]) {
//             obj.child.push(new space(childval, obj))
//         }

//     }
//     else{
//         // console.log(m)
//         m.set(`${childval[0]},${childval[1]}`,childval)
//         obj.child.push(new space(childval, obj))
//     }



//     //  empty a
//     childval = [0, currSize[1]]

//     // flag = true;
//     // queue.forEach((o) => {
//     //     if (o[0] === childval[0] && o[1] === childval[1]) {
//     //         flag = false
//     //     }
//     // })
//     // if (flag) {
//     //     queue.push(childval)
//     //     obj.child.push(new space(childval, obj))
//     // }
//     // else if (childval[0] === goal[0] && childval[1] === goal[1]) {
//     //     obj.child.push(new space(childval, obj))
//     // }
//     if(m.has(`${childval[0]},${childval[1]}`))
//     {
//         if (childval[0] === goal[0] && childval[1] === goal[1]) {
//             obj.child.push(new space(childval, obj))
//         }

//     }
//     else{
//         // console.log(m)
//         m.set(`${childval[0]},${childval[1]}`,childval)
//         obj.child.push(new space(childval, obj))
//     }

//     // empty b
//     childval = [currSize[0], 0]
//     // flag = true;
//     // queue.forEach((o) => {
//     //     if (o[0] === childval[0] && o[1] === childval[1]) {
//     //         flag = false
//     //     }
//     // })
//     // if (flag) {
//     //     queue.push(childval)
//     //     obj.child.push(new space(childval, obj))
//     // }
//     // else if (childval[0] === goal[0] && childval[1] === goal[1]) {
//     //     obj.child.push(new space(childval, obj))
//     // }
//     if(m.has(`${childval[0]},${childval[1]}`))
//     {

//         if (childval[0] === goal[0] && childval[1] === goal[1]) {
//             obj.child.push(new space(childval, obj))
//         }

//     }
//     else{

//         // console.log(m)
//         m.set(`${childval[0]},${childval[1]}`,childval)
//         obj.child.push(new space(childval, obj))
//     }
//     if(obj.child.length!==0){
//     obj.child.forEach((i) => {
//         // console.log(i)
//         generate(i)
//     })
// }
// }

// generate(s)

// let visitnode=[]
// visitnode.push(s);


// let bfs=()=>{
//     while(visitnode.length!==0){
//        let node= visitnode[0].data
//        if(node.data[0]===goal[0] && node.data[1]===goal[1])
//        {
//         return visitnode[0];
//        }
//        visitnode[0].child.forEach((childnode)=>{
//         visitnode.push(childnode)
//        })
//        visitnode.shift()
//     }
// }
// let result=bfs();
// let ans=[]

// if(result!==null)
// {
// while(result.root!==null){
//     ans.push(result.data.data)
//     result=result.root
// }
// ans.push(result.data.data)
// // console.table(ans.reverse())

// return ans.reverse()
// }
// else{
// console.log("no solution")
// return []
// }
// }

// export default twojug;
// // twojug([5,3],[4,0])

let twojug=(sizeInput,goalInput)=>{
    let queue = []
    class node {
        constructor(a,b) {
            this.a = a
            this.b = b
    
        }
    }
    
    // 
    class space {
        constructor(data, val) {
            this.data = new node(data[0],data[1])
            this.root = val;
            this.child = []
        }
      
    }
    
    let s = new space([0, 0], null);
    queue.push([0, 0])
    // let size = [3, 5]
    // let goal = [0, 4]
    let size=sizeInput
    let goal=goalInput
    
    let generate = (obj) => {

        let currSize = [obj.data.a,obj.data.b]
        if (currSize[0] === goal[0] && currSize[1] === goal[1]) {
            return
        }
    
    
        // full a
        let childval = [Number(size[0]), currSize[1]]
    
        let flag = true;
        queue.forEach((o) => {
            if (o[0] === childval[0] && o[1] === childval[1]) {
                flag = false
            }
        })
        if (flag) {
            queue.push(childval)
            obj.child.push(new space(childval, obj))
    
        }
        else if (childval[0] === goal[0] && childval[1] === goal[1]) {
            obj.child.push(new space(childval, obj))
        }
    
        // full b
        childval = [currSize[0], Number(size[1])]
        flag = true;
        queue.forEach((o) => {
            if (o[0] === childval[0] && o[1] === childval[1]) {
                flag = false
            }
        })
        if (flag) {
            queue.push(childval)
            obj.child.push(new space(childval, obj))
        }
        else if (childval[0] === goal[0] && childval[1] === goal[1]) {
            obj.child.push(new space(childval, obj))
        }
    
        // transfer a to b
    
    
        let num = size[1] - currSize[1]
        if (currSize[0] <= num) {
            childval = [0, Number(currSize[0] + currSize[1])]
        }
        else {
            childval = [Number(currSize[0] - num), Number(currSize[1] + num)]
        }
    
    
        flag = true;
        queue.forEach((o) => {
            if (o[0] === childval[0] && o[1] === childval[1]) {
                flag = false
            }
        })
        if (flag) {
            queue.push(childval)
            obj.child.push(new space(childval, obj))
        }
        else if (childval[0] === goal[0] && childval[1] === goal[1]) {
            obj.child.push(new space(childval, obj))
        }
    
        // transfer b to a
    
        num = size[0] - currSize[0]
        if (currSize[1] <= num) {
            childval = [Number(currSize[0] + currSize[1]), 0]
        }
        else {
            childval = [Number(currSize[0] + num), Number(currSize[1] - num)]
    
        }
        flag = true;
        queue.forEach((o) => {
            if (o[0] === childval[0] && o[1] === childval[1]) {
                flag = false
            }
        })
        if (flag) {
            queue.push(childval)
            obj.child.push(new space(childval, obj))
        }
        else if (childval[0] === goal[0] && childval[1] === goal[1]) {
            obj.child.push(new space(childval, obj))
        }
    
    
    
    
        //  empty a
        childval = [0, Number(currSize[1])]
    
        flag = true;
        queue.forEach((o) => {
            if (o[0] === childval[0] && o[1] === childval[1]) {
                flag = false
            }
        })
        if (flag) {
            queue.push(childval)
            obj.child.push(new space(childval, obj))
        }
        else if (childval[0] === goal[0] && childval[1] === goal[1]) {
            obj.child.push(new space(childval, obj))
        }
    
        // empty b
        childval = [Number(currSize[0]), 0]
        flag = true;
        queue.forEach((o) => {
            if (o[0] === childval[0] && o[1] === childval[1]) {
                flag = false
            }
        })
        if (flag) {
            queue.push(childval)
            obj.child.push(new space(childval, obj))
        }
        else if (childval[0] === goal[0] && childval[1] === goal[1]) {
            obj.child.push(new space(childval, obj))
        }
        obj.child.forEach((i) => {
            console.log(i)
            generate(i)
        })
    }
    
    generate(s)
    
    let visitnode=[]
    visitnode.push(s);
    
    
    let bfs=()=>{
        while(visitnode.length!==0){
           let node=[visitnode[0].data.a,visitnode[0].data.b]
           console.log((Number(node[0])===Number(goal[0]) && Number(node[1])===Number(goal[1])))
           console.log(goal,node)
           if(Number(node[0])===Number(goal[0]) && Number(node[1])===Number(goal[1]))
           {
            // console.log(visitnode)
            // console.log(visitnode[0].data)
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
    
   
    console.log(result)
    if(result!==undefined)
    {

    while(result.root!==null){
        ans.push([Number(result.data.a),Number(result.data.b)])
        result=result.root
    }
    ans.push([Number(result.data.a),Number(result.data.b)])
    // console.table(ans.reverse())
    
    console.log()
    return ans.reverse()
    }
    else{
    console.log("no solution")
    return []
    }
    }
    export default twojug;
    
