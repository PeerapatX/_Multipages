import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <h1>Peerapat Dorksantia</h1>
      <img src="/public/Human.png" alt="Peerapat" className="profile-picture"/>
      <p>
        เป็นนักศึกษาในภาควิชาวิทยาการคอมพิวเตอร์และนวัตกรรมพัฒนาซอฟต์แวร์ที่มหาวิทยาลัยศรีปทุม
      </p>
      <ul>
        <li><strong>ชื่อ : </strong>พีรพัฒน์ ดอกสันเทียะ</li>
        <li><strong>วันเกิด : </strong>22 มกราคม พ.ศ.2548</li>
        <li><strong>ศึกษาที่ : </strong> มหาวิทยาลัยศรีปทุม สาขา เทคโนโลยีสารสนเทศ วิทยาการคอมพิวเตอร์</li>
        <li><strong>เบอร์โทรศัพท์ : </strong>091 - 025 - 8816</li>
      </ul>
    </div>
  );
}

export default Home;
