import "boxicons/css/boxicons.min.css";
import BaInfo from "../../components/basic-information";

export const metadata = {
  title: "Home",
}; // 레이아웃에서 굳이 보여줄 필요 없다.
export default function Tomato() {
  return (
    <div>
      <BaInfo />
    </div>
  );
}
