function TourDesContent({des}) {
    if (!des) return null;
    return (
        <div dangerouslySetInnerHTML={{ __html: des }}></div>
    )
}

export default TourDesContent