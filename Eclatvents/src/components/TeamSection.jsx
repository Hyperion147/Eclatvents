import React from 'react'
import { AnimatedTooltip } from "./ui/animated-tooltip";
const people = [
    {
        id: 1,
        name: "Vedant Chawla",
        designation: "Co-Founder",
        image:
            "/team/ved.jpeg",
    },
    {
        id: 2,
        name: "Saniya Dixit",
        designation: "Co-founder & PR Manager",
        image:
            "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
        id: 3,
        name: "Sneha Chouhan",
        designation: "HR Manager",
        image:
            "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
        id: 4,
        name: "Suryansu Singh",
        designation: "IT Manager and UX Developer",
        image:
            "/team/sky.jpeg",
    }
];

const TeamSection = () => {
    return (
        <div>
            <h2 className='text-4xl font-bold text-center mb-10'>Our Team</h2>
            <div className="flex flex-row items-center justify-center mb-10 w-full">
                <AnimatedTooltip items={people} />
            </div>
        </div>
    )
}

export default TeamSection