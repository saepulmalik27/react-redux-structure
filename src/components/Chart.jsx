import React from 'react'
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from "react-sparklines";
import _ from 'lodash'


const Chart = ({color, data, unit}) => {

    const avg = _.round(_.sum(data)/data.length)
    return (
        <div>
            <Sparklines data={data} weight={300} height={200}>
                <SparklinesLine color={color} />
                <SparklinesReferenceLine type={"avg"} />
            </Sparklines>
            <div> {avg} {unit}</div>
        </div>
    )
}

export default Chart
