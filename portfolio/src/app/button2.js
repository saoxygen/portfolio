'use client'
import React from "react";

export default function Button2({ call_to_action }) {

    function downloadURI() {
        var link = document.createElement("a");
        link.download = 'KopanoSekonyelaCV.docx';
        link.href = 'http://localhost:1337/uploads/Kopano_S_Developer_CV_cce7d4d0f9.docx';
        link.click();
        link.remove();
    }

    return (<button className="contact_btn special_font" onClick={downloadURI} >{call_to_action}</button>);
}