import React, { useEffect, useState } from "react";
import  PostForm  from "../../components/PostForm";
import  Container  from "../../components/container";
import service from '../../Appwrite/config';
import { useNavigate, useParams } from "react-router-dom";

export default function EditPost() {

    const [post, setPost] = useState(null); 
    const { slug } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (slug) {
           
            service.getPost(slug).then((post) => {
                if (post) {
                    setPost(post);
                }
            });
        } else {
            navigate('/');
        }
    }, [slug, navigate]);

    return post ? (
        <div className="py-8">
            <Container>
                <PostForm post={post} />
            </Container>
        </div>
    ) : null;
}