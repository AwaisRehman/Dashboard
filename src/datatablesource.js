export const userColumns = [

    { field: "id", headerName: "ID", width: 70 },
    { field: "user", headerName: "User", width: 230, renderCell: (params)=> {
        return (
            <div className= "cellWithImg">
                <img className="cellImg" src={params.row.img} alt= "avatar" />
                {params.row.username}
            </div>
        );

    },
 },
 {
     field: "email", 
     headerName: "Email", 
     width: 230,
 },
 {
    field: "age",
     headerName: "Age", 
     width: 100,
},
{
    field: "status", 
    headerName: "Status",
    width: 160,
    renderCell:(params)=>{
        return(
            <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
        );
    },
},
];






//temporary data
export const userRows = [
 
    {
        id: 1,
        username: "Jhon",
        img: "../../images/Official_pic.jpg",
        status: "active",
        email: "jhon@gmail.com",
        age: 30,
        

    },
    {
        id: 2,
        username: "Jhon",
        img: "../../images/Official_pic.jpg",
        email: "jhon@gmail.com",
        status: "passive",
        age: 30,
        

    },

    {
        id: 3,
        username: "Jhon",
        img: "../../images/Official_pic.jpg",
        email: "jhon@gmail.com",
        status: "pending",
        age: 30,
        

    },

    {
        id: 4,
        username: "Jhon",
        img: "../../images/Official_pic.jpg",
        email: "jhon@gmail.com",
        status: "active",
        age: 30,
       

    },

    {
        id: 5,
        username: "Jhon",
        img: "../../images/Official_pic.jpg",
        email: "jhon@gmail.com",
        age: 30,
        status: "passive",

    },

    {
        id: 6,
        username: "Jhon",
        img: "../../images/Official_pic.jpg",
        email: "jhon@gmail.com",
        age: 30,
        status: "pending",

    },

    {
        id: 7,
        username: "Jhon",
        img: "../../images/Official_pic.jpg",
        email: "jhon@gmail.com",
        age: 30,
        status: "active",

    },

    {
        id: 8,
        username: "Jhon",
        img: "../../images/Official_pic.jpg",
        email: "jhon@gmail.com",
        age: 30,
        status: "passive",

    },

    {
        id: 9,
        username: "Jhon",
        img: "../../images/Official_pic.jpg",
        email: "jhon@gmail.com",
        age: 30,
        status: "pending",

    },



    {
        id: 10,
        username: "Jhon",
        img: "../../images/Official_pic.jpg",
        email: "jhon@gmail.com",
        age: 30,
        status: "active",

    },
];