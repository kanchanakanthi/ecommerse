import axios from "axios";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function Register(){
    const{register,
        handleSubmit,
formState:{errors}

    }=useForm();

    async function saveData(data){
        let formData=new FormData();
        formData.append("name",data.name);
        formData.append("email",data.email);
        formData.append("password",data.password);

        let options={
            headers:{"content-type":"multipart/form-data"}
        }
    
    await axios.post("https://localhost:4000/register",options,formData);
}
return(
<div className="container mt-5 bg-light w-50 " ><h5>Sign Up</h5>
    <form className="me-5 mt-5 mb-5 ms-5"onSubmit={handleSubmit(data=>{
        saveData(data);
    })}>
        
        <div className="mt-3">
            <input className="form-control" placeholder="enter the Name" type="text" {...register('name',{required:true})}></input>
            {errors.name && errors.name.type=="required"&&<div style={{color:"red"}}>name is required</div>
}

        </div>
        <div className="mt-3">
        <input type="text" className="form-control" placeholder="enter the Mail" {...register('email',{required:true})}></input>
        {errors.email && errors.email.type==="required"&&<div style={{color:"red"}}>email is required
        </div>
}</div>
<div className="mt-3" >
<input type="text"  className=" form-control"placeholder="enter the password"{...register('password',{required:true})} ></input>
{
    errors.password && errors.password.type==="required"&&<div style={{color:"red"}}>password is required</div>
}
</div>
<div className="mt-3">
<input type="submit" className= "form-control " style={{backgroundColor:"black", color:"white"}}></input>
</div>
<div className="mt-3">
Already have an acoount?<Link className="text-warning" to="/Login">Login</Link></div>
<div style={{color:"dimgrey"}}>
    <input type="checkbox" className="me-2 mt-3"></input>
    By continuing i agree to the terms of use and privacy policy
</div>

    </form>
</div>
)

}