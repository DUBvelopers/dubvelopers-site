const codingResources = [
    {
        title: "Google Sheets API",
        season: "Spring 2022",
        week: 7,
        date: new Date("05/12/2022"),
        videoLink: "https://www.youtube.com/watch?v=NaJWTYtx8Yo&list=PLLC9P_vXOnCLBu3ZibWlVrGHCW-8vC6xS&index=2"
    },
    {
        title: "Contact Form API",
        season: "Spring 2022",
        week: 6,
        date: new Date("05/05/2022"),
        videoLink: "https://www.youtube.com/watch?v=HgPJaUPra5A&list=PLLC9P_vXOnCLBu3ZibWlVrGHCW-8vC6xS&index=1"
    },
    {
        title: "Intro to JS",
        season: "Winter 2022",
        week: 1,
        date: new Date("01/13/2022"),
        videoLink: "https://www.youtube.com/watch?v=JaysMicA6I4&list=PLLC9P_vXOnCLSgjkkLXtLfQW0DODXJys_&index=2",
        slidesLink: "https://docs.google.com/presentation/d/1Iv-paFDX_5WvbMGm9Ard50gtD66YkcZX1bh3Stk0dUw/edit?usp=sharing"
    },
    {
        title: "Intro to APIs",
        season: "Winter 2022",
        week: 2,
        date: new Date("01/20/2022"),
        videoLink: "https://www.youtube.com/watch?v=c1GWIAc2Uoc&list=PLLC9P_vXOnCLSgjkkLXtLfQW0DODXJys_&index=3",
        slidesLink: "https://docs.google.com/presentation/d/1ykIP0z61W-98RHz8XJXcZbqH0u9nyJFQ-klqUp5Z3hw/edit?usp=sharing"
    },
    {
        title: "Intro to Node.js",
        season: "Winter 2022",
        week: 7,
        date: new Date("01/27/2022"),
        videoLink: "https://www.youtube.com/watch?v=w0SyJyhc4Ik&list=PLLC9P_vXOnCLSgjkkLXtLfQW0DODXJys_&index=4",
        slidesLink: "https://docs.google.com/presentation/d/1FDEb353FzZpeADobuVXOc32PaytI5oR1KrPsiqmtLxs/edit#slide=id.g35f391192_00"
    },
    {
        title: "Intro to React",
        season: "Winter 2022",
        week: 8,
        date: new Date("02/03/2022"),
        videoLink: "https://docs.google.com/presentation/d/1wkJfHCTG8P3iZ6bHpfoRzXFGIzyMjy_IKL1PKHCe1jY/edit#slide=id.g35f391192_00",
        slidesLink: "https://docs.google.com/presentation/d/1wkJfHCTG8P3iZ6bHpfoRzXFGIzyMjy_IKL1PKHCe1jY/edit#slide=id.g35f391192_00"
    },
    {
        title: "Basic FileSystem + Git Branching",
        season: "Winter 2022",
        week: 9,
        date: new Date("02/10/2022"),
        videoLink: "https://www.youtube.com/watch?v=nHkWLg5UIj0&list=PLLC9P_vXOnCLSgjkkLXtLfQW0DODXJys_&index=6",
        slidesLink: "https://docs.google.com/presentation/d/1mhRxzVAOQ88wjiJFY8LLl68EnjgBOWtNoQ9NiOj7owk/edit?usp=sharing"
    },
    {
        title: "Intellectual Property & Online Safety, Intermediate HTML",
        season: "Fall 2021",
        week: 4,
        date: new Date("10/19/2021"),
        videoLink: "https://www.youtube.com/watch?v=RY2De9NOj18&list=PLLC9P_vXOnCKC9-oY5AzAQlCJkJDJ_rT8&index=1",
        slidesLink: "https://docs.google.com/presentation/d/1ep5u7ZZv3ByTVK3sfoDW3_LTROGTfI1kjEw0Gjmhqvk/edit?usp=sharing"
    },
    {
        title: "Intro to CSS",
        season: "Fall 2021",
        week: 6,
        date: new Date("11/02/2021"),
        videoLink: "https://www.youtube.com/watch?v=Jj5WlPQuQww&list=PLLC9P_vXOnCKC9-oY5AzAQlCJkJDJ_rT8&index=2",
        slidesLink: "https://docs.google.com/presentation/d/14iGrS6HiwTOw1AGN6zKMrothpOwEu6bQdmgQF2ezy8I/edit?usp=sharing"
    },
    {
        title: "More CSS + Layouts",
        season: "Fall 2021",
        week: 7,
        date: new Date("11/09/2021"),
        videoLink: "https://www.youtube.com/watch?v=2-9s88L0Oow&list=PLLC9P_vXOnCKC9-oY5AzAQlCJkJDJ_rT8&index=3",
        slidesLink: "https://docs.google.com/presentation/d/1SJkhnKpr0nYaJyecwzNbBHVXWakkFsMHPjOZ3MJJLt0/edit?usp=sharing"
    },
    {
        title: "Dev Tools + Bootstrap",
        season: "Fall 2021",
        week: 8,
        date: new Date("11/16/2021"),
        videoLink: "https://www.youtube.com/watch?v=AHT13sSZJEU&list=PLLC9P_vXOnCKC9-oY5AzAQlCJkJDJ_rT8&index=4",
        slidesLink: "https://docs.google.com/presentation/d/1JoNIq9MT7RAUKe9_nnS6bZSGZRz7AL4FH4kgBwNlQDg/edit?usp=sharing"
    },
    {
        title: "Git, GitHub, and Deployment",
        season: "Fall 2021",
        week: 9,
        date: new Date("11/23/2021"),
        videoLink: "https://www.youtube.com/watch?v=z0EWpxC2qz0&list=PLLC9P_vXOnCKC9-oY5AzAQlCJkJDJ_rT8&index=5",
        slidesLink: "https://docs.google.com/presentation/d/1xVhAXzlcaIawMViAZLSmyS9jnCno-U9RjAw2506jRek/edit?usp=sharing"
    },
];

codingResources.sort((a, b) => a.date.getTime() > b.date.getTime() ? -1
    : a.date.getTime() === b.date.getTime() ? 0 : 1);

export default codingResources;