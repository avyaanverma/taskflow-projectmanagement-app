// data/projects.js

export const projects = [
    {
        id: 1,
        name: "Timmy SaaS Website",
        category: "SaaS",
        progress: 75,
        members: 5,
        tasks: {
            todo: [
                {
                    title: "Competitor Research",
                    priority: "Medium",
                    date: "Jan 24",
                },
            ],
            progress: [
                {
                    title: "Landing Page UI",
                    priority: "High",
                    date: "Jan 20",
                },
            ],
            review: [
                {
                    title: "Animation Review",
                    priority: "Low",
                    date: "Jan 14",
                },
            ],
        },
    },

    {
        id: 2,
        name: "Finance Mobile App",
        category: "Mobile",
        progress: 45,
        members: 3,
        tasks: {
            todo: [],
            progress: [],
            review: [],
        },
    },

    {
        id: 3,
        name: "CRM Dashboard",
        category: "CRM",
        progress: 90,
        members: 8,
        tasks: {
            todo: [],
            progress: [],
            review: [],
        },
    },
];