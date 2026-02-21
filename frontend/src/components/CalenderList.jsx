import "../styles/calender.css";

import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import CalenderMonth from "./CalenderMonth";
import axios from "axios";

const CalenderList = () => {
    const { data, isPending, error } = useQuery({
        queryKey: ["data"],
        queryFn: async () => {
            const result = await axios.get("http://localhost:5001/");
            return result.data;
        },
    });

    // useEffect(() => {
    //     const fetchMonths = async () => {
    //         try {
    //             const result = await axios.get("http://localhost:5001/");
    //             const data = await result.data;

    //             setMonths(data);
    //         } catch (err) {
    //             console.log("Error fetching Months", err);
    //         }
    //     };

    //     fetchMonths();
    // }, []);

    if (isPending) return <span>Loading...</span>;
    if (error) return <span>Oops!</span>;

    return (
        <div className="calender">
            {data.map((month, index) => (
                <CalenderMonth
                    key={index}
                    monthName={month.name}
                    month={month}
                />
            ))}
        </div>
    );
};

export default CalenderList;
