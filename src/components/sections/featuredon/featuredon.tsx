import Image from "next/image";
import fastcompany from "../../Images/image-5@2x.png";
import techcrunch from "../../Images/image-6@2x.png";
import mit from "../../Images/image-7@2x.png";
import forbes from "../../Images/image-8@2x.png";
import "./featuredon.css";

export default function Featuredon() {
    return (
        <div className="h-screen flex flex-col items-center justify-center relative">
            <b className="text-xl tracking-[0.1em] leading-[27.5px] uppercase inline-block font-sub-heading text-white p-10">
                Featured on
            </b>
            <div className="logos w-2/3 h-102 flex-shrink-0 rounded-3xl bg-bg-rgba bg-clip-padding backdrop-filter backdrop-blur-sm p-2">
                <div className="flex items-center justify-between">
                    <div className="m-2 px-2">
                        <Image
                            src={techcrunch}
                            alt="fastcompany"
                            width={196.332}
                            height={60.464}
                        />
                    </div>
                    <div className="m-2 px-2">
                        <Image
                            src={fastcompany}
                            alt="fastcompany"
                            width={175.556}
                            height={22.674}
                        />
                    </div>
                    <div className="m-2 px-2">
                        <Image
                            src={mit}
                            alt="fastcompany"
                            width={70.638}
                            height={32.391}
                        />
                    </div>
                    <div className="m-2 px-2">
                        <Image
                            src={forbes}
                            alt="fastcompany"
                            width={119.461}
                            height={32.391}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
