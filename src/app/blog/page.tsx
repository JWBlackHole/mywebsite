"use client";
import React, { useEffect, useState } from 'react';

import { RegularText } from "@/components/Texts";

export default function Page(){
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchPing = async () => {
          try {
            const response = await fetch("/api/ping");
            const data     = await response.json();
            console.log(data);
            setLoading(false);
          } catch (error) {
            console.error('Error fetching API:', error);
          }
        };

        fetchPing();
    }, []);

    // return <RegularText>Nothing yet, but coming soon...</RegularText>;
    return <RegularText>{loading ? "Loading..." : "Loading Finished"}</RegularText>;
}