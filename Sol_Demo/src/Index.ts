export const InnerMethod=(value1:number,value2:number):number=>{
    return value1+value2;
}

export class Test{

    public InnerMethod=InnerMethod;

    public InnerClass=new class {

        constructor(private outerClass:Test){
            console.log(this.outerClass);
        }

        public TestMethod(){
            console.log("Test Method");
        }

    }(this);

    public InnerClassExtension=new InnerClass(this);
}

export class InnerClass{

    constructor(private outerClass:Test){
        console.log(this.outerClass);
    }

    public TestMethod=():void=>{
        console.log("Test");
    }
}

console.log("Running");
let testObj=new Test()
    testObj.InnerClass.TestMethod();
    testObj.InnerClassExtension.TestMethod();

   
