

function Filter() {
    return (
        <div className="tour-filter">
            <form>
                <fieldset>
                    <label className="filter-title">Giá</label>
                    <label className="input-range">
                        <span>{(0).toLocaleString("vi-VN")}<sup>đ</sup></span>
                        <input type="range" min="0đ" max="20000000" defaultValue={0}/>
                        <span>{(20000000).toLocaleString("vi-VN")}<sup>đ</sup></span>
                    </label>
                </fieldset>
                <fieldset>
                    <label className="filter-title">Thời lượng tuor</label>
                    <label><input type="checkbox" />Dưới 6 tiếng</label>
                    <label><input type="checkbox"/>6-12 tiếng</label>
                    <label><input type="checkbox"/>12-18 tiếng</label>
                    <label><input type="checkbox"/>Trên 18 tiếng</label>
                </fieldset>

                <fieldset>
                    <label className="filter-title">Số người tham gia</label>
                    <label><input type="checkbox"/>Cá nhân (1 người)</label>
                    <label><input type="checkbox"/>Nhóm 2-5 người</label>
                    <label><input type="checkbox"/>Nhóm 5-10 người</label>
                    <label><input type="checkbox"/>Nhóm 10-20 người</label>
                    <label><input type="checkbox"/>Nhóm trên 20 người</label>
                </fieldset>

                <fieldset>
                    <label  className="filter-title">Hình thức trải nghiệm</label>
                    <label><input type="checkbox"/>Ẩm thực đường phố</label>
                    <label><input type="checkbox"/>Nhà hàng hạng sang</label>
                    <label><input type="checkbox"/>Ẩm thực truyền thống</label>
                    <label><input type="checkbox"/>Thực phẩm healthy</label>
                </fieldset>
                
                <fieldset>
                    <label  className="filter-title">Đánh giá</label>
                    <label><input type="checkbox"/>Từ 5 sao</label>
                    <label><input type="checkbox"/>Trên 4.5 sao</label>
                    <label><input type="checkbox"/>Trên 4 sao</label>
                    <label><input type="checkbox"/>Dưới 4 sao</label>
                </fieldset>
            </form>   
        </div>
    )
}

export default Filter;