"use client";
// import React, { useEffect, useState } from 'react';
import React from 'react';
import { RegularText } from '@/components/Texts';

// import PostItem    from "@/components/PostItem";

// const PostItems = ({n}: {n: Number}) => {
//     return ([...Array(n)].map((e, i) => <PostItem key={i}/>));
// }

export default function Page(){
    // const [loading, setLoading] = useState(true);
    // useEffect(() => {
    //     const fetchPing = async () => {mjnb       
    //       try {
    //         const response = await fetch("/api/ping");
    //         const data     = await response.json();
    //         console.log(data);
    //         setLoading(false);
    //       } catch (error) {
    //         console.error('Error fetching API:', error);
    //       }
    //     };

    //     fetchPing();
    // }, []);

    return <RegularText>Nothing yet, but coming soon...</RegularText>;
    // return <RegularText>{loading ? "Loading..." : "Loading Finished"}</RegularText>;
    // return (
    //     <div>
    //         <PostItems n={8} />
    //     </div>
    // )
}