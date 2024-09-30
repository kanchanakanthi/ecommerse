import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { setUserDataInCookie } from "./sevices/storage.service";
import { checkUser } from "./sevices/login.service";


export default function Login(){
    const{
        register,
        handleSubmit,
        formState:{errors}
    }=useForm();

    const[ShowEmailPasswordMsg,setShowEmailPasswordMsg]=useState(false);


    async function saveData(data){
        let formData=new FormData();
        formData.append('email',data.email);
        formData.append('password',data.password);

        let res=await checkUser(formData);

        if(res.data[0]!==undefined){
            setShowEmailPasswordMsg(false);
            setUserDataInCookie(res.data[0]);
        }
        else{
            setShowEmailPasswordMsg(true);
        }

    }
    return(
        <div className="container m-5 w-50 bg-light-subtle">
            <h5>Login</h5>
            <form onSubmit={handleSubmit(data=>{saveData(data)})}>
                {
                    ShowEmailPasswordMsg==true&&<div className="text-danger">Incorrect Email/password</div>
                }
                <div className="">
                    <input type="text" className="form-control" placeholder="Enter Email" {...register('email',{required:true})}></input>
                    {errors.email && errors.email.type=="required" &&<div style={{color:"red"}}>mail is required</div>}
                </div>
                <div className="mt-3">
                    <input type="text" className="form-control" placeholder="Password" {...register('password',{required:true})}></input>
                    {errors.password && errors.password.type=="required" &&<div style={{color:"red"}}>password is required</div>}
                   
                </div>
                <div className="mt-3">
                    <input type="submit" className="form-control " style={{backgroundColor:"black", color:"white"}} ></input>
                </div>
                <div className="mt-3">
                    Create an account?<Link className="text-warning" to="/Register">Click here</Link>
                </div>
                <div style={{color:"dimgrey"}}>
    <input type="checkbox" className="me-2 mt-3"></input>
    By continuing i agree to the terms of use and privacy policy
</div>

            </form>
        </div>

    )
        
    }
