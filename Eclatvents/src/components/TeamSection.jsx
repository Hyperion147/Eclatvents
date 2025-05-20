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
            "/team/sana.jpeg",
    },
    {
        id: 3,
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