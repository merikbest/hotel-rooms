import React from 'react';
import RoomFilter from "./RoomFilter";
import RoomList from "./RoomList";
import Loading from "./Loading";
import {withRoomConsumer} from "../context";

function RoomsContainer({context}) {
    const {loading, sortedRooms, rooms} = context

    if (loading) {
        return <Loading/>
    }
    return (
        <>
            <RoomFilter rooms={rooms}/>
            <RoomList rooms={sortedRooms}/>
        </>
    )
}

export default withRoomConsumer(RoomsContainer);