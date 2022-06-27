const designResources = [
    {
        title: "Intro to Research",
        season: "Fall 2021",
        week: 3,
        date: new Date("10/14/2021"),
        slidesLink: "https://docs.google.com/presentation/d/1pbosEwCy1zS9bQrP4ws4e-3zXUAvfPGjkTanKxB80wE/edit?usp=sharing"
    },
    {
        title: "Information Architecture, UI, and Wireframing",
        season: "Fall 2021",
        week: 4,
        date: new Date("10/21/2021"),
        slidesLink: "https://docs.google.com/presentation/d/1X6rpthf5EoMkkCyd5fcCxflOvqoqTAYWkEiQCyjeIeQ/edit?usp=sharing"
    },
    {
        title: "Prototyping (Lo-fi) + Intro to Figma",
        season: "Fall 2021",
        week: 6,
        date: new Date("11/04/2021"),
        slidesLink: "https://docs.google.com/presentation/d/1357YrTTsYnFttiofqRLe23hcd3a9l31vjvIZRI_eras/edit?usp=sharing"
    },
    {
        title: "Prototyping (Hi-fi)",
        season: "Fall 2021",
        week: 8,
        date: new Date("11/18/2021"),
        slidesLink: "https://docs.google.com/presentation/d/1n2qfkiGhCVIIukEso1aGCZ_nuZXfzrQooc_DFHgouWE/edit?usp=sharing"
    },
    {
        title: "Testing + Shipping",
        season: "Fall 2021",
        week: 10,
        date: new Date("12/02/2021"),
        slidesLink: "https://docs.google.com/presentation/d/1sNe5uZJBd5lJivNfhBBS0odhA_mkXGshuCzAx5r9Pc8/edit?usp=sharing"
    },
    {
        title: "Synthesis + Ideation",
        season: "Winter 2022",
        week: 6,
        date: new Date("02/07/2022"),
        slidesLink: "https://docs.google.com/presentation/d/1A2_j11gu_BBi_VEtPMlLFdMX9TBqVInXXdJkO2GM_Pg/edit?usp=sharing"
    },
    {
        title: "Wireframing",
        season: "Winter 2022",
        week: 7,
        date: new Date("02/14/2022"),
        slidesLink: "https://docs.google.com/presentation/d/10HcAgO9w5ulxcEgHjYfRE_t45YbZWq3sB8hoDznY-WQ/edit?usp=sharing"
    },

];

designResources.sort((a, b) => a.date.getTime() > b.date.getTime() ? -1
    : a.date.getTime() === b.date.getTime() ? 0 : 1);

export default designResources;