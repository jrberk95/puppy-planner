import React, { useState, useEffect } from 'react'
import ActivityTile from './ActivityTile'

const Schedule = (props) => {
    let sched

    const [activities, setActivities] = useState([])

    if (activities.length === 0) {
        sched = <h3>Nothing scheduled yet!</h3>
    } else {
        sched = activities.map((activity) => {
            return <ActivityTile activity={activity}/>
        })
    }

    return sched
}

export default Schedule