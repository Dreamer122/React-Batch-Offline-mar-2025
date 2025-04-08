export const searchData=(productslist,searchstring)=>{
    const filterRestaurant=productslist.filter((res)=>{
        return(res.title.toLowerCase().includes(searchstring.toLowerCase()))
    })
    // console.log("filterRestaurant",filterRestaurant)
   return filterRestaurant
}
