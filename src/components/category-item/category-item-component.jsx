import "./category-item.styles.scss"

const categoryItem = ({category}) =>{

    const {title, subTitle, image} = category

    return (

        <div className={"category-container"}>
            <div className={"background-image"} style={{
                backgroundImage: `url(${image})`
            }}/>
            <div className={"category-body-container"}>
                <h2>{title}</h2>
                <p>{subTitle}</p>
            </div>
        </div>
    )


}

export default categoryItem