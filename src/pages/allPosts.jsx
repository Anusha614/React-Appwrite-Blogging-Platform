import React, {useEffect, useState} from "react";
import service from '../../Appwrite/config'
import  PostCard  from "../../components/PostCard";
import  Container  from "../../components/container";


export default function AllPosts () {

    const [posts, setPosts] = useState([])
   useEffect(() => {
    service.listPost([]).then((response) => {
        if (response && response.rows) {
            
            setPosts(response.rows);
        } else {
            setPosts([]); 
        }
    });
}, []);
   

    return (
        <div className="w-full p-8">
            <Container>
                <div className="flex flex-wrap">
                    {posts && posts.map((post) => (
                        <div key={post.$id}>
                            <PostCard {...post}/>
                        </div>
                        
                    ))}
                    </div>
            </Container>
            
        </div>
    )
}