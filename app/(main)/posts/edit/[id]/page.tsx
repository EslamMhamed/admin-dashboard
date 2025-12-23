"use client"
import BackButton from "@/components/BackButton"
import * as z from "zod"
import {useForm} from "react-hook-form"
import posts from "@/data/posts"
import { zodResolver } from "@hookform/resolvers/zod"

const formSchema = z.object({
    title: z.string().min(1, {
        message: "Title is required"
    }),
    body: z.string().min(1, {
        message: "Body is required"
    }),
    author: z.string().min(1, {
        message: "Author is required"
    }),
    date: z.string().min(1, {
        message: "Date  is required"
    })
})

type PostEditPageProps = {
    params : {
        id : string
    }
}

function PostEditPage({params}: PostEditPageProps) {
    
    const {id} =  params

    const post = posts.find((post)=> post.id === id)
    
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title : post?.title || "",
            body : post?.body || "",
            author : post?.author || "",
            date : post?.date || "",
        }
    })

  return (
    <>
        <BackButton text="Back To Posts" link="/posts" />
        
    </>
  )
}

export default PostEditPage