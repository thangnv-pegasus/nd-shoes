import styles from './SizeProduct.module.scss'
import classNames from 'classnames/bind'
import TitlePage from '../../components/TitlePage'

const cx = classNames.bind(styles)

function SizeProduct() {
    return (
        <div className={cx('size-products')}>
            <TitlePage
                chidren={'Hướng dẫn chọn size'}
            />
            <div className='grid wide'>
                <div className={cx('heading')}>
                    Hướng dẫn chọn size
                </div>
                <p className={cx('title')}>Chuẩn bị</p>
                <ul>
                    <li>1 tờ giấy trắng lớn, phải to hơn bàn chân bạn</li>
                    <li>1 cây bút chì</li>
                    <li>1 cây thước đo</li>
                </ul>
                <p className={cx('title')}>Cách thực hiện</p>
                <p className={cx('title', 'bold', 'italic')}>Quy ước</p>
                <ul>
                    <li>Cỡ giày là N</li>
                    <li>Chiều dài bàn chân là L</li>
                </ul>
                <p className={cx('title')}>B1: Vẽ kích cỡ chân</p>
                <ul>
                    <li>Bạn đặt tờ giấy xuống sàn nhà, sau đó đặt bàn chân của bạn thật chắc chắn lên tờ giấy.</li>
                    <li>Dùng bút chì để vẽ lại khung bàn chân của mình cho thật chuẩn. Bạn nên giữ bút chì thẳng đứng và vuông góc với tờ giấy để vẽ được chính xác hơn.</li>
                </ul>
                <p className={cx('note')}>**Lưu ý: Bạn phải luôn giữ bàn chân ở vị trí cũ và không được di chuyển bàn chân ngay khi dừng bút chì giữa chừng.</p>
                <div className={cx('title')}>
                    B2: đánh dấu các số đo chiều dài và chiều rộng
                </div>
                <p>Bạn sử dụng bút chì để vẽ một đường thẳng để chạm vào các điểm trên cùng, dưới cùng và 2 bên của bản phác thảo bàn chân như hình ảnh dưới để chúng ta đo chiều dài chân.</p>
                <img src="https://cdn.shopify.com/s/files/1/1472/9264/files/do_giay_B2.jpg?v=1498491251" />
                <p className={cx('title')}>B3:Xác định chiều dài bàn chân (L)</p>
                <p>Bạn sử dụng thước kẻ để đo chiều dài từ phía dưới dòng kẻ trên đến dòng kẻ dưới mà bạn đã vẽ. Sau khi đo xong, bạn có thể làm tròn số trong khoảng 0.5cm. Bạn nên làm tròn xuống để trừ hao cho những sai lệch khi vẽ khuôn chân vì các đường kẻ thường chênh lên một chút so với kích thước thật của bàn chân bạn.</p>
                <p className={cx('note')}>**Lưu ý khi đo: bạn phải đo trên đường thẳng vuông góc với hai đường kẻ trên và dưới.</p>
                <img src="https://cdn.shopify.com/s/files/1/1472/9264/files/Do_giay_b3_8ff6184e-4160-448b-84a7-4bdc75af2c99.jpg?v=1498491704" />
                <p className={cx('title')}>B4: Tìm và chọn size giày phù hợp </p>
                <p>Ghi con số mà bạn đo được vào tờ giấy, rồi áp dụng công thức sau để xác định size giày của mình trên thang đo: N = L+1.5 cm = cỡ giày</p>
                <p>Ví dụ: Bạn đo được L= 23 cm =&gt; N= 23cm + 1.5cm= 24.5 cm. Vậy cỡ giày của bạn là 24.5 cm. Dựa vào bảng đo dưới đây bạn sẽ xác định được cỡ giày Nam là size 39 và cỡ giày Nữ là 42.</p>
                <img src="https://cdn.shopify.com/s/files/1/1472/9264/files/Size_giay_da_bong_0f7e55a3-fcd6-4810-8236-9eda9361705e.jpg?v=1498491789" />
                <p className={cx('title')}>QUY ĐỔI SIZE GIÀY ĐÁ BÓNG CỦA NIKE, ADIDAS VÀ PUMA</p>
                <p>Ghi con số mà bạn đo được vào tờ giấy, rồi áp dụng công thức sau để xác định size giày của mình trên thang đo: N = L+1.5 cm = cỡ giày</p>
                <p>Ví dụ: Bạn đo được L= 23 cm =&gt; N= 23cm + 1.5cm= 24.5 cm. Vậy cỡ giày của bạn là 24.5 cm. Dựa vào bảng đo dưới đây bạn sẽ xác định được cỡ giày Nam là size 39 và cỡ giày Nữ là 42.</p>
                <img src="https://cdn.shopify.com/s/files/1/1472/9264/files/Size_giay_da_bong_0f7e55a3-fcd6-4810-8236-9eda9361705e.jpg?v=1498491789" />
                <p className={cx('title','bold','italic')}>Một số lưu ý để lấy size giày chuẩn:</p>
                <ul>
                    <li>Tốt nhất bạn nên đo size giày vào cuối ngày vì lúc này đôi chân bạn được thư giản hoàn toàn</li>
                    <li>Bạn nên đo cả 2 chân, nếu có sai số giữa 2 bàn chân thì hãy chọn đôi giày có cỡ bằng với chân lớn hơn của bạn</li>
                    <li>Nếu chân bạn ốm và bề ngang nhỏ, hẹp, mỏng thì bạn chọn size giày theo hướng dẫn bên trên.</li>
                    <li>Nếu chân bạn mập, dày và có bề ngang rộng thì bạn chọn size theo hướng dẫn bên trên cộng thêm 1 size. Vd: bạn là nữ: dài chân đo được là size 36, nhưng chân có bề ngang rộng , mập và tròn đầy thì chọn size 37.</li>
                </ul>

            </div>
        </div>
    )
}

export default SizeProduct