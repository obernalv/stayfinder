import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getHotelsxidThunk } from '../store/slices/hotelsxid.slice'

const Hotels_x_Id = () => {

    const { id } = useParams()
    const dispatch = useDispatch()
    const { data, loading, error }= useSelector(state => state.hotelsxid)
    const url = `https://hotels-api.academlo.tech/hotels/${id}`

    useEffect(() => {

        dispatch(getHotelsxidThunk(url));
        
    }, [dispatch, id])
    

    console.log(data, loading, error)

    return (
        <div>
            {loading ? <h3>Cargando...</h3> : error ? <h3>Error: {error}</h3> : (
                <div>
                    <h2>{data ? data.name : ''}</h2>
                    
                </div>
            )}
        </div>
    )

}

export default Hotels_x_Id