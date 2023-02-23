let  queue=[]
class node{
    constructor(val){
       this.data=val
       
    }

}

class space{
    constructor(data,val){
        this.data=new node(data)
        this.root=val;
        this.child=[]
    }
    addchild=(data)=>{
     this.child.push(new space(data,this))
    }
}

let s =new space([0,0],null);
queue.push([0,0])
// queue.forEach((a)=>{
//     console.log(a.a,a.b)
// })

let size=[4,3]
let goal=[0,1]

let generate=(obj)=>{
    let currSize=obj.data.data
 


    // full a
    let childval=[size[0],currSize[1]]
   
    let flag=true;
    queue.forEach((o)=>{
        if(o[0]==childval[0] && o[1]==childval[1]){
            flag=false
        }
    })
    if(flag){
        queue.push(childval)
        obj.child.push(new space(childval,obj))
        
    }

   // full b
    childval=[currSize[0],size[1]]
    flag=true;
    queue.forEach((o)=>{
        if(o[0]==childval[0] && o[1]==childval[1]){
            flag=false
        }
    })
    if(flag){
        queue.push(childval)
        obj.child.push(new space(childval,obj))
    }

    // transfer a to b


    let num=size[1]-currSize[1]
    if(currSize[0]<=num){
        childval=[0,(currSize[0]+currSize[1])]
    }
    else{
        childval=[currSize[0]-num,currSize[1]+num]
    }

    flag=true;
    queue.forEach((o)=>{
        if(o[0]==childval[0] && o[1]==childval[1]){
            flag=false
        }
    })
    if(flag){
        queue.push(childval)
        obj.child.push(new space(childval,obj))
    }
     // transfer b to a
 
     num=size[0]-currSize[0]
     if(currSize[1]<=num){
         childval=[currSize[0]+currSize[1],0] 
     }
     else{
        childval=[currSize[0]+num,currSize[1]-num] 
       
    }

    flag=true;
     queue.forEach((o)=>{
         if(o[0]==childval[0] && o[1]==childval[1]){
             flag=false
         }
     })
     if(flag){
         queue.push(childval)
         obj.child.push(new space(childval,obj))
     }




    //  empty a
    childval=[0,currSize[1]]

    flag=true;
    queue.forEach((o)=>{
        if(o[0]==childval[0] && o[1]==childval[1]){
            flag=false
        }
    })
    if(flag){
        queue.push(childval)
        obj.child.push(new space(childval,obj))
    }

    // empty b
    childval=[currSize[0],0]
    flag=true;
    queue.forEach((o)=>{
        if(o[0]==childval[0] && o[1]==childval[1]){
            flag=false
        }
    })
    if(flag){
        queue.push(childval)
        obj.child.push(new space(childval,obj))
    }
    obj.child.forEach((i)=>{
       generate(i)
    })
}

generate(s)



let visit=(s)=>{
    console.log(s.data)
    s.child.forEach((i)=>{
        visit(i)
    })
}
visit(s)