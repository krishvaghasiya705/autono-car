import Nextarrow from "@/assets/svg/nextarrow";
import Link from "next/link";
interface Button1Props {
  link: string;
  Class: string;
  text: string;
}

export function Button1({ link, Class, text }: Button1Props) {
  return (
    <Link href={link}>
      <button className={Class}>
        <div className="read-more-button-textdiv">
          <span>{text}</span>
        </div>
        <div className="read-more-button-arrowdiv">
          <Nextarrow />
        </div>
      </button>
    </Link>
  );
}

export function Button2() {
  return <button className="button2">button2</button>;
}
