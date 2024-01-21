import Directory from "./components/directory/directory.component";

const App = () => {

    const categories = [
        {
            id: 1,
            title: "Şapkalar",
            subTitle: "Ürünlere Göz At",
            image: "https://i.ibb.co/cvpntL1/hats.png"
        },
        {
            id: 2,
            title: "Çeketler",
            subTitle: "Ürünlere Göz At",
            image: "https://i.ibb.co/px2tCc3/jackets.png"
        },
        {
            id: 3,
            title: "Ayakkabılar",
            subTitle: "Ürünlere Göz At",
            image: "https://i.ibb.co/0jqHpnp/sneakers.png"
        },
        {
            id: 4,
            title: "Erkekler",
            subTitle: "Ürünlere Göz At",
            image: "https://i.ibb.co/R70vBrQ/men.png"
        },
        {
            id: 5,
            title: "Kadınlar",
            subTitle: "Ürünlere Göz At",
            image: "https://i.ibb.co/GCCdy8t/womens.png"
        },
    ]

    return (

            <Directory categories={categories}/>

    );
}

export default App;
