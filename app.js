


//DataList 
let DataList = [];
const date = new Date();

let Salary = this.document.getElementById("salary");
let Address= this.document.getElementById("address");
let FullName = this.document.getElementById("FullName");
let WorkHours = this.document.getElementById("workHours");
let TotalSalary= document.getElementById("Total-Expensses");
let tableBody = document.getElementById('table-body');
let links = document.getElementsByTagName('a');




// Employee class 
class Employee {
    constructor(id,name,salary,workHours,address,city){
        this.id = id;
        this.name = name;
        this.salary=salary;
        this.workHours= workHours;
        this.address=address;
        this.city= city;
        this.joined_at = new Date();
    }

}



// TotalExpensses Fucntion

const TotalExpensses= ()=>{
    let sum;
    // calculate the sum of all salaries using reduce method
    if (DataList.length) {

         sum = DataList.reduce((p,c)=>{
                return   {salary: Number(p.salary) + Number(c.salary)} 
        })
    }

    TotalSalary.innerHTML = sum.salary;

}


// inset Element TO DOm function
const insertElment = (data)=>{

        let html ='\
         <tr>\
        <th scope="row">'+DataList[DataList.length-1].id+'</th>\
        <td>'+ DataList[DataList.length-1].name +'</td>\
        <td>'+ DataList[DataList.length-1].salary +'</td>\
        <td>'+ DataList[DataList.length-1].workHours +'</td>\
        <td>'+ DataList[DataList.length-1].address+'</td>\
        <td>'+date.getDate() + "." + date.getMonth()+"."+date.getFullYear()+'</td>\
        <td><a class="btn" onclick="deleteEmployee(this.id)" id= '+ (DataList.length -1) +' ><i class="fas fa-trash-alt text-danger"></i></a> </td>\
        </tr>\
        '

      tableBody.insertAdjacentHTML('beforeend',html)


}

            // Create the Table again after deleting

        const ReinsertElement = (data)=>{

        // bring the element
        
        tableBody.innerHTML="";
        
        for(let i=0; i<DataList.length;i++){
            DataList[i].id=i;


        let html2 ='\
         <tr>\
        <th scope="row">'+DataList[i].id+'</th>\
        <td>'+ DataList[i].name +'</td>\
        <td>'+ DataList[i].salary +'</td>\
        <td>'+ DataList[i].workHours +'</td>\
        <td>'+ DataList[i].address+'</td>\
        <td>'+date.getDate() + "." + date.getMonth()+"."+date.getFullYear()+'</td>\
        <td><a class="btn" onclick="deleteEmployee(this.id)" id= '+ (i) +' ><i class="fas fa-trash-alt text-danger"></i></a> </td>\
        </tr>\
        '
      
      
        

     
      tableBody.insertAdjacentHTML('beforeend',html2)

    }
        

}


// add newEmployee function
const AddNewEmployee =()=>{
    let newEmployee ;
    let ID = DataList.length ; 

        // check if the DataList is empty 
        if (!ID){
            newEmployee = new Employee(ID,FullName.value,Salary.value,workHours.value,Address.value)
        }else {
            // bring the last elment id and increase it by 1 ;
            ID= DataList[ DataList.length-1 ].id +1
            newEmployee = new Employee(ID,FullName.value,Salary.value,workHours.value,Address.value)
        }
        

     // push the new Employee to the dataList 
     DataList.push(newEmployee);

     // invok insert the new element  to the DOM
        insertElment()

     console.log(DataList);
     TotalExpensses()
     
}



// delete specified Employee with id
const deleteEmployee=(id)=>{
    
    

    

    // serach for Employee using id 
    // then create a new Array without the specified Employee.
    
    DataList = DataList.filter((item)=>{
        return item.id !== Number(id);
    })

    console.log(DataList);
    ReinsertElement();
    TotalExpensses()
}




