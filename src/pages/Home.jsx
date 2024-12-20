import { useEffect, useState } from "react";
import SearchForm from "../components/SearchForm";
import VideosList from "../components/VideosList";

export default function Home() {

    const [inputText, setInputText] = useState('');
    const [showVideoList, setShowVideoList] = useState(false);
    useEffect(() => {
        if (inputText != '') {
            setShowVideoList(true)
        }
    }, [inputText])

    return (
        <div className={" w-screen min-h-screen " + (!showVideoList ? "flex items-center" : "")}>
            <div className="container flex flex-col gap-4 mx-auto p-20">
                <img src="/logo.png" className="w-80 mx-auto" alt="" />
                <SearchForm inputText={inputText} onNewInputText={setInputText}></SearchForm>
            </div>
            {showVideoList &&
                <div className="container  mx-auto flex  justify-center">

                    <VideosList shortName={false} inputText={inputText} ></VideosList>
                </div>}
        </div>
    );
}