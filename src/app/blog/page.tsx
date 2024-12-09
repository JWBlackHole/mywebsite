"use client";
import React, { useEffect } from 'react';

import { RegularText } from "@/components/Texts";
import { run } from "@/api/api_test";

export default function Page(){
    useEffect(()=> {
        run().catch(console.dir);
    }, [])

    return <RegularText>Nothing yet, but coming soon...</RegularText>;
}