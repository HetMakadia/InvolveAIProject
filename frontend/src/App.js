import './App.css';
import React, {useState} from "react";
import {Document, Page} from 'react-pdf';
import Navbar from "./Navbar/Navbar";
import FileInput from "./FileInput/FileInput";
import QA from "./QA/QA";

function App() {
    const [File, setFile] = useState(null);
    return (<div className="">
        <div className=" bg-neutral  h-screen grid grid-cols-12">
            <div className="h-full  col-span-12">
                <header className="sticky absolute top-0 left-0 right-0 col-span-12 z-30">
                    <Navbar/>
                </header>
                {File !== null ? <QA File={File} setFile={setFile}/> : <FileInput setFile={setFile}/>}
            </div>
        </div>
    </div>);
}

export default App;
