import "./style.css"
import { useEffect, useState } from "react";
import Axios from "axios";

function F1() {

    const [data,setData] = useState([]);
    
    useEffect(()=>{
        Axios.get("https://dummyjson.com/users")
        .then((res)=>{
            if(res.status == 200) // 200 indicates that it is a success , 200 = OK
            {
                console.log(res.data.users);
                setData(res.data.users);
            }
            else{
                Promise.reject();
            }
        })
        .catch((err)=>alert(err)) // or .catch((error)=>{comsole.log("Error Occured")})
    },[])

    const ContactDetails = () =>{
        return data.map((val)=>{
            return (
                <tr>
                    <td>{val.id}</td>
                    <td>{val.image}</td>
                    <td>{val.firstName}</td>
                    <td>{val.lastName}</td>
                    <td>{val.gender}</td>
                    <td>{val.email}</td>
                    <td>{val.username}</td>
                    <td>{val.domain}</td>
                    <td>{val.ip}</td>
                    <td>{val.university}</td>
                </tr>
            )
        })
    }


    return(
        <div class="grad">
            <h1 class="heading">Dummy data</h1>
            {ContactDetails}
            <table>
                <tr>
                    <th>Sno</th>
                    <th>Profile Pic</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Gender</th>
                    <th>E-mail</th>
                    <th>Username</th>
                    <th>Domain</th>
                    <th>IP</th>
                    <th>University</th>
                </tr>
                {data.map((val)=> (
                        <tr>
                            <td style={{paddingLeft: "19px"}}>{val.id}</td>
                            <td style={{width: "80px"}}><center><img style={{height: "55%", width: "55%"}}src= {val.image} /></center></td>
                            <td>{val.firstName}</td>
                            <td>{val.lastName}</td>
                            <td>{val.gender}</td>
                            <td>{val.email}</td>
                            <td>{val.username}</td>
                            <td>{val.domain}</td>
                            <td>{val.ip}</td>
                            <td>{val.university}</td>
                        </tr>
                ))}
            </table>
        </div>
    )
}

export default F1;