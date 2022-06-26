import Bloglist from "./Bloglist"
import { useState , useEffect } from "react";
const Home  = () => {
    // using react hook set is like a function
    const [name,set]=useState("Garvit")
    const click=(name,e)=>{
        console.log("hello"+name ,e)
        set("Arora")
    }


   // const [blogs,setblog]=useState(
   //     [
   //         { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
   //         { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
   //         { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
   //     ]
   // ) 

    const [blogs,setblog]=useState()
    

    const handledelete=(id)=>{
        const new_blogs = blogs.filter(blogs=>(blogs.id!==id))
        setblog(new_blogs)
    }
     
    useEffect(()=>{        //  every time rerendering rerendering  occurs this function runs like when we start our website and then when the state of data is changed 
         fetch("http://localhost:8000/blogs")// we can use dependency array to check when we want the function to run 
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            console.log(data)
            setblog(data)
        })


    },[])  // we have added dependency array so infinite loop is not happening otherwise it would have happened if we add set state in this function
   
    // we are passing reference to function and not the whole function because we want it to invoke when we are clicking on it 
    // e is the event and we are using ananomous function so that is is invoked on click only and not directly 
    // we  use react hooks to make variable reactive 

    // If data changes at any point in the backend react can track in the dom so add key attribute  while displaying 

    // passing data from parent component to child component using props 
    return ( 

        <div className="Home">
         {  /* <h2>Home Page</h2>
            <p>{name}</p>
            <button onClick={click}>Click me </button>
            <button onClick={(e)=>{click("Garvit",e)}}>Click me </button> 
            {
                blogs.map((blog)=>(
                    <div className="blog-prev" key={blog.id}> 
                    <h2>{blog.title}</h2>
                    <p>{blog.body} --{blog.author}</p>
                    </div>
                )

                )
            }
        */ }
        <Bloglist blogs = {blogs}  handledelete={handledelete}/>
        <Bloglist blogs={blogs.filter((blog)=>blog.author=="mario")}></Bloglist>





                
            
        
        </div>
     );
}
 
export default Home ;