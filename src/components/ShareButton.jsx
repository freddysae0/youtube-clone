import React from "react";

const ShareButton = ({ url, title }) => {
    /*************  ✨ Codeium Command ⭐  *************/
    /******  45759e72-49cf-43c4-a2cc-6c5a99c6e4f7  *******/
    const [shared, setShared] = React.useState(false);
    const handleShare = async () => {

        await navigator.clipboard.writeText(url);
        setTimeout(() => {
            setShared((prev) => !prev);
        }, 2000);
        setShared((prev) => !prev);
    };

    return (
        <button className="" onClick={handleShare} >
            {shared ? "Copied!" : "Copy"}

        </button>
    );
};


export default ShareButton;