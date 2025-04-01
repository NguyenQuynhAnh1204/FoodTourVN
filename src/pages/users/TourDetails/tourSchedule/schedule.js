function TourSchedule({schedule}) {
    return (
        <div className="tour-detail_timetable">
            <p className="timetable-title">Lịch trình chi tiết</p>
            {
                schedule.map((sch, index)=> {
                    return (
                        <div className="timetable-detail" key={index}>
                        <p className="timetable-detail_time"><span>{`${sch.time} - `}</span>{sch.activity} :</p>
                        <p className="timetable-detail_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quo sint consequatur rem nobis optio necessitatibus dicta enim, numquam impedit iure possimus voluptatem odio sunt perspiciatis illo pariatur deserunt voluptatibus.</p>
                        </div>
                    )
                })
            }
        </div>
    )
}


export default TourSchedule;