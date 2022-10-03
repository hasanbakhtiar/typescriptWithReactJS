type BasicDataProps={
    // product:{
    //     title:string
    //     price: number
    // }
    product:{
        title:string
        price: number
    }[]
}

export const BasicData=(props:BasicDataProps)=>{
    return(
        <div>
            {/* {props.product.title} */}
            {props.product.map((productdata)=>{
                return(
                   <div>
                     <h3>{productdata.title}</h3>
                    <p>{productdata.price}</p>
                   </div>
                )
            })}

        </div>
    )
}