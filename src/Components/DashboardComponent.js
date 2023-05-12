import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchOrders } from '../redux/order_slice'
import { useNavigate } from 'react-router-dom'



const DashboardComponent = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const orderStatus = useSelector((state) => state.orders.status)
    const orders = useSelector((state) => state.orders.orders)
    const error = useSelector((state) => state.orders.error)
    useEffect(() => {
        if (orderStatus === 'idle') {
            dispatch(fetchOrders())
        }
    }, [orderStatus, dispatch])


    if (orderStatus == "loading") {
        return <p>Loading....</p>
    }
    if (orderStatus == "failed") {
        return <p>{error && "Error"}</p>
    }
    return (
        <div>{
            orders.map((order, index) => {
                return <div>

                    <p key={index}>{order.item_id}</p>
                    <button onClick={(e) => {
                        navigate("/user")
                    }}>Update</button>
                    <button onClick={(e) => { }}>Delete</button>
                </div>
            })
        }</div>
    )
}

export default DashboardComponent