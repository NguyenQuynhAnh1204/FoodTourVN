
const data = [
    {
        img: "img/anh12.jpeg",
        title: "24h ăn sập Hà Nội cùng Ninh Tito",
        describe: "Việc sáng nay ăn gì, trưa nay ăn gì, tối nay ăn gì, ăn xong rồi đi ăn gì nữa đây sẽ không còn làm bạn bối rối nữa. Dưới đây Ninh sẽ chỉ cho các bạn một số địa điểm ăn uống thả ga trong 24h ở Hà Nội luôn. Ninh hi vọng chắc ai đó sẽ cần!"
    },
    {
        img: "img/anh5.jpeg",
        title: "24h ăn sập Hà Nội cùng Ninh Tito",
        describe: "Việc sáng nay ăn gì, trưa nay ăn gì, tối nay ăn gì, ăn xong rồi đi ăn gì nữa đây sẽ không còn làm bạn bối rối nữa. Dưới đây Ninh sẽ chỉ cho các bạn một số địa điểm ăn uống thả ga trong 24h ở Hà Nội luôn. Ninh hi vọng chắc ai đó sẽ cần!"
    },
    {
        img:"img/anh1.jpeg",
        title: "24h ăn sập Hà Nội cùng Ninh Tito",
        describe: "Việc sáng nay ăn gì, trưa nay ăn gì, tối nay ăn gì, ăn xong rồi đi ăn gì nữa đây sẽ không còn làm bạn bối rối nữa. Dưới đây Ninh sẽ chỉ cho các bạn một số địa điểm ăn uống thả ga trong 24h ở Hà Nội luôn. Ninh hi vọng chắc ai đó sẽ cần!"
    },
    {
        img: "img/anh4.jpeg",
       title: "24h ăn sập Hà Nội cùng Ninh Tito",
        describe: "Việc sáng nay ăn gì, trưa nay ăn gì, tối nay ăn gì, ăn xong rồi đi ăn gì nữa đây sẽ không còn làm bạn bối rối nữa. Dưới đây Ninh sẽ chỉ cho các bạn một số địa điểm ăn uống thả ga trong 24h ở Hà Nội luôn. Ninh hi vọng chắc ai đó sẽ cần!"
    },
    {
        img: "img/anh7.jpeg",
       title: "24h ăn sập Hà Nội cùng Ninh Tito",
        describe: "Việc sáng nay ăn gì, trưa nay ăn gì, tối nay ăn gì, ăn xong rồi đi ăn gì nữa đây sẽ không còn làm bạn bối rối nữa. Dưới đây Ninh sẽ chỉ cho các bạn một số địa điểm ăn uống thả ga trong 24h ở Hà Nội luôn. Ninh hi vọng chắc ai đó sẽ cần!"
    },
    {
        img:   "img/anh8.jpeg",
        title: "24h ăn sập Hà Nội cùng Ninh Tito",
        describe: "Việc sáng nay ăn gì, trưa nay ăn gì, tối nay ăn gì, ăn xong rồi đi ăn gì nữa đây sẽ không còn làm bạn bối rối nữa. Dưới đây Ninh sẽ chỉ cho các bạn một số địa điểm ăn uống thả ga trong 24h ở Hà Nội luôn. Ninh hi vọng chắc ai đó sẽ cần!"
    },
    
]


function BlogInf() {
    return (
        <>
        {data.map((d, index) => (
            <div className="blog-item">
                <img src={d.img} alt={`blog ${index+1}`}/>
                <div className="description">
                    <h4 className="roboto">{d.title}</h4>
                    <p className="cabin">{d.describe}</p>
                </div>
            </div>
        ))}   
        </>
    )
}

export default BlogInf;