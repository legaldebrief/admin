import client from "./client";

export const getPosts = async (pageNo, limit) => {
    try{

        const {data} = await client(`/blogPost/posts?pageNo=${pageNo}&limit=${limit}`);
        //{console.log(data.title)}
        return data;
    }catch(error){
        const { response } = error;

        if(response?.data){
            return response.data;
        }

        return {error: error.message || error};  
    }
};

export const deletePost = async (postId) => {
    try{
        console.log(postId)
        const {data} = await client.delete(`/blogPost/${postId}`);
        //{console.log(data)}
        return data;
    }catch(error){
        const { response } = error;

        if(response?.data){
            return response.data;
        }

        return {error: error.message || error};  
    }
}

export const searchPost = async (query) => {
    try{
        const {data} = await client(`/blogPost/search?title=${query}`);
        return data;
    }catch(error){
        const { response } = error;

        if(response?.data){
            return response.data;
        }

        return {error: error.message || error};  
    }
}

export const uploadImage = async (formData) => {
    try{
        const {data} = await client.post(`blogPost/upload-image`, formData);
        return data;
    }catch(error){
        const { response } = error;

        if(response?.data){
            return response.data;
        }
        
        return {error: error.message || error};  
    }
}
//var  daa =  {oo:"kuiuguiib"};

export const createPost = async (formData) => {
   // const myJSON = JSON.stringify(formData);
   // console.log(myJSON);
    try{
        const {data} = await client.post(`blogPost/create`, formData);
        //daa = data;
        
        return data;
    }catch(error){
        const { response } = error;
        
        if(response?.data){
            return response.data;
        }
        
        return {error: error.message || error};  
    }
}


export const getPost = async (slug) => {
    try{
        const {data} = await client(`blogPost/single/${slug}`);
        return data;
    }catch(error){
        const { response } = error;

        if(response?.data){
            return response.data;
        }

        return {error: error.message || error};  
    }
}

export const updatePost = async (postId, formData) => {
    try
    {
        console.log("fromdatra hai",formData)
        const {data} = await client.put(`blogPost/${postId}`, formData);
       // console.log()
        return data;
    }catch(error){
        const { response } = error;

        if(response?.data){
            return response.data;
        }

        return {error: error.message || error};  
    }
}