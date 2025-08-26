import {useSearchParams} from "react-router-dom";

export const PaginationComponent=()=>{
    const [searchParams,setSearchParams] = useSearchParams({page:'1'})
    let curentPage = Number(searchParams.get('page')||'1')
    return(
        <div>
            <button onClick={()=>{
                if (curentPage > 1){
                    setSearchParams({page:(--curentPage).toString()});
                }

            }}>
              prev page
            </button>
            <button onClick={()=>{
                setSearchParams({page:(++curentPage).toString()})
            }}>
                next page
            </button>
        </div>
    )



}